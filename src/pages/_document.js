import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta
                    name="description"
                    content="Лицензионное казино #1 на платформе Telegram Games"
                />
                <meta
                    name="keywords"
                    content="Партнерская программа, казино, Лицензионное казино, партнёрка"
                />
                <meta name="robots" content="all" />

                <meta property="twitter:image" content="/main.png" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta
                    property="twitter:title"
                    content="Партнерская программа JetTon"
                />
                <meta
                    property="twitter:description"
                    content="Лицензионное казино #1 на платформе Telegram Games"
                />

                <meta property="og:image" content="/main.png" />
                <meta
                    property="og:title"
                    content="Партнерская программа JetTon"
                />
                <meta
                    property="og:description"
                    content="Лицензионное казино #1 на платформе Telegram Games"
                />

                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                    as="font"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
