export default function Header() {
    return (
        <header data-v-21af332d="" className="app-header">
            <div data-v-21af332d="" className="container">
                <div data-v-21af332d="" className="app-header__content">
                    <div data-v-21af332d="" className="app-header__logo">
                        <div className="flex flex-cols items-center justify-start">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="33"
                                height="33"
                                viewBox="0 0 33 33"
                                fill="none"
                            >
                                <path
                                    className="logo-icon"
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M14.555 1.54327C13.125 -0.561732 9.98902 -0.502732 8.64002 1.65527L0.531024 14.6303C0.177816 15.195 -0.00638722 15.8491 0.000169114 16.5152C0.00672545 17.1813 0.203768 17.8316 0.568024 18.3893L9.05502 31.4033C10.445 33.5333 13.581 33.5333 14.97 31.4033L23.432 18.4283C23.8085 17.8516 24.006 17.1765 23.9996 16.4878C23.9932 15.7992 23.7832 15.1278 23.396 14.5583L14.555 1.54327ZM15.523 9.23027C15.218 14.6673 10.928 19.0463 5.51102 19.5243L12.013 29.4943L20.475 16.5203L15.523 9.23027Z"
                                    fill="#0057FF"
                                ></path>
                            </svg>
                            <p className="text-2xl font-semibold">TestAML</p>
                        </div>

                        <div
                            data-v-e8c01bf7=""
                            data-v-21af332d=""
                            className="ui-dropdown apps-list desktop-only"
                        >
                            <div className="ui-dropdown__wrapper" tabIndex={0}>
                                <div className="ui-dropdown__control">
                                    <div
                                        data-v-e8c01bf7=""
                                        className="apps-list__wrapper"
                                    >
                                        <div
                                            data-v-ed0177f6=""
                                            data-v-e8c01bf7=""
                                            className="apps-icon"
                                        >
                                            <div
                                                className="apps-icon__wrapper"
                                                data-v-ed0177f6=""
                                            >
                                                <div
                                                    className="apps-icon__element"
                                                    data-v-ed0177f6=""
                                                ></div>
                                                <div
                                                    className="apps-icon__element"
                                                    data-v-ed0177f6=""
                                                ></div>
                                                <div
                                                    className="apps-icon__element"
                                                    data-v-ed0177f6=""
                                                ></div>
                                                <div
                                                    className="apps-icon__element"
                                                    data-v-ed0177f6=""
                                                ></div>
                                            </div>
                                            <p
                                                data-v-ed0177f6=""
                                                className="apps-icon__title"
                                            >
                                                Products
                                            </p>
                                            <i
                                                data-v-ed0177f6=""
                                                className="apps-icon__chevron icon-caret-down"
                                            ></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        data-v-21af332d=""
                        className="app-header__actions to-desktop"
                    >
                        <button
                            data-v-21af332d=""
                            className="ui-button ui-button--outlined_secondary ui-button--small has-icon app-header__chat-btn app-header__chat-btn--mobile"
                            type="button"
                        >
                            <span className="ui-button__content !text-white">
                                {" "}
                                24/7{" "}
                            </span>
                        </button>
                        <button
                            data-v-21af332d=""
                            className="ui-button ui-button--function_secondary is-icon-only has-icon app-header__burger-btn"
                            type="button"
                        >
                            <span className="ui-button__icon">
                                <i className="icon-burger"></i>
                            </span>
                        </button>
                    </div>
                    {/* <div
                        data-v-21af332d=""
                        className="app-header__actions desktop-only"
                    >
                        <div
                            data-v-32a2610c=""
                            data-v-21af332d=""
                            className="ui-dropdown apps-list app-header__chat-btn"
                        >
                            <div className="ui-dropdown__wrapper" tabIndex={0}>
                                <div className="ui-dropdown__control">
                                    <div
                                        data-v-32a2610c=""
                                        className="apps-list__wrapper"
                                    >
                                        <div
                                            data-v-32a2610c=""
                                            className="app-header__chat-btn"
                                        >
                                            <div
                                                data-v-32a2610c=""
                                                className="action"
                                            >
                                                <img
                                                    data-v-32a2610c=""
                                                    src="/assets/static/bx_support.366b70e6.svg"
                                                    alt="support"
                                                />
                                                <span data-v-32a2610c="">
                                                    24/7
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a
                            className="ui-button ui-button--filled_primary has-icon app-header__login-btn"
                            href="/login"
                            rel="external"
                        >
                            <span className="ui-button__icon">
                                <i className="icon-sign-in"></i>
                            </span>
                            <span className="ui-button__content">Login</span>
                        </a>
                    </div> */}
                </div>
            </div>
        </header>
    );
}
