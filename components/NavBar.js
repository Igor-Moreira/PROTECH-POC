import React from 'react'
import Link from 'next/link'
import { useAuth } from '../lib/AuthContext'
import { useState } from 'react'
import { Transition } from '@headlessui/react'


const NavLink = ({href, children}) => {
  return (
      <Link href={href}>
        <a className =' text-white hover:text-gray-500 transition duration-150 ease-in-out'>{children}</a>
      </Link>
  )
} 
/*
<a href='/api/login' className='py-4 px-4 rounded bg-blue-800 font-bold block w-1/5
text-center mx-auto text-white hover:shadow-2xl'> 
Login</a> 
*/

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const auth = useAuth()
  
  return (

    <div className = " flex items-center justify-center">

            <div className=" mt-2 text-xl leading-8 ">
              
                  <div className = "flex text-white">
                                  
                        {!auth.isAuth && <NavLink href='/'>Início</NavLink>}
                        {auth.isAuth && <NavLink href='/'>Início</NavLink>}
                        <a className = 'pr-8 pl-8 text-white'> | </a>
                        {!auth.isAuth && <NavLink href='/sobre'>Sobre</NavLink>}
                        {auth.isAuth && <NavLink href='/sobre'>Sobre</NavLink>}
                        <a className = 'pr-8 pl-8 text-white'> | </a>
                     
                                                                            
                        <a>{!auth.isAuth && <NavLink  href='/api/login'>Login</NavLink>}</a>
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
                      <div className='left-0'>
                        <div ref={ref} className="origin-top-right absolute  right-30 mt-8 w-38 rounded-md shadow-lg">
                          <div className="py-1 rounded-md  bg-teal-700  shadow-xs" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                            {auth.user['https://example.com/roles'] == "admin" &&<a href="/app2#" className="block px-4 py-2 text-sm text-center font-bold text-gray-900 hover:bg-blue-200" role="menuitem">Seu Status</a>}
                            {auth.user['https://example.com/roles'] == "user" &&<a href="/app#" className="block px-4 py-2 text-sm text-center font-bold text-gray-900 hover:bg-blue-200" role="menuitem">Seu Status</a>}
                            {auth.user['https://example.com/roles'] == "admin" && <a href="/create-status2" className=" block px-4 py-2 text-sm text-center font-bold text-gray-900 hover:bg-blue-200" role="menuitem">Editar status</a>}
                            {auth.user['https://example.com/roles'] == "user" && <a href="/create-status" className=" block px-4 py-2 text-sm text-center font-bold text-gray-900 hover:bg-blue-200" role="menuitem">Editar status</a>}
                            <a href="/api/logout" className="block px-4 py-2 text-center text-sm font-bold text-gray-900 hover:bg-white" role="menuitem">Sair</a>
                          </div>
                        </div>
                      </div>                    
                      )}

                        </Transition>       
           
                  </div>
                
            </div>
    </div>

  )
  
}


export default NavBar



