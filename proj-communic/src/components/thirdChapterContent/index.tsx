import Image from "next/image"
import Link from "next/link"

const ThirdChapterContent = () => {
  return (
    <div className="w-screen h-[1200px] pt-8 flex justify-center">
      <div className="w-3/4 h-full my-auto flex">
        <div className="w-1/2 h-full flex-col text-xl px-12">
          <p className="mb-8 text-justify">
            O filósofo Montaigne acreditava que somente a era capaz de preparar o homem para a morte, mas no período pandêmico, infelizmente se despedir sem mesmo saber, era corriqueiro. Na pandemia aprendeu-se da pior forma possível que a vida é um sopro, e que qualquer momento poderia ser o último.
          </p>
          <p className="mb-8 text-justify">
            O doloroso adeus era dito tarde mais, devido a gravidade da proliferação da doença, e as causas ainda desconhecidas, eram necessários cuidados rigorosos, a fim de não aumentarem os casos de  contaminação.  
          </p>
          <p className="mb-8 text-justify">
            Não havia despedidas. Após a entrada do paciente para as alas de tratamento intensivo, tudo era incerto, e se viesse a óbito não era possível fazer um velório decente, covas eram feitas de forma imediata no intuito de se livrar do que poderia ser futuramente um problema ainda maior. A dignidade humana foi se esvaindo sem qualquer cerimônia.  
          </p>
          <p className="mb-8 text-justify">
            Com a grande demanda de infectados, e com 100 mortes registradas, a cidade de <Link className="text-red-700 font-bold" href="https://exame.com/brasil/amapa-e-o-primeiro-estado-a-decretar-lockdown-total-contra-covid-19/">Macapá decretou Lockdown</Link> (confinamento). Além da superlotação nos hospitais, ainda havia uma grande demanda de óbitos. Seu Moisés Souza, construtor de lápides no período da pandemia, conta como foi assustador e doloroso presenciar tantas mortes.  
          </p>
          <p className="mb-8 text-justify">
            “Foi muito difícil ver a quantidade de pessoas que estavam morrendo por covid. Podiam entrar apenas três pessoas por enterro lá dentro do cemitério, e os demais familiares não podiam por conta do distanciamento.  A maioria das vítimas eram adultos e idosos, enterrados no cemitério São José, às vezes, chorávamos juntos com os familiares porque ficávamos pensando nas nossas famílias também e como era difícil tudo aquilo. Chegamos a enterrar pessoas à noite, por conta da alta demanda de enterros e tinham muitas regras para que eles ficassem minimamente seguros” afirma o construtor.   
          </p>
          <p className="mb-8 text-justify">
            No cemitério São Francisco em Macapá foram enterradas histórias, sonhos, projetos, filhos, netos, avós, pais, mães, maridos e mulheres, profissionais da saúde que vestiram todas as armaduras necessárias para salvar o próximo, mas se tornaram vítimas.  
          </p>
        </div>
        <div className="w-1/2 h-full flex-col text-xl px-12">
          <Image src="/coveiro.png" alt="Enfermeiros em ação" width={1080} height={640}/>
          <p className="text-base text-justify">
            Moises Souza construtor de lápides que atuou no período da pandemia no cemitério São José. Arquivo pessoal
          </p>
          <p className="text-xl mt-8 text-red-700 font-bold text-justify">
            “Ter que construir lápides diariamente, naquela situação, pensava muito no sofrimento das famílias que não conseguiram se despedir dignamente, esse vírus chegou com uma verdadeira praga devastando as pessoas e que eu jamais esperava receber tantas pessoas no cemitério como na pandemia”, lamentou Moisés.  
          </p>
        </div>
      </div>
    </div>
  )
}

export default ThirdChapterContent