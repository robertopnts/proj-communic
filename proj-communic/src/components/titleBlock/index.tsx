import Image from "next/image"

const TitleBlock = () => {
  return (
    <div className="w-screen h-screen flex">
      <Image className="-z-0 absolute" src="/bgPrincipal1.png" alt="Médica fotografada em período de crise" width={1920} height={840}/>
      <div className="text-[119px] z-20 flex-col text-red-700 text-center font-sans font-bold mx-auto my-auto">
        <Image src="/logo.png" width={226} height={106} alt="logo communic" className="z-1 absolute top-4 left-4"/>
        <p>Pandemia:</p>
        <p>as marcas da sobrevivência</p>
        <p className="text-[35px] text-white font-normal">Do trauma a superação</p>
      </div>
    </div>
  )
}

export default TitleBlock