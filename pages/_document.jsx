import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en" className="dark scroll-smooth">
      <Head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#09090b" />
        <style>{`body { background-color: #09090b; }`}</style>
      </Head>
      <body className="bg-zinc-950 text-zinc-100 antialiased selection:bg-zinc-800 selection:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
