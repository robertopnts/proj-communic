import Image from "next/image"

const FourthChapterContent2 = () => {
  return (
    <div className="w-screen h-[1160px] pt-8 flex justify-center">
      <div className="w-3/4 h-full my-auto flex">
        <div className="w-1/2 h-full flex-col text-xl px-12">
          <Image src="/estudante.png" alt="Enfermeiros em ação" width={1080} height={640}/>
          <p className="text-base mb-8 text-justify">
            Elaine Martins, 21 anos. Arquivo pessoal 
          </p>
          <p className="mb-8 text-justify">
            Para a estudante Elaine Martins, fazer um acompanhamento psicológico após todo esse processo traumático é extremamente necessário, “Tive covid em 2021, não cheguei a internação, fui infectada dentro de casa, o lugar que eu achava mais seguro para me proteger desse vírus, ao me isolar com medo de contaminar minha família, os pensamentos frenéticos rondavam minha cabeça, fiquei com sequelas físicas e emocionais, fazer um acompanhamento psicológico após todo esse processo traumático foi necessário, para compreender que tudo isso já passou e que era preciso sair de casa sem medo” diz a estudante.  
          </p>
        </div>
        <div className="w-1/2 h-full flex-col text-xl px-12">
          <Image src="/grafico2.png" alt="Gráfico de atendimento psicológico SUS" width={710} height={1100}/>
        </div>
      </div>
    </div>
  )
} 

export default FourthChapterContent2