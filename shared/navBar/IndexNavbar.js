import React from "react";
import Link from "next/link";
// shared

import IndexDropdown from "../Dropdowns/IndexDropdown";

export default function Navbar(props) {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <>
            <nav
                className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <Link href="/">
                            <a
                                className="text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                                href="#hero"
                                onClick={(e) => {
                                    e.preventDefault();
                                    let element = document.getElementById("hero");
                                    element.scrollIntoView({behavior: "smooth", block: "nearest", inline: "nearest"});
                                }}
                            >
                                Digital Three
                            </a>
                        </Link>
                        <button
                            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <i className="fas fa-bars"></i>
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
                            (navbarOpen ? " block" : " hidden")
                        }
                        id="example-navbar-warning"
                    >
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            <li className="flex items-center">
                                <a
                                    className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-sm uppercase font-bold"
                                    href="#servizi"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        let element = document.getElementById("servizi");
                                        element.scrollIntoView({
                                            behavior: "smooth",
                                            block: "nearest",
                                            inline: "nearest"
                                        });
                                    }}
                                >
                                    Servizi
                                </a>
                            </li>
                            <li className="flex items-center">
                                <a
                                    className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-sm uppercase font-bold"
                                    href="#team"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        let element = document.getElementById("team");
                                        element.scrollIntoView({
                                            behavior: "smooth",
                                            block: "nearest",
                                            inline: "nearest"
                                        });
                                    }}
                                >
                                    Team
                                </a>
                            </li>
                            <li className="flex items-center">
                                <a
                                    className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-sm uppercase font-bold"
                                    href="#portfolio"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        let element = document.getElementById("portfolio");
                                        element.scrollIntoView({
                                            behavior: "smooth",
                                            block: "nearest",
                                            inline: "nearest"
                                        });
                                    }}
                                >
                                    Portfolio
                                </a>
                            </li>
                            <li className="flex items-center">
                                <a
                                    className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-sm uppercase font-bold"
                                    href="#team"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        let element = document.getElementById("preventivo");
                                        element.scrollIntoView({
                                            behavior: "smooth",
                                            block: "nearest",
                                            inline: "nearest"
                                        });
                                    }}
                                >
                                    Preventivo
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
