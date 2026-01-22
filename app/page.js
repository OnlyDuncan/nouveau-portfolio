import Image from 'next/image';
import { AboutModal, DesignModal, ProjectsModal, SkillsModal, ContactModal } from '../components';
import "keen-slider/keen-slider.min.css";

export default async function Home() {
  return (
    <div className="body relative h-screen">

      {/* Background Image */}

      <div className="absolute inset-0">
        <Image
          src="/Night Sky-tommy-haugsveen+freepik.webp"
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
              src="/Other-Images/Logo.svg"
              alt="Logo"
              width={115}
              height={115}
            />
          </div>
          <div>
            <br />
            <h1
              className="text-4xl md:text-5xl text-center text-white sourceCode"
              style={{
                letterSpacing: "0.07em"
              }}>
              Duncan Payne
            </h1>
            <h2
              className="text-3xl md:text-4xl flex text-center text-white acuminLight mb-4"
            >
              Designer and Software Developer
            </h2>
            <br />
            <div className="flex relative h-full justify-center">
              <nav>
                <ul className="text-center flex flex-col md:flex-row">
                  <li className="mb-5 md:mb-0 md:mr-2">
                    <AboutModal />
                  </li>
                  {/* <li className="mb-5 md:mb-0 md:ml-2 md:mr-2">
                    <DesignModal />
                  </li> */}
                  <li className="mb-5 md:mb-0 md:ml-2 md:mr-2">
                    <ProjectsModal />
                  </li>
                  <li className="mb-5 md:mb-0 md:ml-2 md:mr-2">
                    <SkillsModal />
                  </li>
                  <li className="md:ml-2">
                    <ContactModal />
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
