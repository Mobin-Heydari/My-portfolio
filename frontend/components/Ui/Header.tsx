"use client";


export default function Header() {

    return (
        <div className="header">
            <nav>
                <div className="logo">
                    <h1 className="text-2xl font-bold text-primary transition-all">
                        Mobin Heydari
                    </h1>
                </div>
                <div className="linkes">
                    <ul>
                        <li>
                            <a href="#services">
                                Services
                            </a>
                        </li>
                        <li>
                            <a href="#projects">
                                Projects
                            </a>
                        </li>
                        <li>
                            <a href="#articles">
                                Articles
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="contact">
                    <button
                        className="btn btn-primary font-semibold px-4 py-2 rounded-xl"
                    >
                        Contact me
                    </button>
                </div>
            </nav>
        </div>
    );
}
