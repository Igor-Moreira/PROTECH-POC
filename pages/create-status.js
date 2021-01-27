import React, { useState } from 'react'
import auth0 from '../lib/auth0'
import axios from 'axios'
import router from 'next/router'
import { useAuth } from '../lib/AuthContext'

const CreateStatus = () => {
  const auth = useAuth()

  const [dados, setDados] = useState({
    nome: '',
    status: '',
    coords: {
      lat: null,
      long: null
    }
  })
  
  if (auth.isAuthReady && !auth.isAuth) {
    router.push('/')
  }

  if (auth.user['https://example.com/roles'] == "admin"){
    router.push('/create-status2')
  }else if (auth.user['https://example.com/roles'] == "admin") {
    return null
  }

  const getMyLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        setDados(old => {
          return {
            ...old,
            coords: {
              lat: position.coords.latitude,
              long: position.coords.longitude
            }
          }
        })
      })
    }
  }
 const onStatusChange = evt => {
    const value = evt.target.value
    setDados(old => {
      return {
        ...old,
        status: value,
        nome: auth.user.name     
      }
    })
  }
  const save = async () => {
    await axios.post('/api/save-status', dados )
  }


  return (
    <div className="  ">
      <div className="py-8 bg-white ">
        <div className=" bg-gradient-to-r  from-teal-600 via-teal-400 to-teal-600  pt-8 ">
          <div className=" lg:text-center mt-2  text-3xl leading-8  font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 ">
            Status diário
          </div>
          <div className="px-8 py-10">

            <label className='block'>
              <input
                type='radio'
                name='status'
                value='Bem e sem problemas!'                
                onClick={onStatusChange}
              />{' '}
              Estou bem sem problemas para usar a prótese.
            </label>
            <label className='block'>
              <input
                type='radio'
                name='status'
                value='Bem, porém com problemas!'
                onClick={onStatusChange}
              />{' '}
              Estou bem porém tenho alguns problemas com a prótese.
            </label>
            <label className='block'>
              <input
                type='radio'
                name='status'
                value='Mal, algo atrapalha o uso!'
                onClick={onStatusChange}
              />{' '}
              Não consigo me adpatar ao uso dá prótese.
            </label>

            <label className= 'block'> 
              Sua posição atual: {JSON.stringify(dados)}
            </label> 
           
            <div className = 'mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start'>
              <h1 className = ' rounded-md shadow'>
              <button className= 'font-bold w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-teal-900 hover:bg-teal-800 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10' onClick={getMyLocation}>
                    Pegar minha localização              
              </button>
              </h1>
              <h1 className = 'mt-3 sm:mt-0 sm:ml-3'>
                <button className= 'font-bold w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-teal-700 bg-indigo-100 hover:text-teal-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10' onClick={save} >
                    Salvar localização          
                </button>
              </h1>        
            </div> 

          </div>
        </div>
      </div>
    </div>
  )
}
export default CreateStatus

//checagem de login do usuário
export async function getServerSideProps ({ req, res }) {
  const session = await auth0.getSession(req)
  if (session) {
    return {
      props: {
        isAuth: true,
        user: session.user
      }
    }
  }
  return {
    props: {
      isAuth: false,
      user: {}
    }
  }
}