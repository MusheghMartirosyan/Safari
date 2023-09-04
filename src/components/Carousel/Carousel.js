import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Carousel.css"
import { BsCheckCircle } from "react-icons/bs";

function CarouselComponent() {
  return (
    <Carousel className='carousel'>
      <Carousel.Item>
        <div className='carousel-img1'></div>
        <Carousel.Caption>
          <h3>Tanzania: land of safaris, nature, culture and wildlife.</h3>
          <p>A Tanzania vacation is the ultimate once-in-a-lifetime holiday! Tanzania is a top safari destination and has so much to offer.</p>
          <button>Book a tour</button>
          <ul>
            <li><BsCheckCircle /> 100% specialized in Tanzania</li>
            <li><BsCheckCircle /> World class safari guides</li>
            <li><BsCheckCircle /> Private safaris</li>
          </ul>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className='carousel-img2'></div>
        <Carousel.Caption>
          <h3>Tanzania: land of safaris, nature, culture and wildlife.</h3>
          <p>A Tanzania vacation is the ultimate once-in-a-lifetime holiday! Tanzania is a top safari destination and has so much to offer.</p>
          <button>Book a tour</button>
          <ul>
            <li><BsCheckCircle /> 100% specialized in Tanzania</li>
            <li><BsCheckCircle /> World class safari guides</li>
            <li><BsCheckCircle /> Private safaris</li>
          </ul>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className='carousel-img3'></div>
        <Carousel.Caption>
          <h3>Tanzania: land of safaris, nature, culture and wildlife.</h3>
          <p>A Tanzania vacation is the ultimate once-in-a-lifetime holiday! Tanzania is a top safari destination and has so much to offer.</p>
          <button>Book a tour</button>
          <ul>
            <li><BsCheckCircle /> 100% specialized in Tanzania</li>
            <li><BsCheckCircle /> World class safari guides</li>
            <li><BsCheckCircle /> Private safaris</li>
          </ul>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;