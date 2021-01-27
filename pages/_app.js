import React from 'react'
import '../styles/styles.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { AuthProvider } from '../lib/AuthContext'
// Component -> representa qual página será renderizada.
//{Component}-> destruction asignment no qual pegou toda a informação contida em outra página e colocou em <Component />
const App = ({ Component, pageProps }) => {
    return (
        <AuthProvider>
            <div>
                <Header />
                <div className='min-h-screen container mx-auto'>
                <Component {...pageProps}/>
                </div>
                <Footer />
            </div>
        </AuthProvider>
        )
}

export default App

