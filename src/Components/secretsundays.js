import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-800">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white">The SecretSundays Series</h1>
      </header>
      
      <main className="flex flex-col items-center">
        <div className="flex justify-center mb-8">
          <Image
            src="/avi.jpg" // Ensure this image is placed in the `public` folder
            width={150}
            height={150}
            alt="Author Picture"
            className="rounded-full"
          />
        </div>
        
        <div className="text-center text-white mb-4">
          <p className="text-xl">@avinasroy</p>
          <p className="text-2xl mt-2">Just another tech enthusiast</p>
        </div>
        
        <div className="flex gap-4 mt-8">
          <Link href="https://www.instagram.com/avinasroy/">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Instagram
              </span>
            </a>
          </Link>

          <Link href="https://www.threads.net/@avinasroy">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                threads.net
              </span>
            </a>
          </Link>
        </div>
      </main>
      
      <footer className="mt-12 text-center text-white">
        <p>&copy; 2024 The SecretSundays Series. All rights reserved.</p>
      </footer>
    </div>
  );
}
