import React from 'react'

import {Carousel} from 'react-bootstrap'
import shoeBanner from '../Assets/Images/Formal_Shoes_banner.jpg'

import shoeBanner2 from '../Assets/Images/formalshoes.webp'


const Shoes = () => {

  const banner_sty ={
    width:"1320px",
    height:"600px"
}
  return (
    <>
      {/* <div>
          <img src={shoeBanner}  style={banner_sty} alt="" />
      </div> */}
      <Carousel variant="dark">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={shoeBanner}
      style={banner_sty}
      alt="First slide"
    />
    <Carousel.Caption>
      <h5>First slide label</h5>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={shoeBanner2}
      style={banner_sty}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h5>Second slide label</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={shoeBanner}
      style={banner_sty}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h5>Third slide label</h5>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
     
    </>
  )
}

export default Shoes
