interface IEnv {
    TRONGRID_API_KEY: string;
    TRON_CONTRACT_ADDRESS: string;
    TRON_RECEIVER_ADDRESS: string;
}

if (!process.env.NEXT_PUBLIC_TRONGRID_API_KEY) {
    throw new Error("TRONGRID_API_KEY is required");
}

if (!process.env.NEXT_PUBLIC_TRON_CONTRACT_ADDRESS) {
    throw new Error("TRON_CONTRACT_ADDRESS is required");
}

if (!process.env.NEXT_PUBLIC_TRON_RECEIVER_ADDRESS) {
    throw new Error("TRON_RECEIVER_ADDRESS is required");
}

export const env: IEnv = {
    TRONGRID_API_KEY: process.env.NEXT_PUBLIC_TRONGRID_API_KEY,
    TRON_CONTRACT_ADDRESS: process.env.NEXT_PUBLIC_TRON_CONTRACT_ADDRESS,
    TRON_RECEIVER_ADDRESS: process.env.NEXT_PUBLIC_TRON_RECEIVER_ADDRESS,
};
