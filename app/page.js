import Image from 'next/image';
import { Text } from 'react';

export default async function Home() {
  return (
    <div className="body relative h-screen">

      {/* Background Image */}

      <div className="absolute inset-0">
        <Image
          src="/Night Sky-tommy-haugsveen+freepik.png"
          alt="Night Sky Background Image"
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </div>

      {/* Header and Navbar */}

      <div className="h-full">
        <header className="relative flex flex-col items-center justify-center h-full">
          <div>
            <Image
              src="/Logo.svg"
              alt="Logo"
              width={115}
              height={115}
            />
          </div>
          <div>
            <br />
            <div>
              <h1 
              className="text-4xl md:text-5xl text-center text-white sourceCode" 
              style={{
                letterSpacing: "0.07em"
              }}>
                Duncan Payne
              </h1>
            </div>
            <div>
              <h2
              className="text-3xl md:text-4xl flex text-center text-white acuminLight mb-4"
              >
                Designer and Full-Stack Developer
              </h2>
            </div>
            <br />
            <div className="flex relative h-full justify-center">
              <nav>
                <ul className="text-center flex flex-col md:flex-row">
                  <li className="mb-5 md:mb-0 md:mr-2">
                    <a href="#about" className="acuminMid text-white">About</a>
                  </li>
                  <li className="mb-5 md:mb-0 md:ml-2 md:mr-2">
                    <a href="#design" className="acuminMid text-white">Design</a>
                  </li>
                  <li className="mb-5 md:mb-0 md:ml-2 md:mr-2">
                    <a href="#projects" className="acuminMid text-white">Projects</a>
                  </li>
                  <li className="mb-5 md:mb-0 md:ml-2 md:mr-2">
                    <a href="#skills" className="acuminMid text-white">Skills</a>
                  </li>
                  <li className="md:ml-2">
                    <a href="#contact" className="acuminMid text-white">Contact</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
      </div>
    </div>
  )
}
