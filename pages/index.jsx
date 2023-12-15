import Navbar from './Components/Navbar';
import FirstText from "./Components/FirstText"
import LandingImg from './Components/LandingImg';


const Home = () => {
  return (
    <div>
      <Navbar />
      <div>
        <FirstText/>
      </div>
      <div>
        <LandingImg/>
      </div>
    </div>
  );
};



export default Home;