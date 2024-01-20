import "@/styles/globals.css";
import SEO from "../next-seo.config";
import Footer from "@/layout/Footer";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import { Analytics } from "@vercel/analytics/react";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";

const inter = Inter({ style: "normal", subsets: ["latin-ext"], weight: ["300", "400", "500", "700"] });

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const disabledPaths = ["/result", "/404", "/500"];

  return (
    <>
      <Analytics />
      <div className={inter.className}>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
        {!disabledPaths.includes(router.pathname) && <Footer />}
      </div>
    </>
  );
}
