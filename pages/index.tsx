import Head from "next/head";
import fullWords from "../components/Arrays";
import { Roboto_Mono } from "next/font/google";
import { useCallback, useEffect, useState } from "react";
import { write } from "fs";

const roboto = Roboto_Mono({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  const [textToWrite, setTextToWrite] = useState<string[]>([]);
  const [writedText, setWritedText] = useState<string[]>([]);
  const [currentText, setCurrentText] = useState<string>("");
  const [index, setIndex] = useState<number>(0);
  const [timer, setTimer] = useState<number>(60);

  const typeInput = useCallback((input: HTMLInputElement) => {
    if (input) {
      input.focus();
    }
  }, []);

  const interval = () => {
    const interval = setInterval(() => {
      if (timer === 0) {
        clearInterval(interval);
        return;
      }
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  };

  useEffect(() => {
    const randomizeArray = [...fullWords]
      .sort(() => 0.5 - Math.random())
      .slice(0, 50);
    setTextToWrite(randomizeArray);
  }, []);

  const handleEvent = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const key = e.key;
    const input = document.querySelector<HTMLInputElement>("[name=typeInput]");

    switch (key) {
      case " ":
        if (currentText === textToWrite[index]) {
          setWritedText((prev) => [...prev, currentText]);
          setCurrentText("");
          setIndex((prev) => prev + 1);
          console.log(writedText);
          console.log(index);
        } else {
          return;
        }
        break;
      case textToWrite[index][currentText.length]:
        setCurrentText((prev) => prev + key);
        console.log(currentText);
        break;
      default:
        return;
    }
  };

  return (
    <>
      <Head>
        <title>FastType</title>
      </Head>
      <main>
        <div className="pt-24 page-width text-gray-50">
          <h1
            className="text-4xl"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-once="true"
            data-aos-delay="0"
          >
            Welcome to{" "}
            <span className="font-semibold text-lime-500">FastType</span>
          </h1>
          <p
            className={`${roboto.className} text-gray-100 text-lg mt-1`}
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-once="true"
            data-aos-delay="100"
          >
            Smart typing application.
          </p>
          <div
            className="bg-gray-600 rounded-lg my-16"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-once="true"
            data-aos-delay="200"
          >
            <div className="flex justify-between p-3 px-4 bg-gray-700 rounded-t-lg items-center">
              <div className="flex gap-x-6 items-center">
                <h3>
                  Words/min: <span className="text-lime-500">0</span>
                </h3>
                <h3>
                  Chars/min: <span className="text-lime-500">0</span>
                </h3>
                <h3>
                  Accuracy: <span className="text-lime-500">0%</span>
                </h3>
              </div>
              <div>
                <h3>
                  Remaining Time:{" "}
                  <span className="text-lime-500">
                    {timer}{" "}
                    {timer < 2 && timer > -2 ? (
                      <span>second</span>
                    ) : (
                      <span>seconds</span>
                    )}
                  </span>{" "}
                </h3>
              </div>
            </div>
            <div
              className={`${roboto.className} text-gray-50 p-3 px-4 text-lg`}
            >
              {textToWrite.map((word, i) => {
                return (
                  <span
                    key={i}
                    className={`${
                      writedText[i] === word ? "text-lime-500" : ""
                    }`}
                  >
                    {word}{" "}
                  </span>
                );
              })}
              <input
                type="text"
                className="bg-transparent focus:outline-none"
                name="typeInput"
                placeholder="Start typing..."
                autoFocus
                ref={typeInput}
                onKeyUp={handleEvent}
                value={currentText}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
