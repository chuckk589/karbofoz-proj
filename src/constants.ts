import { getAppMetadata } from "@walletconnect/utils";

if (!process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID)
    throw new Error("`NEXT_PUBLIC_PROJECT_ID` env variable is missing.");

export const DEFAULT_MAIN_CHAINS = ["tron:0x2b6653dc"];

export const DEFAULT_TEST_CHAINS = ["tron:0xcd8690dc"];

export const DEFAULT_CHAINS = [...DEFAULT_MAIN_CHAINS, ...DEFAULT_TEST_CHAINS];

export const DEFAULT_PROJECT_ID =
    process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID;
export const DEFAULT_RELAY_URL =
    process.env.NEXT_PUBLIC_WALLETCONNECT_RELAY_URL;

export const DEFAULT_LOGGER = "debug";

export const DEFAULT_APP_METADATA = {
    name: "React App",
    description: "React App for WalletConnect",
    url: "https://walletconnect.com/",
    icons: ["https://avatars.githubusercontent.com/u/37784886"],
    verifyUrl: "https://verify.walletconnect.com",
};

/**
 * TRON
 */
export enum DEFAULT_TRON_METHODS {
    TRON_SIGN_TRANSACTION = "tron_signTransaction",
    TRON_SIGN_MESSAGE = "tron_signMessage",
}

export enum DEFAULT_TRON_EVENTS {}

export const DEFAULT_GITHUB_REPO_URL =
    "https://github.com/WalletConnect/web-examples/tree/main/dapps/react-dapp-v2";

type RelayerType = {
    value: string | undefined;
    label: string;
};

export const REGIONALIZED_RELAYER_ENDPOINTS: RelayerType[] = [
    {
        value: DEFAULT_RELAY_URL,
        label: "Default",
    },

    {
        value: "wss://us-east-1.relay.walletconnect.com",
        label: "US",
    },
    {
        value: "wss://eu-central-1.relay.walletconnect.com",
        label: "EU",
    },
    {
        value: "wss://ap-southeast-1.relay.walletconnect.com",
        label: "Asia Pacific",
    },
];

export const ORIGIN_OPTIONS = [
    {
        value: getAppMetadata().url,
        label: "VALID",
    },
    {
        value: "https://invalid.origin",
        label: "INVALID",
    },
    {
        value: "unknown",
        label: "UNKNOWN",
    },
];
