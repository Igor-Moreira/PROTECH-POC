//importar o auth0
import {initAuth0} from '@auth0/nextjs-auth0'

export default initAuth0({
  clientId: process.env.AUTH0_CLIENT_ID,
  clientSecret: process.env.AUTH0_CLIENT_SECRET,
  scope: process.env.AUTH0_SCOPE,
  domain: process.env.AUTH0_DOMAIN,
  redirectUri: process.env.AUTH0_REDIRECT_URI,
  postLogoutRedirectUri: process.env.AUTH0_LOGOUT_REDIRECT_URI,
  session: {
    cookieSecret: process.env.AUTH0_SESSION_SECRET,
    cookieLifetime: process.env.AUTH0_SESSION_COOKIE_TIME
  }
})

/*
  clientId:'ICyN82T0QIVrWt1NyqMg5X35jrchbTat',
  clientSecret:'YZvMGQNDXM-Cum8c_jk62IPuw0EKN4zWL4NCsv5dMPhBo0E2u_xwS8skhaFq-hSU',
  scope:'openid profile',
  domain:'igormoreiraufu.us.auth0.com',
  redirectUri:'http://localhost:3000/api/callback',
  postLogoutRedirectUri:'http:localhost:3000',
  session: {
    cookieSecret: 'DHJFUDSFHEFKMCVVNJKDHJFIOUEDJKFL',
    cookieLifetime: 3600
  }
*/
//exporta todas as configurações do auth0

