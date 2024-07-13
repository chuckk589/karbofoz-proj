"use client";
import ErrorComponent from "@/components/error-component";
import LoadingComponent from "@/components/loading-component";
import { useQuery } from "@tanstack/react-query";
import { useInitDataRaw, useMiniApp, useViewport } from "@tma.js/sdk-react";
import { useEffect } from "react";

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const initData = useInitDataRaw();
    const viewPort = useViewport();
    const miniApp = useMiniApp();

    useEffect(() => {
        miniApp.ready();
        viewPort.expand();
    }, []);

    const { data, isLoading, isError } = useQuery({
        queryKey: ["userAuth"],
        queryFn: async () => {
            const res = await fetch("/api/auth", {
                method: "POST",
                body: JSON.stringify({ initData }),
            });

            const d = await res.json();

            console.log(d);

            if (!res.ok) {
                throw new Error(
                    d.message ? d.message : "Failed to authenticate"
                );
            }

            return d;
        },
    });

    if (isLoading) {
        return <LoadingComponent />;
    } else if (isError) {
        return <ErrorComponent />;
    } else {
        return <>{children}</>;
    }
}
