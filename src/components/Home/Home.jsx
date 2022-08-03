import ControlledCarousel from "./Carousel";
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
        </div>
        
      </div>
    );
  };

export default Home;