import Image from "next/image"

const SecondChapterContent = () => {
  return (
    <div className="w-screen h-screen flex justify-center">
      <div className="w-3/4 h-4/5 my-auto flex">
        <div className="w-1/2 h-full flex-col text-xl px-12">
          <p className="mb-8 text-justify">
            Formado a quase 20 anos pela Universidade Federal do Amapá, Donato trabalhou em UBS, UPA, UTI, e atendeu diversos casos de emergência ao longo de sua carreira. Apesar da vasta experiência, Donato conta que mesmo preparado para lidar com situações adversas, pouco se sabia sobre o vírus. “Não tinham muitos estudos sobre a doença, e nem informações mais precisas sobre a eficácia das medicações, tudo era indeciso e suspeito”, diz o enfermeiro que ficou na linha de frente na batalha contra a doença.
          </p>
          <p className="mb-8 text-justify">
            Donato continua, afirmando que situação causava desespero no profissional da saúde “quando o covid chega no Brasil, o que se sabia na época era que a pessoa infectada logo precisaria de um leito de UTI, isso nos deixou desesperados, pois se no dia a dia já não conseguimos atender as demandas, como íamos conseguir atender a todos?” finaliza o enfermeiro. 
          </p>
          <p className="mb-8 text-justify">
            O enfermeiro expõe uma realidade de que havia dois lados que se encontravam na mesma posição, uma população assustada e amedrontada, sem saber o que fazer, e uma equipe de médicos, enfermeiros, profissionais da saúde que precisavam lutar contra um inimigo desconhecido. 
          </p>
        </div>
        <div className="w-1/2 h-full flex-col text-xl px-12">
          <Image src="/enfermeirosAcao.png" alt="Enfermeiros em ação" width={1080} height={640}/>
        </div>
      </div>
    </div>
  )
}

export default SecondChapterContent