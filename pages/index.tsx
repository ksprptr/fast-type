import fullWords from "../components/Arrays";
import TypeWriter from "typewriter-effect";
import { motion } from "framer-motion";
import { useState } from "react";

type ActiveWords = {
  prev: string;
  current: string;
  next: string;
};

export default function Home() {
  const [ready, setReady] = useState<boolean>(false);
  const [activeWords, setActiveWords] = useState<ActiveWords>({
    prev: "predchozi",
    current: "aktivni",
    next: "nasledujici",
  });

  return (
    <main className="max-w-screen-2xl px-8 mx-auto">
      <section className="flex flex-col justify-center items-center h-screen">
        <motion.h1 initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="md:text-6xl text-4xl text-zinc-50 font-normal">
          Welcome to
        </motion.h1>
        <motion.h1 initial={{ opacity: 0, x: -500 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: 0.5 }} className="font-medium italic text-lime-500 md:text-10xl text-8xl leading-none mt-4">
          FastType
        </motion.h1>
        <motion.div initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.75 }} className="md:text-2xl text-lg text-gray-50 mt-10">
          <TypeWriter
            onInit={(tw) => {
              tw.pauseFor(1000)
                .typeString("Smart typing application.")
                .callFunction(() => setReady(true))
                .pauseFor(1000)
                .deleteAll()
                .pauseFor(1000)
                .typeString("Get better experience of typing.")
                .pauseFor(1000)
                .deleteAll()
                .pauseFor(1000)
                .typeString("Type without looking at keyboard.")
                .pauseFor(1000)
                .deleteAll()
                .pauseFor(1000)
                .typeString("It's simple and easy.")
                .start();
            }}
            options={{
              delay: 50,
              deleteSpeed: 50,
              loop: true,
            }}
          />
        </motion.div>
        <motion.button initial={{ opacity: 0, y: 100 }} animate={{ opacity: ready ? 1 : 0, y: ready ? 0 : 100 }} transition={{ duration: 0.5 }} onClick={() => document.getElementById("type")?.scrollIntoView()} className="border-2 border-lime-500 px-4 py-2 rounded-md text-lime-500 md:text-xl text-base mt-10 hover:bg-lime-500 hover:border-lime-500 hover:text-zinc-50 duration-150">
          {"Let's start"}
        </motion.button>
      </section>
      {ready && (
        <section id="type" className="flex flex-col justify-center items-center h-screen">
          <ul className="flex gap-x-8 items-center font-medium text-3xl text-zinc-50 select-none">
            <div className="text-center text-lime-500 md:text-xl text-base">
              <li>Prev</li>
              <li className="md:text-2xl text-lg text-zinc-400 mt-2">{activeWords.prev}</li>
            </div>
            <div className="text-center text-lime-500 md:text-xl text-base">
              <li>Current</li>
              <li className="bg-gray-600 px-4 py-4 rounded-full text-zinc-50 md:text-3xl text-xl mt-2 md:w-64 w-48">{activeWords.current}</li>
            </div>
            <div className="text-center text-lime-500 md:text-xl text-base">
              <li>Next</li>
              <li className="md:text-2xl text-lg text-zinc-400 mt-2">{activeWords.next}</li>
            </div>
          </ul>
          <div className="mt-10">
            <input type="text" className="bg-transparent rounded-full border-2 border-lime-500 px-6 py-3 md:text-2xl text-lg focus:outline-none text-zinc-50 placeholder:text-zinc-400" placeholder="Start typing..." />
            <p className="text-lime-500 text-center md:text-base text-sm mt-4">60 seconds left...</p>
          </div>
        </section>
      )}
    </main>
  );
}
