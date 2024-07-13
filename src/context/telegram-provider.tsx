"use client";
import ErrorComponent from "@/components/error-component";
import LoadingComponent from "@/components/loading-component";
import { DisplayGate, SDKProvider } from "@tma.js/sdk-react";

export function TelegramProvider({ children }: { children: React.ReactNode }) {
    return (
        <SDKProvider options={{ async: true, complete: true }}>
            <DisplayGate
                error={<ErrorComponent />}
                loading={<LoadingComponent />}
                initial={<LoadingComponent />}
            >
                {children}
            </DisplayGate>
        </SDKProvider>
    );
}
