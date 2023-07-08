import Head from 'next/head'
import fullWords from '../components/Arrays';
import { Roboto_Mono } from 'next/font/google'
import { useEffect, useState } from 'react';

const roboto = Roboto_Mono({
  weight: "400",
  subsets: ["latin"],
});


export default function Home() {
  const [textToWriteArray, setTextToWriteArray] = useState<string[]>([""])
  const [indexOf, setIndexOf] = useState(0)
  const [textToWrite, setTextToWrite] = useState<string>("")
  const [timer, setTimer] = useState(60)

  useEffect(() => {
    const randomizeArray = [...fullWords].sort(() => 0.5 - Math.random()).slice(0, 50);
    setTextToWrite(randomizeArray.join(" "));
    setTextToWriteArray(randomizeArray);
  }, [])

  const handleEvent = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const key = e.key
    const charArray = textToWrite.split("");

    if (key === charArray[indexOf]) {
      console.log("Correct");
      setIndexOf(indexOf + 1)
    } else {
      console.log("Wrong");
    }
    
  }

  return (
    <>
      <Head>
        <title>FastType</title>
      </Head>
      <main>
        <div className='pt-24 page-width text-gray-50'>
          <h1 className='text-4xl' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true" data-aos-delay="0">Welcome to <span className='font-semibold text-lime-500'>FastType</span></h1>
          <p className={`${roboto.className} text-gray-100 text-lg mt-1`} data-aos="fade-right" data-aos-duration="1000" data-aos-once="true" data-aos-delay="100">Smart typing application.</p>
          <div className='bg-gray-600 rounded-lg my-16' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true" data-aos-delay="200">
            <div className='flex justify-between p-3 px-4 bg-gray-700 rounded-t-lg items-center'>
              <div className='flex gap-x-6 items-center'>
                <h3>Words/min: <span className='text-lime-500'>0</span></h3>
                <h3>Chars/min: <span className='text-lime-500'>0</span></h3>
                <h3>Accuracy: <span className='text-lime-500'>0%</span></h3>
              </div>
              <div>
                <h3>Remaining Time: <span className='text-lime-500'>{timer} {timer < 2 && timer > -2 ? <span>second</span> : <span>seconds</span>}</span> </h3>
              </div>
            </div>
            <div className={`${roboto.className} text-gray-50 p-3 px-4 text-lg`}> <input type="text" className='bg-transparent focus:outline-none' onKeyUp={handleEvent} /> {textToWriteArray.map((word) => {

              const wordIndex = textToWrite.indexOf(word);
              return <span key={word} className={`text-gray-50 ${wordIndex === 0 && "border-l-2 border-lime-500"}`}>{word} </span>
            })}</div>
          </div>
        </div>
      </main>
    </>
  )
}
