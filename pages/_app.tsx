import "@/styles/globals.css";
import Footer from "@/layout/Footer";
import { Inter } from "next/font/google";
import type { AppProps } from "next/app";

const inter = Inter({ style: "normal", subsets: ["latin-ext"], weight: ["300", "400", "500", "700"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
