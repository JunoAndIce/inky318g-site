
import useLocoScroll from "../hooks/useLocoScroll";
import Hero from "../components/MainHero"
// import Projects from "../components/projects";
import Navbar from '../components/navbar'


const Home = () => {

  useLocoScroll(true);

  return (
    <div data-scroll-container className="home">
      
      <Navbar />

      <Hero />

      
      {/* <Projects /> */}
    </div>
  );

}

export default Home; 