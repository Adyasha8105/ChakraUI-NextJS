import { ChakraProvider } from "@chakra-ui/react"
import Header from '../components/Header'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Header></Header>
      <Component {...pageProps} />
      <Footer></Footer>
    </ChakraProvider>
  )
}

export default MyApp