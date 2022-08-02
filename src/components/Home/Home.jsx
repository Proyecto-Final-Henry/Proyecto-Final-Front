import Nav from "../Nav/Nav"
import ControlledCarousel from "./Carousel";
import Footer from "../Footer/Footer";

function Home() {
    return (
      <div>
        <Nav/>
        <div className="Caro">
           <ControlledCarousel/>
        </div>
        <div className="footer-l">
            <Footer/>
        </div>
      </div>
    );
  }

export default Home;