import '../styles/globals.css'
import 'semantic-ui-css/semantic.min.css'
import Footer from '../src/component/Footer'
import Top from '../src/component/Top'
import { Divider } from 'semantic-ui-react'

function MyApp({ Component, pageProps }) {
  return (
    <div className='wrap'>
      <Top />
      <Component {...pageProps} />
      <Divider />
      <Footer />
    </div>
  )
  
  
  
}

export default MyApp
