import Image from "next/image"

const FifthChapter = () => {
  return (
    <div className="w-screen h-[880px] flex-col justify-center p-8">
      <h1 className="text-[80px] underline decoration-red-900 underline-offset-8 text-red-700 text-center font-sans font-bold">
        Devagar se aprende a viver novamente
      </h1>
      <Image src="/superacao.png" alt="Pacientes que se recuperaram da COVID" width={1080} height={640} className="mx-auto"/>
      <p className="text-3xl w-full text-center mt-2">
        <span className=" bg-red-700 text-black">
          Seu José, ao lado esquerdo, recebeu alta após 11 dias internado no HU. Arquivo pessoal  
        </span>
      </p>
    </div>
  )
}

export default FifthChapter