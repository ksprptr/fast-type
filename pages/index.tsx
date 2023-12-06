import fullWords from "../components/Arrays";
import Image from "next/image";
import TypeWriter from "typewriter-effect";
import { motion } from "framer-motion";
import { useState } from "react";
import { Roboto_Mono } from "next/font/google";

const roboto = Roboto_Mono({
  weight: "600",
  subsets: ["latin"],
});

export default function Home() {
  const [textToWrite, setTextToWrite] = useState<string[]>([]);
  const [writedText, setWritedText] = useState<string[]>([]);
  const [typed, setTyped] = useState<boolean>(false);

  return (
    <main className="max-w-screen-2xl px-8 mx-auto">
      <section className="flex flex-col justify-center items-start h-screen">
        <div className="flex jsutify-between items-center">
          <div>
            <motion.h1 initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="text-8xl text-zinc-50 font-normal">
              Welcome to
            </motion.h1>
            <motion.h1 initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.25 }} className="font-medium text-lime-500 text-10xl leading-none mt-4">
              FastType
            </motion.h1>
            <motion.div initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.5 }} className="text-2xl text-gray-50 mt-6">
              <TypeWriter
                onInit={(tw) => {
                  tw.pauseFor(600)
                    .typeString("Get better experience of typing.")
                    .callFunction(() => setTyped(true))
                    .start();
                }}
                options={{
                  delay: 50,
                  deleteSpeed: 10,
                  cursor: "",
                }}
              />
            </motion.div>
            <motion.button initial={{ opacity: 0, y: 100 }} animate={{ opacity: typed ? 1 : 0, y: typed ? 0 : 100 }} transition={{ duration: 0.5 }} className="border-2 border-lime-500 px-4 py-2 rounded-md text-lime-500 text-xl mt-6 hover:bg-lime-500 hover:border-lime-500 hover:text-zinc-50  shadows duration-150">
              Start typing...
            </motion.button>
          </div>
          <div>
            <Image src={"/image.png"} alt={""} width={1000} height={1000} />
          </div>
        </div>
      </section>
      <div className="bg-gray-600 rounded-lg my-16" data-aos="fade-right" data-aos-duration="1000" data-aos-once="true" data-aos-delay="200">
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
              Remaining Time: <span className="text-lime-500">60 seconds</span>{" "}
            </h3>
          </div>
        </div>
        <div className={`${roboto.className} text-gray-50 p-3 px-4 text-lg`}>
          {textToWrite.map((word, i) => {
            return (
              <span key={i} className={`${writedText[i] === word ? "text-lime-500" : ""}`}>
                {word}{" "}
              </span>
            );
          })}
          <input type="text" className="bg-transparent focus:outline-none" name="typeInput" placeholder="Start typing..." autoFocus />
        </div>
      </div>
    </main>
  );
}
