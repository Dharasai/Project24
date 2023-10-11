import React, { useState, useEffect } from 'react'

import Tshirtsbanner from '../Assets/Images/tshirts_banner.jpg'
import Modalbox from './Modalbox'
import { useDispatch, connect } from 'react-redux'
import { addCard, removeCard } from './tshirtsSlice';
import { Card, Button, Form } from 'react-bootstrap'

const Tshirts = (props) => {


  const dispatch = useDispatch();
  const [userName, setUsername] = useState('');
  const [modalbox, setModalbox] = useState(false);
  const [cardimage, setCardimage] = useState('')

  const banner_sty = {
    width: "1320px",
    height: "600px"
  }


  const addHandler = () => {
    dispatch(addCard({
      id: props.data.length === 0 ? 1 : props.data[props.data.length - 1].id + 1,
      name: userName,
    }));
    setUsername('')
  }

  const removeHandler = (id) => {
    const removedata = props.data.filter(item => item.id != id)
    dispatch(removeCard(removedata))
  }

  const modalHandler = (img) => {
    const cardimg = img;
    setCardimage(cardimg);
    setModalbox(true);
  }
  useEffect(() => {
    console.log("props message tshirts", props.data.length)
  }, [props])



  return (
    <>
      <center>
        <div>
          <img src={Tshirtsbanner} alt="tshirts" style={banner_sty} />

        </div>
        <div style={{width: "300px"}}>
          {/* <input type="text" placeholder='username..' value={userName}
            onChange={(e) => setUsername(e.target.value)}
          /> */}
          <br />
          < Form.Control type="url" placeholder='user name' value={userName} onChange={(e) => {
            setUsername(e.target.value)
          }} />
          <br />
          <Button variant="success"
          style={{ marginTop:"5px" }}
            onClick={() => addHandler()}
          >
            ADD
          </Button>
         
          {props.data.map((item) =>
            <>
              <Card style={{ width: '18rem', marginTop:"5px" }}>
                <Card.Img variant="top" src={item.name} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    <p key={item.id}>{item.name}</p>
                  </Card.Text>
                  <Button variant="secondary"
                    onClick={() => modalHandler(item.name)}
                  >VIEW</Button>
                  <Button variant="danger"
                    onClick={() => removeHandler(item.id)}
                  >DELETE</Button>

                </Card.Body>
              </Card>
             
            </>
          )
          }
        </div>
        <div>
                {modalbox && <Modalbox closebtn={setModalbox} img={cardimage} />}
              </div>
      </center>

    </>
  )
}
const mapStateToProps = (state) => {
  return {
    data: state.tshirt.value
  }
}

export default connect(mapStateToProps)(Tshirts)
