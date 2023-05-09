import Image from "next/image"

const FirstChapter = () => {
  return (
    <div className="w-screen h-screen flex-col justify-center p-8" id="first">
      <h1 className="text-[80px] underline decoration-red-900 underline-offset-8 text-red-700 text-center font-sans font-bold">
        A luta desigual
      </h1>
      <Image src="/hospitaluniversitario.png" alt="hospital universitário" width={1080} height={640} className="mx-auto"/>
      <p className="text-3xl w-full text-center mt-2">
        <span className=" bg-red-700 text-black">
          Imagens do Hospital Universitário. Arquivo pessoal  
        </span>
      </p>
    </div>
  )
}

export default FirstChapter