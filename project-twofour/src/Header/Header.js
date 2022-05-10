import React from 'react'
import { Avatar } from '@material-ui/core';
import { Container, Row, Col } from 'react-bootstrap';
import Project24 from '../Assets/Images/Project24img.png';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {


  const tabs = ['LOGIN', 'TIMELINE', 'SHIRTS', 'SHOES', 'TSHIRTS', 'COMBOS'];
  const nav_bar_head = {
    backgroundColor: "#e3e8e8",
  }
  const nav_Button = {
    marginRight: "10px",
    paddingRight: "10px",
    marginTop: "35px",
  }
  const avatar_sty = {
    width: "100px",
    height: "100px",
    marginRight: "200px"
  }
  const list_sty = {
    listStyleType: "None",
    textDecoration: "none"
  }

  return (
    <div>
      <Container style={nav_bar_head}>
        <Row>
          <Col lg={4} className='logo_img'>
            <Avatar style={avatar_sty} alt="logo" src={Project24} />
          </Col>
          <Col lg={8} className='nav_items'>
            <ul className='list_group' style={list_sty}>
              {tabs.map((item, ind) =>
                <Link to={`${item.toLocaleLowerCase()}`}>
                  <Button variant="outline-dark" style={nav_Button}>
                    <li style={{ color: "white", textDecoration: "none" }} className='list_item'
                      key={ind}
                    >{`${item} `}</li>

                  </Button>
                </Link>
              )}
            </ul>
          </Col>
        </Row>
      </Container>
    </div>

  )
}

export default Header











{/* <ul className='list_group'>
              {tabs.map((item, ind) =>
               <Link to ={item}>
               <Button variant="outline-dark" style={nav_Button}>
                  <li style={{color:"white", textDecoration:"none"}}className='list_item' 
                  key ={ind}
                  >{`${item} `}</li>
                  
                </Button>
                </Link>
                )}
            </ul> */}


{/* <ul className='list_group' style={list_sty}>
            <Button variant="outline-dark" style={nav_Button}>
            <Link to ="./login">
                  <li style={{color:"white", textDecoration:"none"}}className='list_item'>HOME</li>
                  </Link>
                </Button>
                <Button variant="outline-dark" style={nav_Button}>
            <Link to ="./timeline">
                  <li style={{color:"white", textDecoration:"none"}}className='list_item'>TIMELINE</li>
                  </Link>
                </Button>
                <Button variant="outline-dark" style={nav_Button}>
            <Link to ="./shirts">
                  <li style={{color:"white", textDecoration:"none"}}className='list_item'>SHIRTS</li>
                  </Link>
                </Button>
                <Button variant="outline-dark" style={nav_Button}>
            <Link to ="./shoes">
                  <li style={{color:"white", textDecoration:"none"}}className='list_item'>SHOES</li>
                  </Link>
                </Button>
                <Button variant="outline-dark" style={nav_Button}>
            <Link to ="./goals">
                  <li style={{color:"white", textDecoration:"none"}}className='list_item'>GOALS</li>
                  </Link>
                </Button>

            </ul> */}