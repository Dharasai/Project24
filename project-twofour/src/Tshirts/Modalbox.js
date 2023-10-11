


import React from 'react'
import { Card, Button } from 'react-bootstrap'

import {useNavigate} from "react-router-dom"


const Modalbox = ({ closebtn, img }) => {

  const navigate = useNavigate();


  return (
    <>
      <div className='Modal_box' style={{ marginTop: "10px" }}>
        <div className='Modal_box_content'>
          <Card style={{ border: "2px solid black", width: "400px", height: "auto" }}>
            <div>
              <Button
                className='Modal_box_closebtn'
                style={{ marginLeft: "300px", marginTop: "30px", borderRadius: "35px" }}
                variant="danger"
                onClick={() => closebtn(false)}
              >X</Button>
            </div>
            <Card.Img variant="top" src={img} />
            <Card.Title>
              NEW CARS
            </Card.Title>
            <Card.Text>
              Get 25% of on Skoda cars
            </Card.Text>
            <div>
              <Button
                className='Modal_box_closebtn'
                style={{ marginLeft: "10px" }}
              >Add to Cart</Button>
              <Button className='Modal_box_closebtn' onClick={()=>navigate("/shoes")} style={{ marginLeft: "10px" }}>BUY NOW</Button>
            </div>
          </Card>
        </div>
      </div>
    </>
  )
}

export default Modalbox
