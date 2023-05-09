import Image from "next/image"

const SecondChapter = () => {
  return (
    <div className="w-screen h-screen flex-col justify-center p-8">
      <h1 className="text-[80px] underline decoration-red-900 underline-offset-8 text-red-700 text-center font-sans font-bold">
        O lado que não vemos
      </h1>
      <Image src="/enfermeiro.png" alt="hospital universitário" width={1080} height={640} className="mx-auto"/>
      <p className="text-3xl w-full text-center mt-2">
        <span className=" bg-red-700 text-black">
          Enfermeiro Donato Costa. Foto: Isadora Carneiro  
        </span>
      </p>
    </div>
  )
}

export default SecondChapter