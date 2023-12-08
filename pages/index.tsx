import "react-circular-progressbar/dist/styles.css";
import fullWords from "../components/Arrays";
import TypeWriter from "typewriter-effect";
import { motion } from "framer-motion";
import { useTimer } from "react-timer-hook";
import { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

type ActiveWords = {
  prev: string;
  current: string;
  next: string;
};

type Stats = {
  correctCount: number;
  wrongCount: number;
};

export default function Home() {
  const time = new Date();
  const attempts = localStorage.getItem("attempts");
  time.setSeconds(time.getSeconds() + 60);
  const { start, seconds, restart, isRunning } = useTimer({ expiryTimestamp: time, onExpire: () => setExpired(true), autoStart: false });
  const [ready, setReady] = useState<boolean>(false);
  const [wrong, setWrong] = useState<boolean>(false);
  const [expired, setExpired] = useState<boolean>(false);
  const [inputWord, setInputWord] = useState<string>("");
  const [stats, setStats] = useState<Stats>({ correctCount: 0, wrongCount: 0 });
  const [activeWords, setActiveWords] = useState<ActiveWords>({
    prev: "",
    current: fullWords[Math.floor(Math.random() * fullWords.length)].toLowerCase(),
    next: fullWords[Math.floor(Math.random() * fullWords.length)].toLowerCase(),
  });

  useEffect(() => {
    if (expired) {
      restart(time, false);
    }
  }, [expired, restart, time]);

  useEffect(() => {
    if (expired) {
      setActiveWords({
        prev: "",
        current: fullWords[Math.floor(Math.random() * fullWords.length)].toLowerCase(),
        next: fullWords[Math.floor(Math.random() * fullWords.length)].toLowerCase(),
      });
      setInputWord("");
    }
  }, [expired]);

  return (
    <main>
      {expired && (
        <div className="h-screen w-screen z-10 bg-black bg-opacity-50 py-48 rounded-lg flex fixed top-0 left-0 bottom-0">
          <div className="bg-gray-800 p-8 rounded-lg mx-auto w-1/5 h-max pb-12 my-auto">
            <h1 className="text-4xl text-center font-medium text-lime-500 mt-7">Your Score</h1>
            <div className="flex md:flex-row flex-col items-center justify-around w-full mt-8">
              <div>
                <h3 className="text-zinc-400 text-2xl text-center">Accuracy</h3>
                <div className="w-32 h-32 mt-4">
                  <CircularProgressbar
                    strokeWidth={2}
                    text={((100 * stats.correctCount) / (stats.correctCount + stats.wrongCount)).toFixed() === "NaN" ? "0%" : `${((100 * stats.correctCount) / (stats.correctCount + stats.wrongCount)).toFixed()}%`}
                    styles={buildStyles({
                      pathColor: "#84cc16",
                      textColor: "#84cc16",
                      trailColor: "#374151",
                    })}
                    value={(100 * stats.correctCount) / (stats.correctCount + stats.wrongCount)}
                  />
                </div>
              </div>
              <div>
                <h3 className="text-zinc-400 text-2xl text-center">Speed</h3>
                <div className="w-32 h-32 border-2 border-lime-500 rounded-full mt-4 flex justify-center items-center text-2xl text-lime-500">{stats.correctCount} WPM</div>
              </div>
            </div>
            <div className="text-center mt-12">
              <h2 className="text-2xl text-lime-500 font-medium">Your Last Attempts</h2>
              {!attempts && <p className="text-zinc-400 text-lg mt-4">You have no previous attempts.</p>}
            </div>
            <div className="text-center mt-12">
              <button
                onClick={() => {
                  setInputWord("");
                  setStats({ correctCount: 0, wrongCount: 0 });
                  setExpired(false);
                  document.getElementById("type")?.scrollIntoView();
                }}
                className="btn"
              >
                Try again
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="max-w-screen-2xl px-6 mx-auto">
        <section className="flex flex-col justify-center items-center h-screen text-center">
          <motion.h1 initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="md:text-6xl text-4xl text-zinc-50 font-normal">
            Welcome to
          </motion.h1>
          <motion.h1 initial={{ opacity: 0, x: -500 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: 0.5 }} className="font-medium italic text-lime-500 md:text-10xl sm:text-8xl text-6xl leading-none mt-4">
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
          <motion.button initial={{ opacity: 0, y: 100 }} animate={{ opacity: ready ? 1 : 0, y: ready ? 0 : 100 }} transition={{ duration: 0.5 }} onClick={() => document.getElementById("type")?.scrollIntoView()} className="btn mt-8 text-lg">
            {"Let's start"}
          </motion.button>
          <button className="btn" onClick={() => setExpired(true)}>
            Test
          </button>
        </section>
        {ready && (
          <section id="type" className="flex flex-col justify-center items-center h-screen">
            <ul className="flex md:flex-row flex-col gap-8 items-center font-medium text-3xl text-zinc-50 select-none">
              <div className="text-center text-lime-500 md:text-xl text-base">
                <li>Prev</li>
                <li className={`md:text-2xl text-lg mt-2 w-48 ${wrong ? "text-red-500" : "text-lime-500"}`}>{activeWords.prev}</li>
              </div>
              <div className="text-center text-lime-500 md:text-xl text-base">
                <li>Current</li>
                <li className="bg-gray-600 px-4 py-4 rounded-full text-zinc-50 md:text-3xl text-xl mt-2 md:w-64 w-48">{activeWords.current}</li>
              </div>
              <div className="text-center text-lime-500 md:text-xl text-base">
                <li>Next</li>
                <li className="md:text-2xl text-lg text-zinc-400 mt-2 w-48">{activeWords.next}</li>
              </div>
            </ul>
            <div className="mt-10">
              <p className={`text-zinc-400 text-sm my-2 text-center ${isRunning && "invisible"}`}>
                Press <span className="underline italic">space</span> or <span className="underline italic">enter</span> to confirm word.
              </p>
              <input
                type="text"
                className="bg-transparent rounded-full border-2 border-lime-500 px-6 py-3 md:text-xl text-base md:w-auto sm:w-64 w-48 focus:outline-none text-zinc-50 placeholder:text-zinc-400"
                placeholder={isRunning ? activeWords.current : "Start typing..."}
                value={inputWord}
                disabled={expired}
                onChange={(e) => {
                  if (activeWords.prev === "") {
                    start();
                  }
                  setInputWord(e.target.value);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();

                    if (activeWords.prev === "") start();

                    if ((inputWord && inputWord.toLowerCase() !== activeWords.current.toLowerCase()) || inputWord === "") {
                      setWrong(true);
                      setStats({
                        ...stats,
                        wrongCount: stats.wrongCount + 1,
                      });
                    } else {
                      setWrong(false);
                      setStats({
                        ...stats,
                        correctCount: stats.correctCount + 1,
                      });
                    }

                    setActiveWords({
                      prev: activeWords.current,
                      current: activeWords.next,
                      next: fullWords[Math.floor(Math.random() * fullWords.length)].toLowerCase(),
                    });
                    setInputWord("");
                  }
                }}
              />
              <p className="text-lime-500 text-center md:text-base text-sm mt-4">{seconds === 0 ? "60" : seconds} seconds left...</p>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
