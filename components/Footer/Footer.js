import React from "react";
import Link from "next/dist/client/link";
import { colors } from "@material-ui/core";



export default function Footer() {
  return (
    <div>
      <footer
        className="pt-7 pb-2"
        style={{ backgroundImage: "url(/images/background_pattern.webp)" }}
      >
        <div className="footer-upper pb-0">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-5 col-sm-12 pe-4 mb-2">
                <div className="footer-about">
                <h3 className="white">Company Name</h3>
        <p className="white">Description of any product or motto of the company.</p>
                  <br />
                  <br />

                  
                </div>
              </div>

              <div className="container col-lg-8 col-md-7 d-flex p-0">
                <div className="col-lg-4 col-sm-6 ">
                  <div className="footer-links">
                    <h3 className="white">Quick links</h3>
                    <ul>
                      <li>
                        <Link href="/about">
                          <a>About Us</a>
                        </Link>
                      </li>

                      <li>
                        {" "}
                        
                          <a>Privacy Policy</a>
                       
                      </li>
                      <li>
                        {" "}
                        
                          <a>Terms &amp; Conditions</a>
                     
                      </li>
                      <li>
                        {" "}
                      
                          <a>Cancellation Policy</a>
                      
                      </li>
                     
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6" >
                  <div className="footer-links">
                    <h3 className="white">Service list</h3>
                    <ul className="mb-1">

                      <li>
                        
                          <a>Software Developer</a>
                       
                      </li>

                      <li>                      
                          <a>Graphic Designer</a>                      
                      </li>
                      <li>
                       
                          <a>Android Developer</a>
                      </li>
                      <li>
                      <a>Data Scientist</a>
                      </li>
                  
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6" >
                  <div className="footer-links">
                    <h3 className="white">Contact us</h3>
                    <ul className="mb-1">

                    <li><i class="fa fa-map-marker" aria-hidden="true"></i>XYZ, abc</li>
          <li><i class="fa fa-phone" aria-hidden="true"></i>123456789</li>
          <li><i class="fa fa-envelope" aria-hidden="true"></i>xyz@gmail.com</li>

                    </ul>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="footer-copyright">
          <div className="container">
            <div className="copyright-inner rounded p-3 d-md-flex align-items-center justify-content-between">
           

              <div className="copyright-text">
                <div className="m-0 white">
                  2023  All rights reserved.
                </div>
              </div>
              <div className="social-links">
                <ul>
                  <li>
                    <a
                      href="https://www.facebook.com"
                      target="_blank"
                      className="white"
                    >
                      <i className="fab fa-facebook" aria-hidden="true"></i>
                    </a>
                  </li>
                  &nbsp;
            
                  <li>
                    <a
                      href="https://www.instagram.com"
                      target="_blank"
                      className="white"
                    >
                      <i className="fab fa-instagram" aria-hidden="true"></i>
                    </a>
                  </li>
                  &nbsp;
                  <li>
                    <a
                      href="https://www.linkedin.com/company/81812786"
                      target="_blank"
                      className="white"
                    >
                      <i className="fab fa-linkedin " aria-hidden="true"></i>
                    </a>
                  </li>
                  &nbsp;
                 
                  <li>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      className="white"
                    >
                      <i className="fab fa-twitter" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>



        <div id="particles-js"></div>
      </footer>

      {/* <div id="back-to-top">
        <a href="#"></a>
      </div> */}

      {/* <div class="wrapper">
        <div id="main-div">
          <div id="main-button" class="wave">
            <i class="fas fa-comments"></i>
          </div>
          <Link href="/contact"><button><img src="/images/user-headset-support.png" style={{ height: "15px", marginRight: "5px" }}></img>Free Consultation&nbsp;</button></Link>
          <a href="mailto:info@tripzygo.in" class="telegram-color"><i class="fas fa-envelope"></i></a>
          <a href="https://wa.me/+919988449074" class="whatsapp-color"><i class="fab fa-whatsapp"></i></a>
          <a href="tel: +91 74940-09400" class="messenger-color"><i class="fas fa-phone-alt"></i></a>
          <a href="/contact" class="payment-color"><i class="fas fa-credit-card"></i></a>

        </div>
      </div> */}


    </div >
  );
}
