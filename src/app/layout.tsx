import type { Metadata as NextMetadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import QueryProvider from "@/context/query-provider";
import { Toaster as Sonner } from "sonner";
import { Toaster } from "react-hot-toast";
import { ClientContextProvider } from "../context/client-context";
import Metadata from "../components/Metadata";
import "../styles/globals.css";
import "../styles/alfabit-ui.css";
import "../styles/default-page-client.css";
import "../styles/default-page-server.css";
import "../styles/faq-accordion.css";
import "../styles/faq-block.css";
import "../styles/index-page.css";
import "../styles/layout.css";
import "../styles/partner-link.css";
import "../styles/sidebar.css";
import Footer from "@/components/new-footer";
import Header from "@/components/new-header";
import dynamic from "next/dynamic";

const CookieBanner = dynamic(() => import("@/components/cookie-banner"), {
    ssr: false,
});

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: NextMetadata = {
    title: "TestAML",
    description: "AML сервис оценки рисков криптоактвов",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={
                    montserrat.className + " layout--aml page--aml relative"
                }
            >
                <Toaster />
                {/* <Metadata /> */}
                <ClientContextProvider>
                    <QueryProvider>
                        <div>
                            <Header />
                            {children}

                            <Footer />
                            <CookieBanner />
                        </div>
                        <Sonner expand position="top-center" />
                    </QueryProvider>
                </ClientContextProvider>
            </body>
        </html>
    );
}
