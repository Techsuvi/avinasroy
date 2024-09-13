import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className="flex justify-center pt-16">
        <Image
          src="/avi.jpg"
          width={150} // Make sure width and height are equal
          height={150}
          alt="Picture of the author"
          className="rounded-full"
        />
      </div>
      <div className="flex justify-center pt-8 font-mono text-white text-xl">
        @avinasroy
      </div>
      <div className="flex justify-center pt-8 font-mono text-white text-2xl">
        Just another tech enthusiast
      </div>
      <div className="flex justify-center pt-10 gap-3">
        <a
          href="https://www.instagram.com/avinasroy/"
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Instagram
          </span>
        </a>
        <a
          href="https://www.threads.net/@avinasroy"
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            threads.net
          </span>
        </a>
      </div>
      <div className='flex justify-center pt-1'>
      <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">The SecretSundays Series</button>

      </div>
    </>
  );
}
