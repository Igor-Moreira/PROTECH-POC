import React, { useEffect } from 'react'
import auth0 from '../lib/auth0'
import router from 'next/router'
import { checkExists, findChecksNearbyCheckin } from '../model/markers'

const App = props => {
  //hook para executar o código somente uma vez
  useEffect(() => {    
  
    //condição de login
    if (props.isAuth == false) {
      router.push('/')
    }else if (props.user['https://example.com/roles'] == "admin"){
        router.push('/app2')
    }else if (props.forceCreate) {        
        router.push('/create-status')
    }      
        
  })
  //condição de exibição da tela, caso não esteja logado não será exibido.
  if (props.isAuth == false || props.forceCreate ) {
    return null
  } else if (props.user['https://example.com/roles'] == "admin"){
    return null
  }

  return (
    <div>
      <div className='pt-6 px-4 sm:px-6 lg:px-8 text-center text-teal-600 text-3xl font-extrabold leading-9 tracking-tight  sm:text-4xl sm:leading-10'>Status</div>

      <div className = " flex items-center ">
        <div className="mt-2 text-xl leading-8 ">        
          <div className = "flex">
            <table>
              {props.checkins.filter(checkin => checkin.id === props.user.sub).map(checkin => {
                return (
                  <tr key={checkin.id }>
                    <h1 className=' pt-6 px-10 text-gray-600 text-xl block'>                               
                        <td className='pt-6 px-1 font-bold' >{checkin.id === props.user.sub && 'Seu status: '}</td>
                        <td className='pt-6 px-1 '>{checkin.status}</td>
                        <td className='block'>
                        <td className='pt-6 px-1 font-bold'>Sua localização:</td>
                        <td className='pt-6 px-1 block '> {JSON.stringify(checkin.coords)}</td>  
                        </td>                               
                    </h1>
                  </tr>
                )
              })}
            </table>            
          </div>
        </div>
      </div>
    </div>
  )
}
export default App

// código executado diretamente no servidor
export async function getServerSideProps ({ req, res }) {
  let user = {}
  let isAuth = false
  let forceCreate = false
  let checkins = []

  const session = await auth0.getSession(req)
  // se o usuário estiver logado isAuth = true poderá ver essa página(app)
  if (session) {
    isAuth = true
    user = session.user    

    const todaysData = await checkExists(session.user.sub)

    if (!todaysData) {
      forceCreate = true
    } else {
      checkins = await findChecksNearbyCheckin(todaysData)
    }
  }
  return {
    props: {
      isAuth,
      user,
      forceCreate,
      checkins
    }
  }
}
