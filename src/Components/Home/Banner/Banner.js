import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
            <Carousel>
  <Carousel.Item interval={1000}>
    <img style={{height:"500px"}}
      className="d-block w-100"
      src="https://stylesatlife.com/wp-content/uploads/2018/05/15-Best-Checks-Shirts-for-Mens-New-Fashion-2019-1.jpg.webp"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 className='text-info fw-bold bg-light'>Menz Collections</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img style={{height:"500px"}}
      className="d-block w-100"
      src="https://i.ytimg.com/vi/vWnoCLqpYr0/maxresdefault.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3 className='text-info fw-bold bg-light'>Ladies Collection</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img style={{height:"500px"}}
      className="d-block w-100"
      src="https://kidsbaron.com/wp-content/uploads/2018/06/kids-clothes-online-India.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3 className='text-info fw-bold bg-light'>Kids Collections</h3>
     
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;