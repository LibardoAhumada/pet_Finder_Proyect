import Causa from "../components/Causa"
import Footer from "../components/Footer"
import Donar from "../components/Donar"
import Navbar from './Components/Navbar';
import FirstText from "./Components/FirstText"
import LandingImg from './Components/LandingImg';

const Home = () => {
  return (
    <>
      <Causa />
      <Footer />
      <Donar />
    

  

<div>
  <Navbar />
  <div>
    <FirstText />
  </div>
  <div>
    <LandingImg />
  </div>
</div>
</>
  )
};

export default Home;

