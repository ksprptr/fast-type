import { Roboto_Mono } from 'next/font/google'
import Head from 'next/head'

const roboto = Roboto_Mono({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
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
                <h3>Remaining Time: <span className='text-lime-500'>60 seconds</span> </h3>
              </div>
            </div>
            <div className={`${roboto.className} text-gray-50 p-3 px-4`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus reprehenderit aliquid similique, obcaecati iste enim non dolor culpa, dolores ipsam repellendus eos voluptatum necessitatibus tempora? Consequuntur, doloremque iure. Optio, earum! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa fugit quo ea pariatur?
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
