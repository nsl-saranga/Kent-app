import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../assets/ad1.jpg';
import img3 from '../../assets/ad3.jpg';
import img4 from '../../assets/ad4.jpg';
import './HomeCorouselPage.css';

const HomeCarouselPage = () => {
  return (
    <div className="carousel-container"> {/* Add container with specified size */}
      <Carousel variant="dark">
        <Carousel.Item>
          <div className="carousel-content">
            <img
              className="d-block w-100 carousel-img"
              src={img1}
              alt="First slide"
            />
           
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-content">
            <img
              className="d-block w-100 carousel-img"
              src={img3}
              alt="Second slide"
            />
            
          </div>
        </Carousel.Item>
        
      </Carousel>
    </div>
  );
};

export default HomeCarouselPage;
