import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  h4 {
    margin: 10px;
  }
  img {
    height: 50px;
  }
  .home {
    color: #e42c64;
    top: 10px;
    padding: 10px;
    font-size: 30px;
    text-decoration: none;
  }
  .university {
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    justify-items: center;
    border: 4px solid #f2317f;
    position: relative;
    &::before,
    &::after {
      content: "";
      position: absolute;
      width: 14px;
      height: 4px;
      background: white;
      transform: skewX(50deg);
      transition: 0.4s linear;
    }

    &::before {
      top: -4px;
      left: 10%;
    }
    &::after {
      bottom: -4px;
      right: 10%;
    }
    &:hover::before {
      left: 80%;
    }
    &:hover::after {
      right: 80%;
    }
  }
  .year {
    margin-top: 0;
    padding-top: 10px;
  }
`;
const Box = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  margin: 30px;
  grid-gap: 30px;
  @media (max-width: 650px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
`;
class Education extends Component {
  render() {
    return (
      <Wrapper>
        <div>
          <Link to="/" className="home">
            <img src="homeIcon.png" />
          </Link>
        </div>
        <Box>
          <div className="university">
            <h4 className="year">2019.09~2020.04</h4>
            <img src="conco.jpg"></img>
            <h3>Concordia University</h3>
            <h4>Coding bootcamp</h4>
          </div>

          <div className="university">
            <h4 className="year">2017.01~2019.08</h4>
            <img src="korea.jpg"></img>
            <h3>Korea Cyber University</h3>
            <h4>Bachelor of Software Engineering</h4>
          </div>

          <div className="university">
            <h4 className="year">2015.08~2016.10</h4>
            <img src="aviron.jpg"></img>
            <h3>Aviron Technical Institute</h3>
            <h4>DEP in industrial Drafting</h4>
          </div>

          <div className="university">
            <h4 className="year">1995.03~2002.02</h4>
            <img src="CBNU(KOR).JPG"></img>
            <h3>Chonbuk National University</h3>
            <h4>Bachelor of Chemical Engineering</h4>
          </div>
        </Box>
      </Wrapper>
    );
  }
}

export default Education;
