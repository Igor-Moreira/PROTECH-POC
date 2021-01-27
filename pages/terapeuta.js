import React from 'react'

const terapeuta = () => {
    return( 

      <div className="py-2 bg-white">

        <div className="relative bg-white overflow-hidden">
          <div className="max-w-screen-xl mx-auto">
            <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
  

              <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
                <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start">
                  <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                    <div className="flex items-center justify-between w-full md:w-auto">                      
                    </div>
                  </div>                  
                </nav>
              </div>              

              <main className="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="sm:text-center lg:text-left">
                  <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
                    Realidade
                    <br className="xl:hidden"/>
                    <span className="text-teal-600"> Misturada</span>
                  </h2>
                  <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                 Um ambiente em Realidade Misturada, onde o usuário pode abrir e fechar a prótese por meio de movimentos mecânicos com acionamento por meio de tirantes. 
                 Sistema versátil e pode funcionar em três interfaces diferentes (óculos Microsoft HololensTM, Vuzix® 1200 ou diretamente com a webcam e monitores). 
                  </p>
                </div>
              </main>
              
            </div>
          </div>
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img className="h-56 w-full object-scale-down object-contain sm:h-72 md:h-96 lg:w-full lg:h-full" src="/img2.png" alt=""/>
          </div>
        </div>



        <div className="relative bg-white overflow-hidden">
        <div className="max-w-screen-xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">

            <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
              <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start">
                <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                  <div className="flex items-center justify-between w-full md:w-auto">                      
                  </div>
                </div>                  
              </nav>
            </div>              

            <main className="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
                Sistema
                  <br className="xl:hidden"/>
                  <span className="text-teal-600"> MRProsthesis</span>
                </h2>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
               Nada mais é que uma interface gráfica no qual é baseada em jogos sérios, então há várias atividades proposta pelo sistema no qual o usuário recebe pontuação de acerto ou erro.  
                </p>
              </div>
            </main>
            
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img className="h-56 w-full object-scale-down object-contain sm:h-72 md:h-96 lg:w-full lg:h-full" src="/img1.png" alt=""/>
        </div>
      </div>


      <div className='text-right italic text-gray-400 py-100'>
      Fonte: 
      <a className= ' hover:text-indigo-700' href='https://repositorio.ufu.br/handle/123456789/26914'>	De Lima, Diogo Aparecido Cavalcante</a>
      </div>

    </div>
  )
}
export default terapeuta 