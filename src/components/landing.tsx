"use client";
import { useMainButton, useThemeParams } from "@tma.js/sdk-react";
import { useEffect } from "react";
import { Icon } from "@iconify/react";

function Logo() {
    const theme = useThemeParams();
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="117"
            height="33"
            viewBox="0 0 117 33"
            fill="none"
        >
            <path
                className="logo-icon"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.555 1.54327C13.125 -0.561732 9.98902 -0.502732 8.64002 1.65527L0.531024 14.6303C0.177816 15.195 -0.00638722 15.8491 0.000169114 16.5152C0.00672545 17.1813 0.203768 17.8316 0.568024 18.3893L9.05502 31.4033C10.445 33.5333 13.581 33.5333 14.97 31.4033L23.432 18.4283C23.8085 17.8516 24.006 17.1765 23.9996 16.4878C23.9932 15.7992 23.7832 15.1278 23.396 14.5583L14.555 1.54327ZM15.523 9.23027C15.218 14.6673 10.928 19.0463 5.51102 19.5243L12.013 29.4943L20.475 16.5203L15.523 9.23027Z"
                fill="#0057FF"
            ></path>
            <path
                className="logo-text"
                d="M37.4607 10.3558L32.8201 24.5004H29.0818L35.4216 7.43787H37.8005L37.4607 10.3558ZM41.3162 24.5004L36.6638 10.3558L36.2888 7.43787H38.6912L45.0662 24.5004H41.3162ZM41.1052 18.1488V20.9027H32.0935V18.1488H41.1052ZM48.2537 7.43787H51.2302L55.613 19.9652L59.9958 7.43787H62.9724L56.8083 24.5004H54.4177L48.2537 7.43787ZM46.6482 7.43787H49.613L50.1521 19.6488V24.5004H46.6482V7.43787ZM61.613 7.43787H64.5896V24.5004H61.074V19.6488L61.613 7.43787ZM78.6404 21.7582V24.5004H70.0505V21.7582H78.6404ZM71.1873 7.43787V24.5004H67.6716V7.43787H71.1873ZM87.3357 17.0121H82.9529L82.9294 14.598H86.6091C87.2576 14.598 87.7888 14.516 88.2029 14.3519C88.6169 14.1801 88.9255 13.934 89.1287 13.6136C89.3396 13.2855 89.4451 12.8871 89.4451 12.4183C89.4451 11.8871 89.3435 11.4574 89.1404 11.1293C88.9451 10.8011 88.6365 10.5629 88.2146 10.4144C87.8005 10.266 87.2654 10.1918 86.6091 10.1918H84.1716V24.5004H80.656V7.43787H86.6091C87.6013 7.43787 88.488 7.53162 89.2693 7.71912C90.0583 7.90662 90.7263 8.19177 91.2732 8.57458C91.8201 8.9574 92.238 9.44177 92.5271 10.0277C92.8162 10.6058 92.9607 11.2933 92.9607 12.0902C92.9607 12.7933 92.8005 13.4418 92.4802 14.0355C92.1677 14.6293 91.6716 15.1136 90.9919 15.4886C90.3201 15.8636 89.4412 16.0707 88.3552 16.1097L87.3357 17.0121ZM87.1833 24.5004H81.9919L83.363 21.7582H87.1833C87.8005 21.7582 88.3044 21.6605 88.6951 21.4652C89.0857 21.2621 89.3748 20.9886 89.5623 20.6449C89.7498 20.3011 89.8435 19.9066 89.8435 19.4613C89.8435 18.9613 89.7576 18.5277 89.5857 18.1605C89.4216 17.7933 89.156 17.5121 88.7888 17.3168C88.4216 17.1136 87.9373 17.0121 87.3357 17.0121H83.949L83.9724 14.598H88.1912L88.9998 15.5472C90.0388 15.5316 90.8748 15.7152 91.5076 16.098C92.1482 16.473 92.613 16.9613 92.9021 17.5629C93.199 18.1644 93.3474 18.809 93.3474 19.4965C93.3474 20.5902 93.1091 21.5121 92.6326 22.2621C92.156 23.0043 91.4568 23.5629 90.5349 23.9379C89.6208 24.3129 88.5037 24.5004 87.1833 24.5004ZM95.2341 18.2894V18.0433C95.2341 17.1136 95.3669 16.2582 95.6326 15.4769C95.8982 14.6879 96.2849 14.0043 96.7927 13.4261C97.3005 12.848 97.9255 12.3988 98.6677 12.0785C99.4099 11.7504 100.261 11.5863 101.222 11.5863C102.183 11.5863 103.039 11.7504 103.789 12.0785C104.539 12.3988 105.168 12.848 105.676 13.4261C106.191 14.0043 106.582 14.6879 106.847 15.4769C107.113 16.2582 107.246 17.1136 107.246 18.0433V18.2894C107.246 19.2113 107.113 20.0668 106.847 20.8558C106.582 21.6371 106.191 22.3207 105.676 22.9066C105.168 23.4847 104.543 23.934 103.801 24.2543C103.058 24.5746 102.207 24.7347 101.246 24.7347C100.285 24.7347 99.4294 24.5746 98.6794 24.2543C97.9373 23.934 97.3083 23.4847 96.7927 22.9066C96.2849 22.3207 95.8982 21.6371 95.6326 20.8558C95.3669 20.0668 95.2341 19.2113 95.2341 18.2894ZM98.6091 18.0433V18.2894C98.6091 18.8207 98.656 19.3168 98.7498 19.7777C98.8435 20.2386 98.9919 20.6449 99.1951 20.9965C99.406 21.3402 99.6794 21.6097 100.015 21.8051C100.351 22.0004 100.761 22.098 101.246 22.098C101.715 22.098 102.117 22.0004 102.453 21.8051C102.789 21.6097 103.058 21.3402 103.261 20.9965C103.465 20.6449 103.613 20.2386 103.707 19.7777C103.808 19.3168 103.859 18.8207 103.859 18.2894V18.0433C103.859 17.5277 103.808 17.0433 103.707 16.5902C103.613 16.1293 103.461 15.723 103.25 15.3715C103.047 15.0121 102.777 14.7308 102.441 14.5277C102.105 14.3246 101.699 14.223 101.222 14.223C100.746 14.223 100.34 14.3246 100.004 14.5277C99.6755 14.7308 99.406 15.0121 99.1951 15.3715C98.9919 15.723 98.8435 16.1293 98.7498 16.5902C98.656 17.0433 98.6091 17.5277 98.6091 18.0433ZM115.531 11.8207V14.2113H108.148V11.8207H115.531ZM109.976 8.69177H113.351V20.6801C113.351 21.0472 113.398 21.3285 113.492 21.5238C113.594 21.7191 113.742 21.8558 113.937 21.934C114.133 22.0043 114.379 22.0394 114.676 22.0394C114.886 22.0394 115.074 22.0316 115.238 22.016C115.41 21.9926 115.554 21.9691 115.672 21.9457L115.683 24.4301C115.394 24.5238 115.082 24.598 114.746 24.6527C114.41 24.7074 114.039 24.7347 113.633 24.7347C112.89 24.7347 112.242 24.6136 111.687 24.3715C111.14 24.1215 110.719 23.723 110.422 23.1761C110.125 22.6293 109.976 21.9105 109.976 21.0199V8.69177Z"
                fill={theme.textColor}
            ></path>
        </svg>
    );
}

function Footer() {
    const theme = useThemeParams();
    return (
        <div className="flex flex-col items-center justify-center w-full scale-50 -mb-6">
            <p
                className="text-lg font-semibold"
                style={{ color: theme.subtitleTextColor }}
            >
                SAFELEMENT LIMITED
            </p>
            <p
                className="opacity-60 text-center leading-tight"
                style={{ color: theme.subtitleTextColor }}
            >
                UNIT H 3/F SHEK KOK ROAD 8,
                <br /> TSEUNG KWAN O, N.T HONG KONG
            </p>
        </div>
    );
}

function ConnectWallet() {
    const theme = useThemeParams();
    function EmptyState() {
        return (
            <div className="flex flex-col w-full items-center space-y-4  justify-center">
                <img
                    src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Symbols/Currency%20Exchange.webp"
                    alt="Currency Exchange"
                    className="size-32"
                />
                <p
                    className="leading-tight"
                    style={{
                        color: theme.subtitleTextColor,
                    }}
                >
                    Connect your wallet to get started
                </p>
            </div>
        );
    }
    function WalletConnected() {
        return (
            <div className="flex flex-col w-full space-y-4 h-full">
                <div className="flex flex-col w-full space-y-2">
                    <p
                        className="text-sm"
                        style={{ color: theme.subtitleTextColor }}
                    >
                        Your wallet
                    </p>
                    <p
                        className="p-2 border rounded-xl w-full !ml-0 text-lg font-semibold"
                        style={{
                            borderColor: theme.accentTextColor,
                            color: theme.textColor,
                        }}
                    >
                        TAAfNiY6VVCSsAt...cMW7Do8euLCL
                    </p>
                </div>
                <div className="flex flex-col w-full space-y-2 flex-grow">
                    <p
                        className="text-sm"
                        style={{ color: theme.subtitleTextColor }}
                    >
                        Your AML checks
                    </p>
                    <div
                        className="p-2 border rounded-xl w-full border-dashed h-full flex flex-col justify-center items-center space-y-2"
                        style={{ borderColor: theme.subtitleTextColor }}
                    >
                        <img
                            src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Objects/Magnifying%20Glass%20Tilted%20Left.webp"
                            alt="Magnifying Glass Tilted Left"
                            className="size-32"
                        />
                        <p
                            className="text-center leading-none"
                            style={{
                                color: theme.subtitleTextColor,
                            }}
                        >
                            You have no AML checks.
                            <br />
                            Make your first check to get a rating.
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    function RenderContent() {
        // return <EmptyState />;
        return <WalletConnected />;
    }

    return (
        <div className="flex flex-col w-full h-full">
            <RenderContent />
        </div>
    );
}

export default function Landing() {
    const theme = useThemeParams();
    const mb = useMainButton();

    useEffect(() => {
        mb.setParams({
            backgroundColor: theme.buttonColor,
            textColor: theme.buttonTextColor,
            text: "Connect",
            isEnabled: true,
            isVisible: true,
        });
    }, []);

    return (
        <div
            className="w-full h-full flex flex-col items-center justify-between p-6 overflow-y-auto"
            style={{
                backgroundColor: theme.backgroundColor,
            }}
        >
            <section className="w-full space-y-6 flex flex-col items-center flex-grow">
                <header className="w-full flex justify-between items-center">
                    <Logo />
                    <Icon
                        icon="lucide:menu"
                        className="size-7"
                        style={{
                            color: theme.buttonColor,
                        }}
                    />
                </header>
                {/* <Banner /> */}
                <ConnectWallet />
            </section>
            {/* <FAQ /> */}
            <Footer />
        </div>
    );
}
