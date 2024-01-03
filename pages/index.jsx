import Causa from "../components/Causa"
import Footer from "../components/Footer"
import Donar from "../components/Donar"
import Navbar from './Components/Navbar';
import FirstText from "./Components/FirstText"
import LandingImg from './Components/LandingImg';
import LandingCards from "@/Componens/LandingCards";

const Home = () => {
  return (
    <>
      <Navbar />
      <FirstText/>      
      <LandingImg/>
      <LandingCards/>
      <Causa />
      <Footer />
      <Donar /> 
      <mapa/>
      
    </>

  )
}
  
    
export default Home;

