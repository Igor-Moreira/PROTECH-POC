
import React from 'react'
import Link from 'next/link'
import { useAuth } from '../lib/AuthContext'
import { useState } from 'react'
import { Transition } from '@headlessui/react'


const NavLink = ({href, children}) => {
  return (
      <Link href={href}>
        <a className ='text-white hover:text-gray-500 transition duration-150 ease-in-out '>{children}</a>
      </Link>
  )
} 
//<a className =' text-white hover:text-gray-500 transition duration-150 ease-in-out'>{children}</a>

const NavBarMob = () => {
  const [isOpen, setIsOpen] = useState(false)
  const auth = useAuth()
  
  return (

         
    <div className = " flex items-center justify-center">

      <div className=" mt-2 text-xl leading-8 ">
        
            <div className = "flex">
                              
              <a className="" role="menuitem">{!auth.isAuth && <NavLink href='/'>Início</NavLink>}</a>                       
              <a className="" role="menuitem">{auth.isAuth && <NavLink href='/'>Início</NavLink>}</a>
              <a className= 'pr-1 pl-1 text-white'> | </a>                         
              <a className="" role="menuitem">{!auth.isAuth && <NavLink href='/sobre'>Sobre</NavLink>}</a>      
              <a className="" role="menuitem">{auth.isAuth && <NavLink href='/sobre'>Sobre</NavLink>}</a>
              <a className= 'pr-1 pl-1 text-white'> | </a>
              <a className="" role="menuitem">{!auth.isAuth && <NavLink href='/api/login'>Login</NavLink>}</a>                   
                                
        
              <button ype="button" onClick={() => setIsOpen(!isOpen)} className="" id="user-menu" aria-label="User menu" aria-haspopup="true">
                        {auth.isAuth && (<NavLink href=''>{auth.user.given_name} {auth.user.family_name}</NavLink>)} 
              </button>
              <div className="ml-3 relative">
                  <div>
                    <button ype="button" onClick={() => setIsOpen(!isOpen)} className="max-w-xs flex items-center text-sm rounded-full text-white focus:outline-none focus:shadow-solid" id="user-menu" aria-label="User menu" aria-haspopup="true">
                      {auth.isAuth && <NavLink href=''><img className="h-8 w-8 rounded-full" src={auth.user.picture} alt=""/></NavLink>  }               
                    </button>
                  </div>        
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
              
                <div ref={ref} className="origin-top-right absolute right-40 mt-8 w-38 rounded-md shadow-lg">
                  <div className="py-1 rounded-md  bg-teal-700  shadow-xs" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                    <a href="/app#" className="block px-4 py-2 text-sm text-center font-bold text-gray-900 hover:bg-blue-200" role="menuitem">Seu status</a>
                    <a href="/create-status" className="block px-4 py-2 text-sm text-center font-bold text-gray-900 hover:bg-blue-200" role="menuitem">Editar status</a>
                    <a href="/api/logout" className="block px-4 py-2 text-center text-sm font-bold text-gray-900 hover:bg-blue-200" role="menuitem">Sair</a>
                  </div>
                </div>                    
              )}
              </Transition>           
        </div>      
      </div>
    </div>
  )
  
}

export default NavBarMob

// <div className = " inline-block  text-center  px-4 py-2"></div>