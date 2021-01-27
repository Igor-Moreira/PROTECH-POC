import React from 'react'

const sobre = () => {
   
    return (
        <div>
            <div className="py-8 bg-white">         
                    <div className="lg:text-center bg-gradient-to-r from-teal-600 via-teal-400 to-teal-600  pt-8">
                        
                        <h1 className="mt-2 text-3xl leading-8  font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
                            Centro de Próteses
                        </h1>
                        <p className="py-8 text-base leading-6 text-indigo-800 font-semibold tracking-wide uppercase">
                            Apresentação
                        </p>
                        <p className="mt-1  text-xl leading-7 text-white lg:mx-auto">
                            Prezado(a) Paciente,Você recebeu a prótese. Ela é só sua.
                            Feita na sua medida para lhe ajudar a alcançar maior independência nas
                            suas atividades do dia a dia. A prótese é uma parte importante do tratamento
                            de reabilitação dos amputados. Tem o papel de realizar a função do membro
                            perdido. O nosso objetivo é fazer com que você retorne às suas atividades
                            rotineiras, descubra alternativas, adapte-se à sua nova condição e possa
                            viver sua vida.                       
                        </p>
                    </div>
                    
                    <div className="lg:text-left px-4">                
                        <p className="py-8 text-base leading-6 text-indigo-800 font-semibold tracking-wide uppercase">
                        Equipe de profissionais:
                        </p>                    
                    </div>
                    
                    <div className="mt-10">
                        <ul className="md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">

                        <li>
                            <div className="flex px-4">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-teal-600 via-teal-400 to-teal-600 text-gray">
                                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h2 className="font-bold text-lg leading-6 font-medium text-gray-900">
                                        Médico
                                    </h2>
                                    <p className="mt-2 text-base leading-6 text-gray-500">
                                        O Médico avalia o seu caso clinicamente e define a prótese mais
                                        adequada. Acompanha o seu tratamento até a alta, discutindo
                                        sempre com a equipe de reabilitação que irá atendê-lo.
                                    </p>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="flex px-4">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-teal-600 via-teal-400 to-teal-600 text-gray">
                                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h2 className="font-bold text-lg leading-6 font-medium text-gray-900">
                                        Fisioterapeuta  
                                    </h2>
                                    <p className="mt-2 text-base leading-6 text-gray-500">
                                        O Fisioterapeuta estabelece um programa de treinamento
                                        individualizado que vai ajudá-lo na colocação, retirada e
                                        utilização correta da prótese para que você possa usá-la com
                                        segurança e autonomia.
                                    </p>
                                </div>
                            </div>
                        </li> 

                        <li>
                            <div className="flex px-4">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-teal-600 via-teal-400 to-teal-600 text-gray">
                                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h2 className="font-bold text-lg leading-6 font-medium text-gray-900">
                                        Assistente Social
                                    </h2>
                                    <p className="mt-2 text-base leading-6 text-gray-500">
                                    O Assistente Social orienta sobre as questões que envolvem
                                    o processo de reabilitação, a rotina de atendimento, o acesso
                                    à rede pública assistencial e de saúde e sobre os direitos da
                                    pessoa com deficiência.
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="flex px-4">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-teal-600 via-teal-400 to-teal-600 text-gray">
                                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <a href= '/terapeuta' className="shadow-2xl font-bold text-lg leading-6 font-mediumml-8 font-medium text-gray-900 hover:text-gray-400 transition duration-150 ease-in-out">
                                        Terapeuta ocupacional
                                    </a>
                                    <p className="mt-2 text-base leading-6 text-gray-500">
                                        O Terapeuta ocupacional trabalha a preparação do coto para
                                        protetização e a estimulação funcional para atividades da vida
                                        diária, bem como atua na adequação do ambiente doméstico e do trabalho.
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="flex px-4">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-teal-600 via-teal-400 to-teal-600 text-gray">
                                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h2 className="font-bold text-lg leading-6 font-medium text-gray-900">
                                        Psicólogo
                                    </h2>
                                    <p className="mt-2 text-base leading-6 text-gray-500">
                                        O Psicólogo trabalha os aspectos emocionais associados à
                                        amputação e reabilitação oferecendo um espaço terapêutico
                                        para que você possa tratar do seu sofrimento, dificuldades,
                                        ansiedades, medos e angústias.
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="flex px-4">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-teal-600 via-teal-400 to-teal-600 text-gray">
                                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h2 className="font-bold text-lg leading-6 font-medium text-gray-900">
                                        Técnico Protesista
                                    </h2>
                                    <p className="mt-2 text-base leading-6 text-gray-500">
                                        O Técnico Protesista é responsável pela confecção de sua
                                        prótese, assim como pelos ajustes que acontecerão à medida
                                        que você comece a utilizá-la.
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="flex px-4">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-teal-600 via-teal-400 to-teal-600 text-gray">
                                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h2 className="font-bold text-lg leading-6 font-medium text-gray-900">
                                        Agente Administrativo
                                    </h2>
                                    <p className="mt-2 text-base leading-6 text-gray-500">
                                        O Agente Administrativo marca as consultas e tratamento e
                                        orienta quanto à sua frequência ao INTO conforme a rotina.
                                    </p>
                                </div>
                            </div>
                        </li>

                        </ul>
                    </div>               
            </div>

            <h1 className='text-center italic text-gray-400 py-8'>Fonte: Cartilha de orientação a pacientes do Instituto Nacional de Traumatologia 
            e Ortopedia(INTO)
            </h1>  

        </div>
    )

}
export default sobre

