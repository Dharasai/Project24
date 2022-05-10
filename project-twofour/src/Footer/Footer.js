import React from 'react'


import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TelegramIcon from "@material-ui/icons/Telegram";



const list_sty = {
  listStyleType: "none",
  marginTop: "30px"
}
const ancor_sty = {
  textDecoration: "none"
}

const Footer = () => {
  return (
    <div style={{ height: "50px", backgroundColor: "#e3e2e1", marginTop: "10px" }}>
      <center>
        <div className="footer-dark">
          <footer>
            <div className="container">
              <div className="row">
                <div className="col-sm-6 col-md-3 item">
                  <h3 style={{ marginTop: "5px" }}>Services</h3>
                  <ul style={list_sty}>
                    <li className=''>
                      <a href="#e1" style={ancor_sty}>Web design</a>
                    </li>
                    <li style={{ textDecoration: "none" }}>
                      <a href="#e2" style={ancor_sty}>Development</a>
                    </li>
                    <li>
                      <a href="#e3" style={ancor_sty}>Hosting</a>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-6 col-md-3 item">
                  <h3 style={{ marginTop: "5px" }}>About</h3>
                  <ul style={list_sty}>
                    <li>
                      <a href="#vc" style={ancor_sty}>Company</a>
                    </li>
                    <li>
                      <a href="#cb" style={ancor_sty}>Team</a>
                    </li>
                    <li>
                      <a href="#sfgs" style={ancor_sty}>Careers</a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-6 item text">
                  <h3 style={{ marginTop: "5px" }}>Company Name</h3>
                  <p id="footer_font" style={{ marginTop: "30px" }}>
                    Praesent sed lobortis mi. Suspendisse vel placerat ligula.
                    Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam
                    quis tristique lectus. Aliquam in arcu eget velit pulvinar
                    dictum vel in justo.
                  </p>
                </div>
                <div className="col item social ">
                  <a href="#gd" style={ancor_sty}>
                    <FacebookIcon />
                  </a>
                  <a href="#dhd" style={ancor_sty}>
                    <InstagramIcon />
                  </a>
                  <a href="#jft" style={ancor_sty}>
                    <TelegramIcon />
                  </a>
                  <a href="#sg" style={ancor_sty}>
                    <TwitterIcon />
                  </a>
                  <a href="#kyf" style={ancor_sty}>
                    <LinkedInIcon />
                  </a>
                </div>
              </div>
              <p className="copyright text-center mt-5" id="footer_font">
                MeVik mart © 2022, all rights reserved
              </p>
            </div>
          </footer>
        </div>
      </center>
    </div>
  )
}

export default Footer
