//request <> response
import auth0 from '../../lib/auth0'

const login = async (request, response) => {
    //o auth0 fica responsável pelo login
    await auth0.handleLogin(request, response) 
}
export default login  