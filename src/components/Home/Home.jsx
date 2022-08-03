import ControlledCarousel from "./Carousel";
import Footer from "../Footer/Footer";
import Info from "./Info";

function Home() {
    return (
      <div>
        <div className="Caro">
          <ControlledCarousel/>
        </div>
        <div className="info">
          <Info/>
        </div>
        <div className="footer-l">
          <Footer/>
        </div>
        
      </div>
    );
  }

export default Home;