import './App.css'
import Header from "./components/header/header"
import Banner from "./components/banner/banner"
import Mortes from "./components/mortes/mortes"
import Epidemia from "./components/epidemia/epidemia"
import Contato from "./components/contato/contato"
import Footer from "./components/footer/footer"

export default function App(){

  return (
    <>
      <Header />
      <Banner/>
      <Mortes/>
      <Epidemia/>
      <Contato/>
      <Footer/>
    </>
  )
}

