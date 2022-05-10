import React from 'react'
// import banner from '../Assets/Images/mens_banner.webp'
import banner from '../Assets/Images/grocery_banner.jpg'




const Banner = () => {

    const banner_sty ={
        width:"1320px",
        height:"600px"
    }
  return (
      <>
    <div>
      <img src={banner} alt="banner" style={banner_sty}/>
    </div>
    <div style={{height:"170px", backgroundColor:"#e3e2e1"}}>
        <h1 style={{padding:"19px", fontSize:"60px"}}>BEST OUTFITS EVER</h1>
        <h3>GET PERFECT OUTFIT FOR YOUR SOULMATE</h3>
    </div>
    </>
  )
}

export default Banner

