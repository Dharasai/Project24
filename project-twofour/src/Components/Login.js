

import React ,{ useState }from 'react'
import { Button, InputLabel ,Input, Card } from '@material-ui/core';
import {data} from './UserData';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    // const [user ,setUser] = useState({email: "" , password: ""})

    

    const[email, setEmail] = useState("");
    const[password, setPassword] = useState();
    const[error, setError] = useState('');
    const[err, setErr] = useState(false);

    const navigate = useNavigate();
    
  // const mailData = () =>{
  //   data.map((item)=)
  // }

   const submitHandler = (e) =>{
     e.preventDefault();
    if(email=== "" || password === ""){
        setErr(true)
        setError("Please enter valid details")
    }else if(email=== data.email && password=== data.password){
      navigate('/homebanner')
    }else{
        setErr(false)
        setError('')
    }
    }
   

 const input_sty ={
   borderRadius:"2px",
  
 }
 const input_label_sty ={
  color:"#111211"
 }

  return (
    <div style={{marginTop:"15px"}}>
      <Card style={{backgroundColor: "#91a191", width:"320px", marginBottom:"10px"}}>
        <center>
            <h2>LOGIN PAGE</h2>
       
      <form>
          <InputLabel style={input_label_sty} htmlFor="">Email </InputLabel>
          <br />
          <Input style={input_sty} type="email" value ={email} onChange ={(e)=> setEmail(e.target.value) }/>
          <br /><br />
          <InputLabel style={input_label_sty} htmlFor="">Password </InputLabel>
          <br />
          <Input 
          style={input_sty}
          type="password" 
          name="password" 
          value ={password} 
          onChange ={(e)=> setPassword(e.target.value) }  />
          <br /><br />
          <Button 
          style={{marginBottom:"15px"}}
          type="submit"
          variant="contained" 
          color="primary"
           onClick ={submitHandler}>
          Login
          </Button>
          <br/>
          {err && <p>{error}</p>}
      </form>
      </center>
      </Card>
    </div>
  )
}

export default Login
