import Link from "next/link"

const FirstChapterContent = () => {
  return (
    <div className="w-screen h-screen flex justify-center">
      <div className="w-3/4 h-full my-auto flex">
        <div className="w-1/2 h-full flex-col text-xl px-12">
          <p className="mb-8 text-justify">
            Como vencer o que parece invencível? Essa era uma das perguntas que atormentavam a população, o sentimento de indefesa era inevitável. Mesmo com a possibilidade da criação de uma vacina que ajudasse a solucionar o problema, nada estava certo.  Seu José Mauro Pereira de 53 anos, testemunhou do caos e do medo vivido naquela época, e como a luta para sobreviver foi traumática.
          </p>
          <p className="mb-8 text-justify">
            Vendo a proporção que a doença se espalhava, Seu José ainda tinha suas ressalvas, mesmo se cuidando, parecia que aquilo tudo não era real. Em outubro de 2020, sentiu uma leve indisposição, sem tanto alarde desconfiou da temida gripe, e estava certo. Com sintomas leves, e com o apoio da família, seu José se tratou em casa, assim como muitos que buscavam os atendimentos para tratar da doença eram direcionados, já que os casos de internação eram apenas para casos mais graves. Porém, no final do mesmo mês, seu José piorou.  
          </p>
          <p className="mb-8 text-justify">
            Sem conseguir levantar da cama, e com a saturação muito baixa, mesmo tomando as medicações em casa, a situação se agravou. Foi então que através de uma tomografia, detectou-se que 85% dos pulmões estavam comprometidos. 
          </p>
          <p className="mb-8 text-justify">
            Um dos sintomas mais perigosos da covid 19 é o <Link className="text-red-700 font-bold" href={"https://star.med.br/acometimento-pulmonar-pos-covid/"}>acometimento pulmonar</Link>, que é a perda da capacidade de oxigenar o sangue, resultando na “falta de ar”. De forma agressiva e na maioria das vezes sorrateira, o indivíduo tenta respirar mais rápido e profundamente causando sobrecarga. 
          </p>
        </div>
        <div className="w-1/2 h-full flex-col text-xl px-12">
          <p className="mb-8 text-justify">
            Com 85% dos pulmões atingidos, a urgência de seu José era de um tratamento imediato e eficaz, duas coisas quase que impossíveis de se conseguir considerando o estado de calamidade que se encontrava a saúde do estado. Encaminhado a Unidade Básica de Saúde Lélio Silva, com a pressão e glicemia alteradas, o mais viável era a internação. Sem leitos disponíveis no HE, a família começou a batalha para conseguir a internação no HU (Hospital Universitário) que foi referência no <Link className="text-red-700 font-bold" href={"http://www.unifap.br/parceria-do-hu-unifap-e-estado-completa-tres-meses-no-tratamento-da-covid-19/"}>tratamento intensivo</Link> de casos mais sérios de covid 19 no estado.
          </p>
          <p className="mb-8 text-justify">
            Após a jornada para conseguir a internação, de acordo com os médicos o mais viável seria a intubação, mas por não ter leitos de intubação disponíveis, seu José precisou ficar em espera, o médico de plantão pediu 24h de observação, na expectativa de uma possível melhora. 
          </p>
          <p className="mb-8 text-justify">
            E a melhora veio, a situação de seu José não piorou, e acabou não precisando ser intubado. Mesmo assim, ao longo de 11 dias internado, seu José perdeu muita musculatura das pernas, teve um grande enfraquecimento físico e sequelas que perduraram até hoje. 
          </p>
        </div>
      </div>
    </div>
  )
}

export default FirstChapterContent