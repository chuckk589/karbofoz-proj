"use client";
import { Icon } from "@iconify/react";
// import { useThemeParams } from "@tma.js/sdk-react";
import React from "react";

interface ITeamMember {
    role: string;
    name: string;
    image: string;
    twt: boolean;
}

const TEAM: ITeamMember[] = [
    {
        role: "Co-Founder",
        name: "Slava Demchuk",
        image: "slava-demchuk.jpeg",
        twt: true,
    },
    {
        role: "COO",
        name: "Vasiliy Vidmanov",
        image: "vasily-vidmanov.jpeg",
        twt: false,
    },
    {
        role: "CCO",
        name: "Andrew Alexandrov",
        image: "andrew-aleksandrov.jpeg",
        twt: false,
    },
    {
        role: "Blockchain Analyst",
        name: "Sid Panda",
        image: "sid-panda.jpeg",
        twt: false,
    },
    {
        role: "AML Specialist",
        name: "Nikolay Demchuk",
        image: "mykola-demchuk.jpeg",
        twt: false,
    },
    {
        role: "Legal Advisor",
        name: "Anna Voevodina",
        image: "anna-voevodina.jpeg",
        twt: false,
    },
];

export const useThemeParams = () => {
    const t = {
        textColor: "#000",
        accentTextColor: "#37afe2",
        subtitleTextColor: "#000",
        buttonColor: "#37afe2",
        buttonTextColor: "#fff",
        backgroundColor: "#fff",
        sectionBackgroundColor: "#f5f5f5",
    };

    return t;
};

function TeamCard({
    role,
    name,
    image,
    twt,
}: {
    role: string;
    name: string;
    image: string;
    twt: boolean;
}) {
    const theme = useThemeParams();
    return (
        <div
            className="rounded-3xl overflow-hidden flex flex-col !h-[349px] !min-w-60 !max-w-60"
            style={{
                backgroundColor: theme.sectionBackgroundColor,
                width: 246,
                height: 349,
            }}
        >
            <img
                src={image}
                alt={name}
                // style={{ height: 192, width: 246 }}
                className="!h-48 !min-w-60 !max-w-60"
            ></img>
            <div className="w-full flex flex-col p-2 space-y-2">
                <p
                    className="font-semibold text-xl"
                    style={{ color: theme.subtitleTextColor }}
                >
                    {role}
                </p>
                <p
                    className="font-semibold text-3xl"
                    style={{ color: theme.textColor }}
                >
                    {name.split(" ").map((word, index) => (
                        <React.Fragment key={index}>
                            {word}
                            <br />
                        </React.Fragment>
                    ))}
                </p>
                <div className="flex items-center justify-start w-full space-x-2">
                    <Icon
                        icon="bxl:linkedin-square"
                        className="size-8"
                        style={{ color: theme.accentTextColor }}
                    />
                    {twt ? (
                        <Icon
                            icon="bxl:twitter"
                            className="size-8"
                            style={{ color: theme.accentTextColor }}
                        />
                    ) : null}
                </div>
            </div>
        </div>
    );
}

export default function ConnectionPage({ callback }: { callback: () => void }) {
    const theme = useThemeParams();
    const [isConnecting, setIsConnecting] = React.useState(false);
    return (
        <div className="flex flex-col w-full min-h-screen space-y-6">
            <section className="flex flex-col w-full space-y-6 p-6">
                <p
                    className="tracking-tight text-4xl font-bold text-center leading-snug"
                    style={{ color: theme.textColor }}
                >
                    Проверяем криптокошельки на грязные деньги
                </p>
                <p
                    className="text-xl text-center"
                    style={{ color: theme.textColor }}
                >
                    Проверяя кошельки, вы защищаете себя от мошенников и
                    ворованных монет.
                </p>
                <img
                    src="prime_image.png"
                    alt="Prime Image"
                    className="size-full"
                ></img>
            </section>
            <section className="flex flex-col w-full space-y-6 p-6">
                <div
                    className="rounded-3xl w-full flex flex-col space-y-6 p-6"
                    style={{ backgroundColor: theme.buttonColor }}
                >
                    <p
                        className="tracking-tight text-4xl font-bold"
                        style={{ color: theme.buttonTextColor }}
                    >
                        Что мы делаем ?
                    </p>
                    <p
                        className="text-xl"
                        style={{ color: theme.buttonTextColor }}
                    >
                        Мы проверяем криптокошельки и транзакции на наличие там
                        грязных денег и выдаем детальный отчет. Это нужно, чтобы
                        у вас не было проблем с проверяющими органами и чтобы
                        уберечь вас от мошенников.
                    </p>
                    <img src="pdfExample.svg" className="size-full"></img>
                    <p
                        className="text-2xl font-semibold my-4"
                        style={{ color: theme.buttonTextColor }}
                    >
                        Пример PDF отчета ↗
                    </p>
                </div>
                <div
                    className="rounded-3xl w-full flex flex-col space-y-6 p-6"
                    style={{ backgroundColor: theme.sectionBackgroundColor }}
                >
                    <p
                        className="tracking-tight text-4xl font-bold"
                        style={{ color: theme.textColor }}
                    >
                        Зачем это вам ?
                    </p>
                    <p className="text-xl" style={{ color: theme.textColor }}>
                        Если вам зайдут грязные деньги — вы рискуете получить
                        запрос от проверяющих органов и потерять свои средства
                        из-за блокировок.
                    </p>
                    <p className="text-xl" style={{ color: theme.textColor }}>
                        Этого может не случится, но ваш кошелек будет помечен.
                    </p>
                    <p className="text-xl" style={{ color: theme.textColor }}>
                        Рекомендуем делать проверки, и быть уверенным в своих
                        активах.
                    </p>
                </div>
                <div
                    className="rounded-3xl w-full flex flex-col space-y-6 p-6"
                    style={{ backgroundColor: theme.sectionBackgroundColor }}
                >
                    <p
                        className="tracking-tight text-4xl font-bold"
                        style={{ color: theme.textColor }}
                    >
                        Первая проверка бесплатно
                    </p>
                    <img src="1free.svg" className="size-full"></img>
                </div>
                <div
                    className="rounded-3xl w-full flex flex-col space-y-6 items-center"
                    // style={{ backgroundColor: theme.sectionBackgroundColor }}
                >
                    <p
                        className="tracking-tight text-4xl font-bold text-center"
                        style={{ color: theme.textColor }}
                    >
                        Как это работает ?
                    </p>
                    <iframe
                        src="https://youtu.be/JklzRAOZY-k"
                        // @ts-ignore
                        frameBorder="0"
                        // @ts-ignore
                        allowFullScreen
                    />
                </div>
            </section>
            <section
                className="flex flex-col w-full space-y-6 p-6"
                style={{ backgroundColor: theme.buttonColor }}
            >
                <div
                    className="rounded-3xl w-full flex flex-col space-y-10 py-6"
                    style={{ backgroundColor: theme.buttonColor }}
                >
                    <div className="flex flex-col w-full space-y-2">
                        <p
                            className="tracking-tight text-6xl font-bold"
                            style={{ color: theme.textColor }}
                        >
                            $5 359 800
                        </p>
                        <p
                            className="text-normal leading-tight"
                            style={{ color: theme.textColor }}
                        >
                            За три года работы мы смогли уберечь клиентов от
                            потерь на $5 359 800
                        </p>
                    </div>
                    <div className="flex flex-col w-full space-y-2">
                        <p
                            className="tracking-tight text-6xl font-bold"
                            style={{ color: theme.textColor }}
                        >
                            +6 500 000
                        </p>
                        <p
                            className="text-normal leading-tight"
                            style={{ color: theme.textColor }}
                        >
                            Кошельков содержат краденные или грязные деньги
                        </p>
                    </div>
                    <div className="flex flex-col w-full space-y-2">
                        <p
                            className="tracking-tight text-6xl font-bold"
                            style={{ color: theme.textColor }}
                        >
                            29%
                        </p>
                        <p
                            className="text-normal leading-tight"
                            style={{ color: theme.textColor }}
                        >
                            Всех проверенных нами кошельков — подозрительные
                        </p>
                    </div>
                </div>
            </section>
            <section className="flex flex-col w-full space-y-6 p-6">
                <div
                    className="rounded-3xl w-full flex flex-col space-y-6 p-6"
                    style={{ backgroundColor: theme.sectionBackgroundColor }}
                >
                    <p
                        className="tracking-tight text-4xl font-bold"
                        style={{ color: theme.textColor }}
                    >
                        Сколько стоит ваше спокойствие ?
                    </p>
                    <p
                        className="text-sm rounded-full py-2 px-4 text-center font-semibold tracking-tight"
                        style={{
                            backgroundColor: theme.textColor,
                            color: theme.backgroundColor,
                        }}
                    >
                        ПЕРВАЯ ПРОВЕРКА — БЕСПЛАТНО
                    </p>
                    <p
                        className="tracking-tight text-3xl"
                        style={{ color: theme.textColor }}
                    >
                        От
                    </p>
                    <p
                        className="tracking-tight text-6xl font-bold -mt-4"
                        style={{ color: theme.buttonColor }}
                    >
                        $0.2{" "}
                        <span
                            className="text-xl font-normal"
                            style={{ color: theme.textColor }}
                        >
                            /проверка
                        </span>
                    </p>
                </div>
                <div
                    className="rounded-3xl w-full flex flex-col space-y-6 items-center"
                    // style={{ backgroundColor: theme.sectionBackgroundColor }}
                >
                    <p
                        className="text-xl text-center"
                        style={{ color: theme.textColor }}
                    >
                        По нашей статистике,{" "}
                        <strong>
                            каждый четвертый кошелек — подозрительный.
                        </strong>{" "}
                        Потратив пару центов на проверку, вы можете уберечь себя
                        от потерь на несколько тысяч долларов.
                    </p>
                </div>
            </section>
            <section className="flex flex-col w-full space-y-6">
                <div
                    className="rounded-3xl w-full flex flex-col space-y-6 items-center px-6"
                    // style={{ backgroundColor: theme.sectionBackgroundColor }}
                >
                    <p
                        className="text-4xl text-center font-semibold"
                        style={{ color: theme.textColor }}
                    >
                        Наша команда
                    </p>
                    <p
                        className="text-xl text-center"
                        style={{ color: theme.textColor }}
                    >
                        AML специалисты помогают решить сложные ситуации и
                        уберечь вас от штрафов и блокировок. Профессиональные
                        специалисты будут представлять ваши интересы вплоть до
                        суда, если понадобится.
                    </p>
                </div>
                <div className="w-full flex space-x-6 items-center overflow-x-auto pl-6">
                    {TEAM.map((member, index) => (
                        <TeamCard
                            key={index}
                            role={member.role}
                            name={member.name}
                            image={member.image}
                            twt={member.twt}
                        />
                    ))}
                </div>
            </section>
            <div
                className="fixed bottom-0 left-0 w-full text-white  text-center py-4 flex items-center justify-center space-x-4 h-14"
                style={{
                    backgroundColor: theme.buttonColor,
                    color: theme.buttonTextColor,
                }}
                onClick={() => {
                    setIsConnecting(true);
                    callback();
                    setTimeout(() => {
                        setIsConnecting(false);
                    }, 3000);
                }}
            >
                {!isConnecting && <p>Подключить кошелек</p>}
                {isConnecting && (
                    <Icon
                        icon="svg-spinners:bars-rotate-fade"
                        className="size-7"
                    />
                )}
            </div>
        </div>
    );
}
