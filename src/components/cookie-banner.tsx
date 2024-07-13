"use client";
import { useLocalStorage } from "@uidotdev/usehooks";

export default function CookieBanner_() {
    const [cookie, setCookie] = useLocalStorage("cookie-banner-closed", false);
    function handleCookie() {
        setCookie(true);
    }

    if (cookie) return null;

    return (
        <div className="fixed bottom-0 left-0 w-full p-4 z-50">
            <div className="bg-gray-800 text-white flex rounded-lg flex-col items-start w-full p-4">
                <p className="text-xl font-semibold mb-2">
                    Мы заботимся о вашей конфиденциальности
                </p>
                <p className="mb-6">
                    TestAML использует файлы cookie, чтобы предоставить вам
                    наилучший пользовательский опыт. Нажимая «Принять все», вы
                    разрешаете нам использовать файлы cookie.
                </p>
                <button
                    className="w-full text-center font-semibold mb-6"
                    onClick={handleCookie}
                >
                    Отклонить все
                </button>
                <button
                    className="w-full p-2 font-semibold rounded-full bg-purple-600"
                    onClick={handleCookie}
                >
                    Принять все
                </button>
            </div>
        </div>
    );
}
