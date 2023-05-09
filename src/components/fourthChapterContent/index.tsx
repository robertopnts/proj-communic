import Link from "next/link"

const FourthChapterContent = () => {
  return (
    <div className="w-screen h-[820px] flex justify-center">
      <div className="w-3/4 h-5/6 my-auto flex">
        <div className="w-1/2 h-full flex-col text-xl px-12">
          <p className="mb-8 text-justify">
            A saúde mental, além da física foi a que mais sofreu durante a pandemia, angústia por sobrevivência e pânico para fazer atividades mínimas do dia a dia tornaram muitas pessoas refém dos próprios pensamentos, para entender melhor sobre como a sociedade amapaense foi afetada tentamos contato com Secretária de Saúde do estado mas não obtivemos resposta.
          </p>
          <p className="mb-8 text-justify">
            Para a psicóloga, Khatarina Silva Carneiro, a população amapaense tem tentado se reerguer. 
          </p>
          <p className="mb-4 text-justify text-red-700 font-bold">
            Como profissional, qual a sua opinião sobre o estado da população amapaense hoje?
          </p>
          <p className="mb-8 text-justify">
            “Desde muito antes da pandemia se tem uma cultura de quem precisa de ajuda psicológica são apenas pessoas consideradas “doidas”, mas eu acredito que houve uma quebra disso quando aconteceu a pandemia, hoje principalmente os jovens têm essa necessidade do atendimento psicológico, ainda mais depois de tudo que aconteceu, muitas perdas, muitas rotinas sendo quebradas, sem falar no isolamento que o mundo teve. Pode ser visto uma grande procura por atendimento tanto na época da pandemia quanto depois, pois o número de pessoas com transtorno de ansiedade e depressão teve um aumento de 25% só no primeiro ano, sendo os jovens e as mulheres os mais afetados”, afirma a profissional.  
          </p>
        </div>
        <div className="w-1/2 h-full flex-col text-xl px-12">
          <p className="mb-4 text-justify text-red-700 font-bold">
            Como eles estão enfrentando esse retorno?
          </p>
          <p className="mb-8 text-justify">
            “Desde a época da pandemia e com o fortalecimento da terapia de forma online, facilitou muito a comunicação, claro existem pessoas que ainda preferem a terapia de forma presencial, mas querendo ou não o online foi uma ferramenta de grande ajuda enquanto estávamos em quarentena”.  
          </p>
          <p className="mb-4 text-justify text-red-700 font-bold">
            Você acredita que a população precisaria de um acompanhamento mais intenso nesse sentido? 
          </p>
          <p className="mb-8 text-justify">
            “Eu acredito que todo mundo deveria fazer terapia, nem que seja pelo uma vez na vida, logo no início é uma coisa que muitos consideram estranho e não veem a necessidade, mas com o passar do tempo vão percebendo que é algo de extrema importância, o crescimento, o autoconhecimento que se vai criando dentro de um setting terapêutico é muito admirável”, finaliza.
          </p>
          <p className="mb-8 text-justify">
            As mazelas persistem na comunidade amapaense, uns conseguiram se reerguer após o ocorrido, outras ainda continuam na luta. Houve fome, desemprego, <Link href="https://revistagalileu.globo.com/Ciencia/Saude/noticia/2022/01/saude-mental-cientistas-avaliam-os-efeitos-traumaticos-da-pandemia.html" className="text-red-700 font-bold">instabilidade emocional</Link> e até um <Link href="https://g1.globo.com/ap/amapa/noticia/2020/11/05/macapa-decreta-estado-de-calamidade-publica-apos-48-horas-de-apagao.ghtml" className="text-red-700 font-bold">apagão</Link> que aumentou o sofrimento dos amapaenses por 21 dias sem o básico como água e alimento, deixando a situação ainda mais traumática.  
          </p>
        </div>
      </div>
    </div>
  )
}

export default FourthChapterContent