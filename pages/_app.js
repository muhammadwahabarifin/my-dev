import Meta from "@/components/Meta/Meta";
import { calibre, jetbrains_mono } from "@/public/fonts";
import '../styles/globals.scss'
import { GoogleAnalytics } from "@next/third-parties/google";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Meta />
      <main
        className={`${calibre.variable} font-sans ${jetbrains_mono.variable} font-mono`}
      >
        <Component {...pageProps} />;
        <GoogleAnalytics />
      </main>
    </>
  );
}
