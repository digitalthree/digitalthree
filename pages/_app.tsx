import '../styles/globals.css'
import type {AppProps} from 'next/app'
import Head from "next/head";
import {useEffect} from "react";
import AOS from "aos";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "../styles/tailwind.css"
import "../styles/borderHoverEffect.scss"
import 'aos/dist/aos.css';

function MyApp({Component, pageProps}: AppProps) {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Digital Three Site"/>
                <title>Digital Three</title>
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
