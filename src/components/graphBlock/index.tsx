import Image from "next/image"

const GraphBlock = () => {
  return (
    <div className="w-screen h-[1080px] flex-col justify-center">
      <div className="w-3/4 h-[840px] mx-auto flex-col">
        <h1 className="text-xl mt-12 mb-14 px-12 text-red-700 font-bold text-justify">
          No dia 13 de Março de 2021 a abertura de covas em elevação foi necessária, sendo que em 2020, 805 pessoas foram sepultadas por causa da covid 19.
        </h1>
        <Image className="mx-auto" src="/graficoMortes.png" alt="Gráfico de sepultamentos em Macapá" width={1080} height={640}/>
      </div>
      <div className="w-full flex bg-red-700 h-[240px] text-black font-bold justify-center text-xl">
        <p className="w-3/4 mx-12 my-auto text-center leading-8">
          Os óbitos continuavam um ano após o início da pandemia se instaurar na capital e nos municípios, os hospitais seguem na batalha por melhores condições para suprir as necessidades populacionais, famílias que iam em busca de atendimento e não sabiam o seu destino, poucos tinham a sorte, ou para quem tem crença diga, que por um milagre voltar para casa. Mas nada foi fácil, após toda essa tragédia, como a sociedade amapaense se encontra?
        </p>
      </div>
    </div>
  )
}

export default GraphBlock