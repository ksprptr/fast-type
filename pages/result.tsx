import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useSearchParams } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Result() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const wrongWords = searchParams.get("w")?.split(",");
  const correctWords = searchParams.get("c")?.split(",");
  const [copied, setCopied] = useState<boolean>(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  useEffect(() => {
    if (!wrongWords || !correctWords) {
      router.push("/404");
    }
  }, [correctWords, router, wrongWords]);

  return (
    <>
      {wrongWords && correctWords && (
        <main className="max-w-screen-sm px-6 md:py-0 py-32 mx-auto">
          <div className="flex flex-col justify-center items-start my-32">
            <Link href="/" className="text-zinc-400">
              <FontAwesomeIcon icon={faArrowLeft} />
            </Link>
            <h1 className="text-lime-500 text-4xl font-medium">Statistics</h1>
            <div className="line" />
            <div className="flex md:flex-row flex-col items-center justify-around w-full mt-2">
              <div>
                <h3 className="text-zinc-50 text-2xl text-center">Accuracy</h3>
                <div className="w-32 h-32 border-2 border-lime-500 rounded-full mt-4 flex justify-center items-center text-3xl text-lime-500">{((100 * correctWords?.length) / (correctWords.length + wrongWords.length)).toFixed()}%</div>
              </div>
              <div className="">
                <h3 className="text-zinc-50 text-2xl text-center">WPM</h3>
                <div className="w-32 h-32 border-2 border-lime-500 rounded-full mt-4 flex justify-center items-center text-3xl text-lime-500">{correctWords.length}</div>
              </div>
            </div>
            <div className="mt-12">
              <h2 className="text-lime-500 text-3xl font-medium">Wrongs</h2>
              <div className="text-xl">
                {wrongWords?.map((word, index) => (
                  <div key={index} className="flex items-center gap-8">
                    <div className="bg-gray-700 rounded-lg px-4 py-2 text-zinc-50 w-32 text-center mt-8">{word.split("-")[0]}</div>
                    <div className="bg-gray-700 rounded-lg px-4 py-2 text-red-400 w-32 text-center mt-8">{word.split("-")[1]}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-12">
              <h2 className="text-lime-500 text-3xl font-medium">Share</h2>
              <p className="text-xl text-zinc-400 my-2">You can share your statistics with others.</p>
              <button onClick={copyToClipboard} className="btn">
                {copied ? "Copied" : "Copy link"}
              </button>
            </div>
          </div>
        </main>
      )}
    </>
  );
}
