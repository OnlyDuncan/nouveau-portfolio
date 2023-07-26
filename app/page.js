import Image from 'next/image';
import { Text } from 'react';

export default async function Home() {
  return (
    <div className="relative h-screen">

      {/* Background Image */}

      <div className="absolute inset-0">
        <Image
          src="/Night Sky-tommy-haugsveen+freepik.png"
          alt="Night Sky Background Image"
          fill
          style={{
            objectFit: "cover"
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
              className="text-center text-white sourceCode" 
              style={{
                fontSize: "50px",
                letterSpacing: "0.07em"
              }}>
                Duncan Payne
              </h1>
            </div>
            <div>
              <h2
              className="flex text-center text-white acuminLight mb-4"
              style={{
                fontSize: "35px"
              }}>
                Designer and Full-Stack Developer
              </h2>
            </div>
            <br />
            <div id="navcontainer">
              <nav>
                <ul className="flex md:flex-row flex-col align-items-center">
                  <li className="ml-2 mr-2">
                    <a href="#about" className="acuminMid text-white">About</a>
                  </li>
                  <li className="ml-2 mr-2">
                    <a href="#design" className="acuminMid text-white">Design</a>
                  </li>
                  <li className="ml-2 mr-2">
                    <a href="#projects" className="acuminMid text-white">Projects</a>
                  </li>
                  <li className="ml-2 mr-2">
                    <a href="#skills" className="acuminMid text-white">Skills</a>
                  </li>
                  <li className="ml-2 mr-2">
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
