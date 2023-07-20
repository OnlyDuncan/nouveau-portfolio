import Image from 'next/image';
import { Text } from 'react';

export default async function Home() {
  return (
    <div className="relative h-screen">

      {/* Background Image */}

      <div 
        className="relative overflow-hidden rounded-lg bg-cover bg-no-repeat p-12 text-center"
        style={{ backgroundImage: url('/../public/Night Sky-tommy-haugsveen+freepik.png'), height: '400px' }}
      />

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
                letterSpacing: "0.075em"
              }}>
                Duncan Payne
              </h1>
            </div>
            <div>
              <h2
              className="text-center text-white acuminLight"
              style={{
                fontSize: "35px"
              }}>
                Designer and Full-Stack Developer
              </h2>
            </div>
          </div>
        </header>
      </div>
    </div>
  )
}
