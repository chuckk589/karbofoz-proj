import Image from "next/image";

export default function LoadingComponent() {
    return (
        <div className="w-full h-screen flex items-center justify-center flex-col">
            <p className="font-semibold text-3xl">Loading...</p>
        </div>
    );
}
