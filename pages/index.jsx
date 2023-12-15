import Causa from "./Components/Causa";
import Footer from "./Components/Footer";
import Donar from "./Components/Donar";
import Navbar from './Components/Navbar';
import FirstText from "./Components/FirstText";
import LandingImg from './Components/LandingImg';

const Home = () => {
  return (
    <>
      <div>
        <Navbar />
        <div>
          <FirstText />
        </div>
        <div>
          <LandingImg />
        </div>
      </div>
      <Causa />
      <Footer />
      <Donar />
    </>
  );
};

export default Home;
