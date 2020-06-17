import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import '../styles/footer.css'
import logo from './icons/logo_white.png'

const Footer = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="footer-head">
        <MDBRow>
          <MDBCol md="6">
          </MDBCol>
          <MDBCol md="6">
            <p className="addr_head">Address :</p>
            <p className="addr"> JP Nagar 8th Phase, Bangalore.</p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="foot">
        <MDBContainer  className="foot_" fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"></a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;