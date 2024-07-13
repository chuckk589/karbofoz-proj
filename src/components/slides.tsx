"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import { useMainButton } from "@tma.js/sdk-react";
import { type CarouselApi } from "@/components/ui/carousel";

export default function Slides() {
    const mb = useMainButton();
    const [api, setApi] = React.useState<CarouselApi>();

    React.useEffect(() => {
        if (!api) {
            return;
        }

        api.on("select", () => {
            // Do something on select.
        });
    }, [api]);

    React.useEffect(() => {
        mb.setParams({
            text: "Next",
            textColor: "#aabb01",
            backgroundColor: "#000000",
        });

        mb.show();

        return mb.on("click", () => {
            console.log("click event received, api is", api, setApi);
            api?.scrollNext();
        });
    }, []);

    return (
        <Carousel className="w-full h-full" setApi={setApi}>
            <CarouselContent className="h-full">
                {Array.from({ length: 3 }).map((_, index) => (
                    <CarouselItem key={index} className="h-full">
                        <div className="p-6 h-full">
                            <Card className="h-full">
                                <CardContent className="flex h-full items-center justify-center p-6">
                                    <span className="text-4xl font-semibold">
                                        {index + 1}
                                    </span>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    );
}
