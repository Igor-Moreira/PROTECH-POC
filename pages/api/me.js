import auth0 from '../../lib/auth0'

const me = async (request, response) => {
  //try catch segura o erro devolvendo pro navegador, com código 500 com uma mensagem de erro.
  try {
    await auth0
      .handleProfile(request, response)
  } catch (err) {
    response
      .status(500)
      .end(err.message)
  }
}
export default me