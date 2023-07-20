import Image from 'next/image';

export default async function Home() {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <Image
          src="/../public/Night Sky-tommy-haugsveen+freepik.png"
          alt="background image"
          fill
          style={{
            objectFit: "cover"
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <header>
          <div>

          </div>
        </header>
      </div>
    </div>
  )
}
