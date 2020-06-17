import React from "react";
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn } from "mdbreact";
import '../styles/team.css';
import Topic from './Topic';
import ceo from './icons/resizedceo.jpg';
import cto from './icons/resizedcto.jpg';
import sourab from './icons/resizedsourab.jpg';



const Team = () => {
  return (
    <MDBCard className="my-5 px-1 pb-5 text-center">
        <Topic text="The Team"/>
        <MDBCardBody>
          <MDBRow>
            <MDBCol md="4" className="mb-md-0 mb-5">
              <img
                tag="img"
                src={ceo}
                className="team_img"
                alt="Sample avatar"
              />
              <h4 className="name">
                Venkatesh Tata
              </h4>
              {/* <h6 className="role">CEO & Deep Learning Engineer</h6> */}
              <MDBBtn tag="a" floating size="sm" className="mx-1 mb-0 btn-fb">
                <MDBIcon fab icon="facebook-f" />
              </MDBBtn>
              <MDBBtn
                tag="a"
                floating
                size="sm"
                className="mx-1 mb-0 btn-dribbble"
              >
                <MDBIcon fab icon="dribbble" />
              </MDBBtn>
              <MDBBtn tag="a" floating size="sm" className="mx-1 mb-0 btn-tw">
                <MDBIcon fab icon="twitter" />
              </MDBBtn>
            </MDBCol>

            <MDBCol md="4" className="mb-md-0 mb-5">
              <img
                tag="img"
                src={cto}
                className="team_img"
                alt="Sample avatar"
              />
              <h4 className="name">Basavaraj PN</h4>
              {/* <h6 className="role">
                CTO & Electronics Engineer
              </h6> */}
              <MDBBtn
                tag="a"
                floating
                size="sm"
                className="mx-1 mb-0 btn-email"
              >
                <MDBIcon icon="envelope" />
              </MDBBtn>
              <MDBBtn tag="a" floating size="sm" className="mx-1 mb-0 btn-fb">
                <MDBIcon fab icon="facebook-f" />
              </MDBBtn>
              <MDBBtn tag="a" floating size="sm" className="mx-1 mb-0 btn-git">
                <MDBIcon fab icon="github" />
              </MDBBtn>
            </MDBCol>

            <MDBCol md="4" className="mb-md-0 mb-5">
              <img
                tag="img"
                src={sourab}
                className="team_img"
                alt="Sample avatar"
              />
              <h4 className="name">
                Sourab M
              </h4>
              {/* <h6 className="role">Electronics and Machine Vision Engineer</h6> */}
              <MDBBtn tag="a" floating size="sm" className="mx-1 mb-0 btn-li">
                <MDBIcon fab icon="linkedin-in" />
              </MDBBtn>
              <MDBBtn tag="a" floating size="sm" className="mx-1 mb-0 btn-tw">
                <MDBIcon fab icon="twitter" />
              </MDBBtn>
              <MDBBtn tag="a" floating size="sm" className="mx-1 mb-0 btn-pin">
                <MDBIcon fab icon="pinterest" />
              </MDBBtn>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
  );
}

export default Team;