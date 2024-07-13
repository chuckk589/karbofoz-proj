"use client";
import Client from "@walletconnect/sign-client";
import { PairingTypes, SessionTypes } from "@walletconnect/types";
import { Web3Modal } from "@web3modal/standalone";
import { RELAYER_EVENTS } from "@walletconnect/core";

import {
    createContext,
    ReactNode,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useRef,
    useState,
} from "react";

import { getAppMetadata, getSdkError } from "@walletconnect/utils";
import {
    DEFAULT_APP_METADATA,
    DEFAULT_LOGGER,
    DEFAULT_PROJECT_ID,
    DEFAULT_RELAY_URL,
} from "../constants";
import { AccountBalances } from "../helpers";
import {
    getOptionalNamespaces,
    getRequiredNamespaces,
} from "../helpers/namespaces";

/**
 * Types
 */
interface IContext {
    client: Client | undefined;
    session: SessionTypes.Struct | undefined;
    connect: (pairing?: { topic: string }) => Promise<void>;
    disconnect: () => Promise<void>;
    onSessionConnected: (session: SessionTypes.Struct) => Promise<void>;
    isInitializing: boolean;
    chains: string[];
    relayerRegion: string;
    pairings: PairingTypes.Struct[];
    accounts: string[];
    balances: AccountBalances;
    isFetchingBalances: boolean;
    setPairings: any;
    setRelayerRegion: any;
    origin: string;
}
export const CHAIN_ID = "tron:0x2b6653dc";

/**
 * Context
 */
export const ClientContext = createContext<IContext>({} as IContext);

function isMobile() {
    if (typeof window !== "undefined") {
        return Boolean(
            window.matchMedia("(pointer:coarse)").matches ||
                /Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(
                    navigator.userAgent
                )
        );
    }

    return false;
}

export function isIos() {
    const ua = navigator.userAgent.toLowerCase();

    return isMobile() && (ua.includes("iphone") || ua.includes("ipad"));
}
/**
 * Web3Modal Config
 */

const web3Modal = new Web3Modal({
    projectId: DEFAULT_PROJECT_ID,
    themeMode: "dark",
    walletConnectVersion: 2,
});

const web3ModalIos = new Web3Modal({
    projectId: DEFAULT_PROJECT_ID,
    themeMode: "dark",
    walletConnectVersion: 2,
});

/**
 * Provider
 */
export function ClientContextProvider({
    children,
}: {
    children: ReactNode | ReactNode[];
}) {
    const [client, setClient] = useState<Client>();
    const [pairings, setPairings] = useState<PairingTypes.Struct[]>([]);
    const [session, setSession] = useState<SessionTypes.Struct>();

    const [isFetchingBalances, setIsFetchingBalances] = useState(false);
    const [isInitializing, setIsInitializing] = useState(false);
    const prevRelayerValue = useRef<string>("");

    const [balances, setBalances] = useState<AccountBalances>({});
    const [accounts, setAccounts] = useState<string[]>([]);
    const chains = [CHAIN_ID];
    const [relayerRegion, setRelayerRegion] = useState<string>(
        DEFAULT_RELAY_URL!
    );
    const [origin, setOrigin] = useState<string>(getAppMetadata().url);
    const reset = () => {
        setSession(undefined);
        setBalances({});
        setAccounts([]);
        setRelayerRegion(DEFAULT_RELAY_URL!);
    };

    // const utils = useUtils();

    const getAccountBalances = async (_accounts: string[]) => {
        setIsFetchingBalances(true);
        try {
        } catch (e) {
            console.error(e);
        } finally {
            setIsFetchingBalances(false);
        }
    };

    const onSessionConnected = useCallback(
        async (_session: SessionTypes.Struct) => {
            const allNamespaceAccounts = Object.values(_session.namespaces)
                .map((namespace) => namespace.accounts)
                .flat();
            const allNamespaceChains = Object.keys(_session.namespaces);

            setSession(_session);
            setAccounts(allNamespaceAccounts);

            await getAccountBalances(allNamespaceAccounts);
        },
        []
    );

    const connect = useCallback(
        async (pairing: any) => {
            if (typeof client === "undefined") {
                throw new Error("WalletConnect is not initialized");
            }
            console.log("connect, pairing topic is:", pairing?.topic);
            try {
                const requiredNamespaces = getRequiredNamespaces(chains);
                console.log(
                    "requiredNamespaces config for connect:",
                    requiredNamespaces
                );
                const optionalNamespaces = getOptionalNamespaces(chains);
                console.log(
                    "optionalNamespaces config for connect:",
                    optionalNamespaces
                );
                const { uri, approval } = await client.connect({
                    pairingTopic: pairing?.topic,
                    requiredNamespaces,
                    optionalNamespaces,
                });

                // Open QRCode modal if a URI was returned (i.e. we're not connecting an existing pairing).
                if (uri) {
                    // if (isIos()) {
                    // trust://ru/wc?d0006244fd5f43a635ebc553f3a6e7adedc0a6cbbe5f25690205df00480c1638@2?expiryTimestamp=1713445435&relay-protocol=irn&symKey=05b08e6ec6465115369a73fcbf69930ae7361357ebbc347650a56e52758527a2
                    // const trustUri = "trust://ru/" + uri.replace("wc:", "wc?");
                    // console.log(
                    //     "Opening WalletConnect modal with uri: ",
                    //     trustUri
                    // );
                    // window.open(
                    //     encodeURI(trustUri),
                    //     "_blank",
                    //     "noopener noreferrer"
                    // );
                    // windowRef!.location = trustUri;
                    // utils.openLink(trustUri);

                    // Create a flat array of all requested chains across namespaces.
                    const standaloneChains = Object.values(requiredNamespaces)
                        .map((namespace) => namespace.chains)
                        .flat() as string[];

                    web3Modal.openModal({ uri, standaloneChains });
                }

                const session = await approval();
                console.log("Established session:", session);
                await onSessionConnected(session);
                // Update known pairings after session is connected.
                setPairings(client.pairing.getAll({ active: true }));
            } catch (e) {
                console.error(e);
                // toast.error((e as Error).message, {
                //     position: "bottom-left",
                // });
                throw e;
            } finally {
                // close modal in case it was open
                // web3ModalIos.closeModal();
                web3Modal.closeModal();
            }
        },
        [chains, client, onSessionConnected]
    );

    const disconnect = useCallback(async () => {
        if (typeof client === "undefined") {
            throw new Error("WalletConnect is not initialized");
        }
        if (typeof session === "undefined") {
            throw new Error("Session is not connected");
        }

        await client.disconnect({
            topic: session.topic,
            reason: getSdkError("USER_DISCONNECTED"),
        });

        // Reset app state after disconnect.
        reset();
    }, [client, session]);

    const _subscribeToEvents = useCallback(
        async (_client: Client) => {
            if (typeof _client === "undefined") {
                throw new Error("WalletConnect is not initialized");
            }

            _client.on("session_ping", (args) => {
                // console.log("EVENT", "session_ping", args);
            });

            _client.on("session_event", (args) => {
                // console.log("EVENT", "session_event", args);
            });

            _client.on("session_update", ({ topic, params }) => {
                // console.log("EVENT", "session_update", { topic, params });
                const { namespaces } = params;
                const _session = _client.session.get(topic);
                const updatedSession = { ..._session, namespaces };
                onSessionConnected(updatedSession);
            });

            _client.on("session_proposal", (args) => {
                console.log("EVENT", "session_proposal", args);
                const timestamp = args.params.expiryTimestamp;
                const key = args.params.proposer.publicKey;
                const topic = args.params.pairingTopic;

                window.open(
                    `trust://ru/wc?${topic}@2?expiryTimestamp=${timestamp}&relay-protocol=irn&symKey=${key}`,
                    "_blank",
                    "noopener noreferrer"
                );
            });

            _client.on("session_delete", () => {
                // console.log("EVENT", "session_delete");
                reset();
            });
        },
        [onSessionConnected]
    );

    const _checkPersistedState = useCallback(
        async (_client: Client) => {
            if (typeof _client === "undefined") {
                throw new Error("WalletConnect is not initialized");
            }
            // populates existing pairings to state
            setPairings(_client.pairing.getAll({ active: true }));
            console.log(
                "RESTORED PAIRINGS: ",
                _client.pairing.getAll({ active: true })
            );

            if (typeof session !== "undefined") return;
            // populates (the last) existing session to state
            if (_client.session.length) {
                const lastKeyIndex = _client.session.keys.length - 1;
                const _session = _client.session.get(
                    _client.session.keys[lastKeyIndex]
                );
                console.log("RESTORED SESSION:", _session);
                await onSessionConnected(_session);
                return _session;
            }
        },
        [session, onSessionConnected]
    );

    const _logClientId = useCallback(async (_client: Client) => {
        if (typeof _client === "undefined") {
            throw new Error("WalletConnect is not initialized");
        }
        try {
            const clientId = await _client.core.crypto.getClientId();
            console.log("WalletConnect ClientID: ", clientId);
            localStorage.setItem("WALLETCONNECT_CLIENT_ID", clientId);
        } catch (error) {
            console.error(
                "Failed to set WalletConnect clientId in localStorage: ",
                error
            );
        }
    }, []);

    const createClient = useCallback(async () => {
        try {
            setIsInitializing(true);
            const claimedOrigin =
                localStorage.getItem("wallet_connect_dapp_origin") || origin;
            const _client = await Client.init({
                logger: DEFAULT_LOGGER,
                relayUrl: relayerRegion,
                projectId: DEFAULT_PROJECT_ID,
                metadata: {
                    ...(getAppMetadata() || DEFAULT_APP_METADATA),
                    url: claimedOrigin,
                    verifyUrl: DEFAULT_APP_METADATA.verifyUrl,
                },
            });

            setClient(_client);
            setOrigin(_client.metadata.url);
            prevRelayerValue.current = relayerRegion;
            await _subscribeToEvents(_client);
            await _checkPersistedState(_client);
            await _logClientId(_client);
        } catch (err) {
            throw err;
        } finally {
            setIsInitializing(false);
        }
    }, [
        _checkPersistedState,
        _subscribeToEvents,
        _logClientId,
        relayerRegion,
        origin,
    ]);

    useEffect(() => {
        const claimedOrigin =
            localStorage.getItem("wallet_connect_dapp_origin") || origin;
        let interval: NodeJS.Timeout;
        // simulates `UNKNOWN` validation by removing the verify iframe thus preventing POST message
        if (claimedOrigin === "unknown") {
            //The interval is needed as Verify tries to init new iframe(with different urls) multiple times
            interval = setInterval(
                () => document.getElementById("verify-api")?.remove(),
                500
            );
        }
        return () => {
            clearInterval(interval);
        };
    }, [origin]);

    useEffect(() => {
        if (!client) {
            createClient();
        } else if (
            prevRelayerValue.current &&
            prevRelayerValue.current !== relayerRegion
        ) {
            client.core.relayer.restartTransport(relayerRegion);
            prevRelayerValue.current = relayerRegion;
        }
    }, [createClient, relayerRegion, client]);

    useEffect(() => {
        if (!client) return;
        client.core.relayer.on(RELAYER_EVENTS.connect, () => {
            // toast.success("Network connection is restored!", {
            //     position: "bottom-left",
            // });
        });

        client.core.relayer.on(RELAYER_EVENTS.disconnect, () => {
            // toast.error("Network connection lost.", {
            //     position: "bottom-left",
            // });
        });
    }, [client]);

    const value = useMemo(
        () => ({
            pairings,
            isInitializing,
            balances,
            isFetchingBalances,
            onSessionConnected,
            accounts,
            chains,
            relayerRegion,
            client,
            session,
            connect,
            disconnect,
            setPairings,
            setRelayerRegion,
            origin,
        }),
        [
            pairings,
            isInitializing,
            balances,
            isFetchingBalances,
            onSessionConnected,
            accounts,
            chains,
            relayerRegion,
            client,
            session,
            connect,
            disconnect,
            setPairings,
            setRelayerRegion,
            origin,
        ]
    );

    return (
        <ClientContext.Provider
            value={{
                ...value,
            }}
        >
            {children}
        </ClientContext.Provider>
    );
}

export function useWalletConnectClient() {
    const context = useContext(ClientContext);
    if (context === undefined) {
        throw new Error(
            "useWalletConnectClient must be used within a ClientContextProvider"
        );
    }
    return context;
}
