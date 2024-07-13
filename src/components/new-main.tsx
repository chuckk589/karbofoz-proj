export default function Main({ callback }: { callback: () => void }) {
    function ConnectButton({
        noBanner,
        title,
    }: {
        noBanner?: boolean;
        title?: string;
        nologo?: boolean;
    }) {
        return (
            <div className="w-full flex items-center justify-center">
                <button
                    className="ui-button-old ui-button-old--primary ui-button-old--large is-gradient main-screen__action flex flex-cols items-center space-x-2 !py-2 !px-4"
                    data-v-6ef24f9f=""
                    onClick={() => {
                        callback();
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        viewBox="0 0 33 33"
                        fill="none"
                    >
                        <path
                            className="logo-icon"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M14.555 1.54327C13.125 -0.561732 9.98902 -0.502732 8.64002 1.65527L0.531024 14.6303C0.177816 15.195 -0.00638722 15.8491 0.000169114 16.5152C0.00672545 17.1813 0.203768 17.8316 0.568024 18.3893L9.05502 31.4033C10.445 33.5333 13.581 33.5333 14.97 31.4033L23.432 18.4283C23.8085 17.8516 24.006 17.1765 23.9996 16.4878C23.9932 15.7992 23.7832 15.1278 23.396 14.5583L14.555 1.54327ZM15.523 9.23027C15.218 14.6673 10.928 19.0463 5.51102 19.5243L12.013 29.4943L20.475 16.5203L15.523 9.23027Z"
                            fill="white"
                        ></path>
                    </svg>
                    <span className="ui-button-old__content">
                        {title ? title : "Получить отчёт"}
                    </span>
                    {!noBanner && (
                        <p className="border-l pl-2 text-white text-sm">
                            1<br />
                            БЕСПЛАТНО
                        </p>
                    )}
                </button>
            </div>
        );
    }

    function IconValid() {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#7b88ff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-check mr-2"
            >
                <path d="M20 6 9 17l-5-5" />
            </svg>
        );
    }

    return (
        <main className="main-block">
            <section className="main-screen !pb-0" data-v-6ef24f9f="">
                <div
                    className="main-screen__container container"
                    data-v-6ef24f9f=""
                >
                    <article
                        className="main-screen__content"
                        data-v-6ef24f9f=""
                    >
                        <h1
                            className="main-screen__title font-semibold text-white"
                            data-v-6ef24f9f=""
                        >
                            Проверяем чистоту происхождения криптоактивов
                        </h1>
                        <p
                            className="main-screen__description"
                            data-v-6ef24f9f=""
                        >
                            TestAML проводит анализ и мониторинг криптовалютных
                            транзакций в блокчейне. Это помогает предотвратить
                            сделки с участием незаконно заработанных денег.
                            Пользуясь нашим сервисом, вы защищаете себя от
                            мошенников и проблем с законом
                        </p>
                        <ConnectButton title="Получить отчёт" />
                    </article>
                    {/* <img
						className="main-screen__image"
						data-v-6ef24f9f=""
						draggable="false"
						src="/preview/aml.webp"
						srcSet="/preview/aml-2x.webp 2x"
					/> */}
                </div>
            </section>
            <section className="quick-start" data-v-2803246e="">
                <div className="container" data-v-2803246e="">
                    <h2
                        className="quick-start__title font-semibold text-white"
                        data-v-2803246e=""
                    >
                        3 простых шага, чтобы начать
                    </h2>
                    <div className="quick-start__steps" data-v-2803246e="">
                        <div className="quick-step" data-v-2803246e="">
                            <div
                                className="quick-step__number"
                                data-v-2803246e=""
                            >
                                1
                            </div>
                            <h4
                                className="quick-step__title"
                                data-v-2803246e=""
                            >
                                Зарегистрируйтесь
                            </h4>
                            <p
                                className="quick-step__description"
                                data-v-2803246e=""
                            >
                                Для запуска проверки нажмите на любую синюю
                                кнопку на данной странице.
                            </p>
                            <div
                                className="quick-step__line"
                                data-v-2803246e=""
                            />
                        </div>
                        <div className="quick-step" data-v-2803246e="">
                            <div
                                className="quick-step__number"
                                data-v-2803246e=""
                            >
                                2
                            </div>
                            <h4
                                className="quick-step__title"
                                data-v-2803246e=""
                            >
                                Подключите кошелек
                            </h4>
                            <p
                                className="quick-step__description"
                                data-v-2803246e=""
                            >
                                Авторизуйтесь в приложении кошелька, который
                                необходимо просканировать (Trust Wallet, SafePal
                                и др.), нажав{" "}
                                <span className="text-white font-semibold">
                                    Connect или Согласен
                                </span>
                            </p>
                            <div
                                className="quick-step__line"
                                data-v-2803246e=""
                            />
                        </div>
                        <div className="quick-step" data-v-2803246e="">
                            <div
                                className="quick-step__number"
                                data-v-2803246e=""
                            >
                                3
                            </div>
                            <h4
                                className="quick-step__title"
                                data-v-2803246e=""
                            >
                                Получите отчёт
                            </h4>
                            <p
                                className="quick-step__description"
                                data-v-2803246e=""
                            >
                                Получите AML-отчёт с возможностью скачивания PDF
                                с вашей проверкой.
                            </p>
                        </div>
                    </div>
                    <ConnectButton />
                </div>
            </section>
            <section className="service-pricing" data-v-80f36733="">
                <div className="container" data-v-80f36733="">
                    <h2
                        className="service-pricing__title font-semibold text-white"
                        data-v-80f36733=""
                    >
                        Тарифы
                    </h2>
                    <div
                        className="service-pricing__cards glow-parent"
                        data-v-80f36733=""
                    >
                        <div
                            className="tariff-card glow-effect"
                            data-v-80f36733=""
                            style={{
                                borderColor: "rgb(58, 49, 66)",
                            }}
                        >
                            <div
                                className="tariff-card__header"
                                data-v-80f36733=""
                            >
                                <div
                                    className="ui-coin__wrapper tariff-card__coin"
                                    data-v-80f36733=""
                                >
                                    <img
                                        className="tariff-card__coin ui-coin"
                                        draggable="false"
                                        src="/coins/usdtomni.svg"
                                    />
                                </div>
                                <span
                                    className="tariff-card__price"
                                    data-v-80f36733=""
                                >
                                    15
                                </span>
                                <span
                                    className="tariff-card__currency"
                                    data-v-80f36733=""
                                >
                                    USDT
                                </span>
                            </div>
                            <div
                                className="tariff-card__properties"
                                data-v-80f36733=""
                            >
                                <div
                                    className="tariff-card__property"
                                    data-v-80f36733=""
                                >
                                    <IconValid />
                                    <p data-v-80f36733="">
                                        <strong data-v-80f36733="">
                                            10  проверок
                                        </strong>
                                    </p>
                                </div>
                                <div
                                    className="tariff-card__property"
                                    data-v-80f36733=""
                                >
                                    <IconValid />
                                    <p data-v-80f36733="">
                                        <strong data-v-80f36733="">
                                            1.5 USDT
                                        </strong>{" "}
                                        за 1 проверку
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="tariff-card glow-effect"
                            data-v-80f36733=""
                            style={{
                                borderColor: "rgb(58, 49, 66)",
                            }}
                        >
                            <div
                                className="tariff-card__header"
                                data-v-80f36733=""
                            >
                                <div
                                    className="ui-coin__wrapper tariff-card__coin"
                                    data-v-80f36733=""
                                >
                                    <img
                                        className="tariff-card__coin ui-coin"
                                        draggable="false"
                                        src="/coins/usdtomni.svg"
                                    />
                                </div>
                                <span
                                    className="tariff-card__price"
                                    data-v-80f36733=""
                                >
                                    60
                                </span>
                                <span
                                    className="tariff-card__currency"
                                    data-v-80f36733=""
                                >
                                    USDT
                                </span>
                            </div>
                            <div
                                className="tariff-card__properties"
                                data-v-80f36733=""
                            >
                                <div
                                    className="tariff-card__property"
                                    data-v-80f36733=""
                                >
                                    <IconValid />
                                    <p data-v-80f36733="">
                                        <strong data-v-80f36733="">
                                            50  проверок
                                        </strong>
                                    </p>
                                </div>
                                <div
                                    className="tariff-card__property"
                                    data-v-80f36733=""
                                >
                                    <IconValid />
                                    <p data-v-80f36733="">
                                        <strong data-v-80f36733="">
                                            1.2 USDT
                                        </strong>{" "}
                                        за 1 проверку
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="tariff-card glow-effect"
                            data-v-80f36733=""
                            style={{
                                borderColor: "rgb(58, 49, 66)",
                            }}
                        >
                            <div
                                className="tariff-card__header"
                                data-v-80f36733=""
                            >
                                <div
                                    className="ui-coin__wrapper tariff-card__coin"
                                    data-v-80f36733=""
                                >
                                    <img
                                        className="tariff-card__coin ui-coin"
                                        draggable="false"
                                        src="/coins/usdtomni.svg"
                                    />
                                </div>
                                <span
                                    className="tariff-card__price"
                                    data-v-80f36733=""
                                >
                                    240
                                </span>
                                <span
                                    className="tariff-card__currency"
                                    data-v-80f36733=""
                                >
                                    USDT
                                </span>
                            </div>
                            <div
                                className="tariff-card__properties"
                                data-v-80f36733=""
                            >
                                <div
                                    className="tariff-card__property"
                                    data-v-80f36733=""
                                >
                                    <IconValid />
                                    <p data-v-80f36733="">
                                        <strong data-v-80f36733="">
                                            300  проверок
                                        </strong>
                                    </p>
                                </div>
                                <div
                                    className="tariff-card__property"
                                    data-v-80f36733=""
                                >
                                    <IconValid />
                                    <p data-v-80f36733="">
                                        <strong data-v-80f36733="">
                                            0.8 USDT
                                        </strong>{" "}
                                        за 1 проверку
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="tariff-card glow-effect"
                            data-v-80f36733=""
                            style={{
                                borderColor: "rgb(58, 49, 66)",
                            }}
                        >
                            <div
                                className="tariff-card__header"
                                data-v-80f36733=""
                            >
                                <div
                                    className="ui-coin__wrapper tariff-card__coin"
                                    data-v-80f36733=""
                                >
                                    <img
                                        className="tariff-card__coin ui-coin"
                                        draggable="false"
                                        src="/coins/usdtomni.svg"
                                    />
                                </div>
                                <span
                                    className="tariff-card__price"
                                    data-v-80f36733=""
                                >
                                    600
                                </span>
                                <span
                                    className="tariff-card__currency"
                                    data-v-80f36733=""
                                >
                                    USDT
                                </span>
                            </div>
                            <div
                                className="tariff-card__properties"
                                data-v-80f36733=""
                            >
                                <div
                                    className="tariff-card__property"
                                    data-v-80f36733=""
                                >
                                    <IconValid />
                                    <p data-v-80f36733="">
                                        <strong data-v-80f36733="">
                                            1000  проверок
                                        </strong>
                                    </p>
                                </div>
                                <div
                                    className="tariff-card__property"
                                    data-v-80f36733=""
                                >
                                    <IconValid />
                                    <p data-v-80f36733="">
                                        <strong data-v-80f36733="">
                                            0.6 USDT
                                        </strong>{" "}
                                        за 1 проверку
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="many-networks" data-v-21b8a8cb="">
                <div className="container" data-v-21b8a8cb="">
                    <div className="many-networks__inner" data-v-21b8a8cb="">
                        <article
                            className="many-networks__content"
                            data-v-21b8a8cb=""
                        >
                            <h2
                                className="many-networks__title font-semibold text-white"
                                data-v-21b8a8cb=""
                            >
                                Большой выбор сетей
                            </h2>
                            <p
                                className="many-networks__description"
                                data-v-21b8a8cb=""
                            >
                                Сервис может произвести проверку сетей BTC, ETH,
                                LTC, ETC, BCH, XRP, ZEC ERC-20 и TRC-20, а также
                                DOGE, ADA, SOL включая монеты Tether, BNB,
                                Ripple и множество других
                            </p>
                        </article>
                        <div className="relative">
                            <img
                                className="many-networks__image"
                                data-v-21b8a8cb=""
                                draggable="false"
                                src="/aml/networks.webp"
                                srcSet="/aml/networks-2x.webp 2x"
                            />

                            <div className="aspect-square absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-3 py-2  rounded-xl bg-gradient-to-b from-[#845dda] to-[#4c29aa]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="25"
                                    height="33"
                                    viewBox="0 0 25 33"
                                    className=""
                                    fill="none"
                                >
                                    <path
                                        className="logo-icon"
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M14.555 1.54327C13.125 -0.561732 9.98902 -0.502732 8.64002 1.65527L0.531024 14.6303C0.177816 15.195 -0.00638722 15.8491 0.000169114 16.5152C0.00672545 17.1813 0.203768 17.8316 0.568024 18.3893L9.05502 31.4033C10.445 33.5333 13.581 33.5333 14.97 31.4033L23.432 18.4283C23.8085 17.8516 24.006 17.1765 23.9996 16.4878C23.9932 15.7992 23.7832 15.1278 23.396 14.5583L14.555 1.54327ZM15.523 9.23027C15.218 14.6673 10.928 19.0463 5.51102 19.5243L12.013 29.4943L20.475 16.5203L15.523 9.23027Z"
                                        fill="#fff"
                                    ></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="any-checks" data-v-58c60818="">
                <div className="container" data-v-58c60818="">
                    <h2
                        className="any-checks__title font-semibold text-white"
                        data-v-58c60818=""
                    >
                        Проверка для любых целей
                    </h2>
                    <div className="any-checks__list" data-v-58c60818="">
                        <article className="check-item" data-v-58c60818="">
                            <img
                                className="check-item__icon"
                                data-v-58c60818=""
                                draggable="false"
                                src="/aml/any-checks/1.svg"
                            />
                            <div
                                className="check-item__content"
                                data-v-58c60818=""
                            >
                                <h4
                                    className="check-item__title"
                                    data-v-58c60818=""
                                >
                                    Проверка личного кошелька
                                </h4>
                                <p
                                    className="check-item__description"
                                    data-v-58c60818=""
                                >
                                    Убедитесь в чистоте криптоактивов на личном
                                    кошельке.
                                </p>
                            </div>
                        </article>
                        <article className="check-item" data-v-58c60818="">
                            <img
                                className="check-item__icon"
                                data-v-58c60818=""
                                draggable="false"
                                src="/aml/any-checks/2.svg"
                            />
                            <div
                                className="check-item__content"
                                data-v-58c60818=""
                            >
                                <h4
                                    className="check-item__title"
                                    data-v-58c60818=""
                                >
                                    Проверка входящих и исходящих транзакций
                                </h4>
                                <p
                                    className="check-item__description"
                                    data-v-58c60818=""
                                >
                                    Проверяйте любые транзакции в блокчейне.
                                </p>
                            </div>
                        </article>
                        <article className="check-item" data-v-58c60818="">
                            <img
                                className="check-item__icon"
                                data-v-58c60818=""
                                draggable="false"
                                src="/aml/any-checks/3.svg"
                            />
                            <div
                                className="check-item__content"
                                data-v-58c60818=""
                            >
                                <h4
                                    className="check-item__title"
                                    data-v-58c60818=""
                                >
                                    Кошельки сторонних сервисов
                                </h4>
                                <p
                                    className="check-item__description"
                                    data-v-58c60818=""
                                >
                                    Предотвратите попадание грязных монет на
                                    свой кошелек.
                                </p>
                            </div>
                        </article>
                        <article className="check-item" data-v-58c60818="">
                            <img
                                className="check-item__icon"
                                data-v-58c60818=""
                                draggable="false"
                                src="/aml/any-checks/4.svg"
                            />
                            <div
                                className="check-item__content"
                                data-v-58c60818=""
                            >
                                <h4
                                    className="check-item__title"
                                    data-v-58c60818=""
                                >
                                    Подозрительные активы
                                </h4>
                                <p
                                    className="check-item__description"
                                    data-v-58c60818=""
                                >
                                    Перед совершением транзакции проверка
                                    никогда не помешает.
                                </p>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
            <section className="service-capabilities" data-v-7cdd992f="">
                <div className="container" data-v-7cdd992f="">
                    <h2
                        className="service-capabilities__title font-semibold text-white"
                        data-v-7cdd992f=""
                    >
                        Все возможности AML-сервиса
                    </h2>
                    <div
                        className="service-capabilities__list glow-parent"
                        data-v-7cdd992f=""
                    >
                        <div
                            className="capability-card glow-effect"
                            data-v-7cdd992f=""
                        >
                            <h3
                                className="capability-card__title"
                                data-v-7cdd992f=""
                            >
                                Проверяйте кошельки
                            </h3>
                            <p
                                className="capability-card__description"
                                data-v-7cdd992f=""
                            >
                                Выберите сеть, введите адрес или хэш транзакции
                                и получите подробный отчёт с AML проверкой.
                            </p>
                        </div>
                        {/* <div
                            className="capability-card glow-effect"
                            data-v-7cdd992f=""
                        >
                            <h3
                                className="capability-card__title"
                                data-v-7cdd992f=""
                            >
                                Автоматизируйте
                            </h3>
                            <p
                                className="capability-card__description"
                                data-v-7cdd992f=""
                            >
                                Выполняйте{" "}
                                <strong>AML-проверки через API</strong>,
                                обезопасьте себя и свой бизнес.
                            </p>
                            <a
                                className="ui-button-old ui-button-old--secondary ui-button-old--small is-dark-gray is-opposite-icon capability-card__action"
                                data-v-7cdd992f=""
                                href="https://alfabit.gitbook.io/alfabit-aml"
                                target="_blank"
                            >
                                <span className="ui-button-old__icon">
                                    <i className="icon-arrow-right" />
                                </span>
                                <span className="ui-button-old__content">
                                    API документация
                                </span>
                            </a>
                        </div> */}
                        <div
                            className="capability-card glow-effect"
                            data-v-7cdd992f=""
                        >
                            <h3
                                className="capability-card__title"
                                data-v-7cdd992f=""
                            >
                                Безопасное пополнение
                            </h3>
                            <p
                                className="capability-card__description"
                                data-v-7cdd992f=""
                            >
                                Выдача <strong>уникальных адресов</strong> под
                                каждый платеж и зачисление средств или купленных
                                проверок на баланс в течение нескольких минут.
                            </p>
                        </div>
                        <div
                            className="capability-card glow-effect"
                            data-v-7cdd992f=""
                        >
                            <h3
                                className="capability-card__title"
                                data-v-7cdd992f=""
                            >
                                Получите PDF-отчет
                            </h3>
                            <p
                                className="capability-card__description"
                                data-v-7cdd992f=""
                            >
                                После проведенной проверки{" "}
                                <strong>скачайте PDF-файл с отчётом</strong>{" "}
                                проверки и полной информацией о кошельке.
                            </p>
                        </div>
                        <div
                            className="capability-card glow-effect"
                            data-v-7cdd992f=""
                        >
                            <h3
                                className="capability-card__title"
                                data-v-7cdd992f=""
                            >
                                Собственная база ЧС
                            </h3>
                            <p
                                className="capability-card__description"
                                data-v-7cdd992f=""
                            >
                                Проверяйте{" "}
                                <strong>
                                    бесплатно по базе черного списка.
                                </strong>{" "}
                                TestAML. Мы постоянно его пополняем.
                            </p>
                        </div>
                    </div>
                    <ConnectButton />
                </div>
            </section>

            <div className="partners" data-v-676ce4c4="">
                <h2
                    className="partners__title font-semibold text-white"
                    data-v-676ce4c4=""
                >
                    Сотрудничаем с ведущими сервисами
                </h2>
                <div className="partners__list" data-v-676ce4c4="">
                    <a
                        className="partner-link partners__link"
                        data-v-0bdfac7b=""
                        data-v-676ce4c4=""
                        href="https://www.chainalysis.com/"
                        target="_blank"
                    >
                        <img
                            alt="Chainalysis"
                            className="partner-link__image--mono"
                            data-v-0bdfac7b=""
                            draggable="false"
                            src="/partner/mono/chainalysis.svg"
                        />
                        <img
                            alt="Chainalysis"
                            className="partner-link__image"
                            data-v-0bdfac7b=""
                            draggable="false"
                            src="/partner/colorful/chainalysis.svg"
                        />
                    </a>
                    <a
                        className="partner-link partners__link"
                        data-v-0bdfac7b=""
                        data-v-676ce4c4=""
                        href="https://blockchair.com/awesome/swap-exchanges/alfabit-exchange"
                        target="_blank"
                    >
                        <img
                            alt="Blockchair"
                            className="partner-link__image--mono"
                            data-v-0bdfac7b=""
                            draggable="false"
                            src="/partner/mono/blockchair.svg"
                        />
                        <img
                            alt="Blockchair"
                            className="partner-link__image"
                            data-v-0bdfac7b=""
                            draggable="false"
                            src="/partner/colorful/blockchair.svg"
                        />
                    </a>
                </div>
            </div>
            {/* <section className="faq-block" data-v-adb97892="">
                <div className="container" data-v-adb97892="">
                    <div className="faq-block__inner" data-v-adb97892="">
                        <h2 className="faq-block__title" data-v-adb97892="">
                            Расскажем подробнее
                        </h2>
                        <div
                            className="ui-accordion faq-accordion faq-block__list"
                            data-v-7928ea3e=""
                            data-v-adb97892=""
                        >
                            <div
                                className="ui-accordion-item faq-accordion__item"
                                data-slug="what-is-the-difference-between-transaction-verification-and-address-verification?"
                                data-v-3cb9a4cd=""
                                data-v-7928ea3e=""
                                itemProp="mainEntity"
                                itemScope
                                itemType="https://schema.org/Question"
                            >
                                <div
                                    className="ui-accordion-item__wrapper"
                                    data-v-3cb9a4cd=""
                                >
                                    <div
                                        className="ui-accordion-item__title"
                                        data-v-3cb9a4cd=""
                                    >
                                        <span
                                            data-v-7928ea3e=""
                                            itemProp="name"
                                        >
                                            What is the difference between
                                            transaction verification and address
                                            verification?
                                        </span>
                                        <div
                                            className="d-flex align-items-center"
                                            data-v-3cb9a4cd=""
                                        >
                                            <div data-v-3cb9a4cd="" />
                                            <div
                                                className="ui-accordion-item__chevron"
                                                data-v-3cb9a4cd=""
                                            >
                                                <i
                                                    className="icon-caret-down"
                                                    data-v-3cb9a4cd=""
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="ui-accordion-item__content"
                                    data-v-3cb9a4cd=""
                                    style={{
                                        display: "none",
                                    }}
                                >
                                    <div
                                        className="faq-accordion__item-content"
                                        data-v-7928ea3e=""
                                        itemProp="acceptedAnswer"
                                        itemScope
                                        itemType="https://schema.org/Answer"
                                    >
                                        <div data-v-7928ea3e="" itemProp="text">
                                            <ul>
                                                <li>
                                                    Address verification
                                                    involves analyzing all
                                                    addresses ever associated
                                                    with the specific address,
                                                    both for receiving and
                                                    sending funds.
                                                </li>
                                                <li>
                                                    Transaction hash
                                                    verification assesses the
                                                    risks for the recipient when
                                                    choosing to accept funds and
                                                    the risks for the sender
                                                    when selecting the sender.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="ui-accordion-item faq-accordion__item"
                                data-slug="which-cryptocurrencies-does-alfabit-aml-analyze?"
                                data-v-3cb9a4cd=""
                                data-v-7928ea3e=""
                                itemProp="mainEntity"
                                itemScope
                                itemType="https://schema.org/Question"
                            >
                                <div
                                    className="ui-accordion-item__wrapper"
                                    data-v-3cb9a4cd=""
                                >
                                    <div
                                        className="ui-accordion-item__title"
                                        data-v-3cb9a4cd=""
                                    >
                                        <span
                                            data-v-7928ea3e=""
                                            itemProp="name"
                                        >
                                            Which cryptocurrencies does TestAML
                                            analyze?
                                        </span>
                                        <div
                                            className="d-flex align-items-center"
                                            data-v-3cb9a4cd=""
                                        >
                                            <div data-v-3cb9a4cd="" />
                                            <div
                                                className="ui-accordion-item__chevron"
                                                data-v-3cb9a4cd=""
                                            >
                                                <i
                                                    className="icon-caret-down"
                                                    data-v-3cb9a4cd=""
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="ui-accordion-item__content"
                                    data-v-3cb9a4cd=""
                                    style={{
                                        display: "none",
                                    }}
                                >
                                    <div
                                        className="faq-accordion__item-content"
                                        data-v-7928ea3e=""
                                        itemProp="acceptedAnswer"
                                        itemScope
                                        itemType="https://schema.org/Answer"
                                    >
                                        <div data-v-7928ea3e="" itemProp="text">
                                            <p>
                                                We analyze all cryptocurrencies
                                                on the networks BCH, BSV, LTC,
                                                ZEC, DOGE, BTC, ERC20, TRC20,
                                                ADA, SOL, MATIC, XRP, ETC, OMNI,
                                                BSC.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="ui-accordion-item faq-accordion__item"
                                data-slug="why-we-are-trusted"
                                data-v-3cb9a4cd=""
                                data-v-7928ea3e=""
                                itemProp="mainEntity"
                                itemScope
                                itemType="https://schema.org/Question"
                            >
                                <div
                                    className="ui-accordion-item__wrapper"
                                    data-v-3cb9a4cd=""
                                >
                                    <div
                                        className="ui-accordion-item__title"
                                        data-v-3cb9a4cd=""
                                    >
                                        <span
                                            data-v-7928ea3e=""
                                            itemProp="name"
                                        >
                                            Why we are trusted
                                        </span>
                                        <div
                                            className="d-flex align-items-center"
                                            data-v-3cb9a4cd=""
                                        >
                                            <div data-v-3cb9a4cd="" />
                                            <div
                                                className="ui-accordion-item__chevron"
                                                data-v-3cb9a4cd=""
                                            >
                                                <i
                                                    className="icon-caret-down"
                                                    data-v-3cb9a4cd=""
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="ui-accordion-item__content"
                                    data-v-3cb9a4cd=""
                                    style={{
                                        display: "none",
                                    }}
                                >
                                    <div
                                        className="faq-accordion__item-content"
                                        data-v-7928ea3e=""
                                        itemProp="acceptedAnswer"
                                        itemScope
                                        itemType="https://schema.org/Answer"
                                    >
                                        <div data-v-7928ea3e="" itemProp="text">
                                            <p>
                                                Verification is conducted using
                                                trusted services such as
                                                Crystal, Chainalysis, and
                                                AMLBot, which are used by many
                                                major exchanges.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="ui-accordion-item faq-accordion__item"
                                data-slug="what-do-the-categories-in-the-verification-results-mean?"
                                data-v-3cb9a4cd=""
                                data-v-7928ea3e=""
                                itemProp="mainEntity"
                                itemScope
                                itemType="https://schema.org/Question"
                            >
                                <div
                                    className="ui-accordion-item__wrapper"
                                    data-v-3cb9a4cd=""
                                >
                                    <div
                                        className="ui-accordion-item__title"
                                        data-v-3cb9a4cd=""
                                    >
                                        <span
                                            data-v-7928ea3e=""
                                            itemProp="name"
                                        >
                                            What do the categories in the
                                            verification results mean?
                                        </span>
                                        <div
                                            className="d-flex align-items-center"
                                            data-v-3cb9a4cd=""
                                        >
                                            <div data-v-3cb9a4cd="" />
                                            <div
                                                className="ui-accordion-item__chevron"
                                                data-v-3cb9a4cd=""
                                            >
                                                <i
                                                    className="icon-caret-down"
                                                    data-v-3cb9a4cd=""
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="ui-accordion-item__content"
                                    data-v-3cb9a4cd=""
                                    style={{
                                        display: "none",
                                    }}
                                >
                                    <div
                                        className="faq-accordion__item-content"
                                        data-v-7928ea3e=""
                                        itemProp="acceptedAnswer"
                                        itemScope
                                        itemType="https://schema.org/Answer"
                                    >
                                        <div data-v-7928ea3e="" itemProp="text">
                                            <p>
                                                The verification results display
                                                the connections of the checked
                                                address with these categories in
                                                a percentage breakdown. Based on
                                                all these connections, an
                                                average risk assessment is
                                                provided, which helps the user
                                                make informed decisions
                                                regarding assets.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="ui-accordion-item faq-accordion__item"
                                data-slug="what-is-alfabit-aml?"
                                data-v-3cb9a4cd=""
                                data-v-7928ea3e=""
                                itemProp="mainEntity"
                                itemScope
                                itemType="https://schema.org/Question"
                            >
                                <div
                                    className="ui-accordion-item__wrapper"
                                    data-v-3cb9a4cd=""
                                >
                                    <div
                                        className="ui-accordion-item__title"
                                        data-v-3cb9a4cd=""
                                    >
                                        <span
                                            data-v-7928ea3e=""
                                            itemProp="name"
                                        >
                                            What is TestAML?
                                        </span>
                                        <div
                                            className="d-flex align-items-center"
                                            data-v-3cb9a4cd=""
                                        >
                                            <div data-v-3cb9a4cd="" />
                                            <div
                                                className="ui-accordion-item__chevron"
                                                data-v-3cb9a4cd=""
                                            >
                                                <i
                                                    className="icon-caret-down"
                                                    data-v-3cb9a4cd=""
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="ui-accordion-item__content"
                                    data-v-3cb9a4cd=""
                                    style={{
                                        display: "none",
                                    }}
                                >
                                    <div
                                        className="faq-accordion__item-content"
                                        data-v-7928ea3e=""
                                        itemProp="acceptedAnswer"
                                        itemScope
                                        itemType="https://schema.org/Answer"
                                    >
                                        <div data-v-7928ea3e="" itemProp="text">
                                            <p>
                                                <strong>TestAML</strong> is a
                                                service that provides analysis
                                                and monitoring of cryptocurrency
                                                transactions in the blockchain
                                                with the aim of preventing
                                                illegal money laundering
                                                activities. By using our
                                                service, you protect yourself
                                                from fraudsters and stolen
                                                coins.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="faq-block__bottom" data-v-adb97892="">
                            <p
                                className="faq-block__description"
                                data-v-adb97892=""
                            >
                                Не нашли ответ на свой вопрос?
                                <br />
                                Ответит сотрудник поддержки
                            </p>
                            <button
                                className="ui-button-old ui-button-old--primary ui-button-old--large is-gradient faq-block__action"
                                data-v-adb97892=""
                                type="button"
                            >
                                <span className="ui-button-old__content">
                                    Задать вопрос
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </section> */}
            <section className="protect-yourself" data-v-ac63bacb="">
                <div className="container" data-v-ac63bacb="">
                    <h2
                        className="protect-yourself__title font-semibold text-white"
                        data-v-ac63bacb=""
                    >
                        Защитите себя от нежелательных активов
                    </h2>
                    <p
                        className="protect-yourself__description"
                        data-v-ac63bacb=""
                    >
                        Зарегистрируйтесь сейчас и получите возможность
                        <br /> проверить свои активы
                    </p>
                    <ConnectButton />
                </div>
            </section>
        </main>
    );
}
