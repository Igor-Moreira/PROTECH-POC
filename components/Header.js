//useEffect -> guarda uma variável dentro do componente
import React from 'react'
import NavBar from './NavBar'
//import {useAuth} from '../lib/AuthContext'
import NavBarMob from './NavBarMob'
import { useState } from 'react'
import { Transition } from '@headlessui/react'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    //const auth = useAuth()

    return(
        
        <div className =" bg-gradient-to-r from-teal-600 via-teal-400 to-teal-600  pt-10">      
            <div className = 'bg-white  pt-6 px-4 py-4 lg:px-8'>  
                <div className = 'box-border h-20 w-32 p-4'>
                    <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start"> 
                        <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0 ">                                    
                            <a href="/" aria-label="Home">
                                <img className="h-8 w-auto sm:h-15" src="/logo.png" alt="Logo" />
                            </a> 
                        </div>                                        
                    </nav> 
                </div>             
            </div>

            <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                <div className="flex items-center justify-between w-full md:w-auto">                   
                    <div className="-mr-2 flex items-center md:hidden">
                        <button type="button" onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out" id="main-menu" aria-label="Main menu" aria-haspopup="true">
                            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className="hidden md:block md:ml-10 p-2 md:pr-5 ">                     
                <NavBar/>
                                   
            </div>

            <Transition
            show={isOpen}
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
            >
            {(ref) => (

                <div ref={ref} className="absolute top-0 inset-x-0 p- transition transform origin-top-right md:hidden">
                    <div className="rounded-lg shadow-md">
                        <div className="rounded-lg bg-gradient-to-r from-teal-600 via-teal-400 to-teal-600 shadow-xs overflow-hidden" role="menu" aria-orientation="vertical" aria-labelledby="main-menu">
                            <div className="px-5 pt-4 flex items-center justify-between">  
                                <div className="bg-white relative overflow-hidden">
                                    <div className = 'box-border h-12 sm:h-20 p-2'>
                                        <img className="h-8  sm:h-15" src="/logo.png" alt="Logo" />
                                    </div>
                                </div>
                                    
                                <div className="-mr-2">
                                    <button type="button" onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out" aria-label="Close menu">
                                        <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                                <div className="">                                                            
                                    <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 ease-in-out" role="menuitem"><NavBarMob/></a>
                                </div>
                        </div>
                    </div>
                </div>
            )}
            </Transition>
        </div> 
                    
                       )
}
    
export default Header

// <pre>{JSON.stringify(auth)}</pre>

