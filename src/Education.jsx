import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  background: #f0d879;

  h4 {
    margin: 10px;
  }
  img {
    height: 50px;
    margin: 10px;
  }
  .home {
    position: absolute;
    color: #e42c64;
    bottom: 0;
    right: 0;
    padding: 20px;
    font-size: 30px;
    text-decoration: none;
    font-family: cursive;
  }
  .university {
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    justify-items: center;
  }
  .year {
    border-top: 1px solid black;
    margin-top: 0;
  }
`;
class Education extends Component {
  render() {
    return (
      <Wrapper>
        <div>
          <Link to="/" className="home">
            Home
          </Link>
        </div>
        <h4 className="year">2019.09~2020.04</h4>
        <div className="university">
          <img src="concordia.png"></img>
          <h3>Concordia University</h3>
          <h4>Coding bootcamp</h4>
        </div>

        <h4 className="year">2017.01~2019.08</h4>
        <div className="university">
          <img src="Korea cyber logo.png"></img>
          <h3>Korea Cyber University</h3>
          <h4>Bachelor of Software Engineering</h4>
        </div>

        <h4 className="year">2015.08~2016.10</h4>
        <div className="university">
          <img src="aviron.jpg"></img>
          <h3>Aviron Technical Institute</h3>
          <h4>DEP in industrial Drafting</h4>
        </div>

        <h4 className="year">1995.03~2002.02</h4>
        <div className="university">
          <img src="CBNU(KOR).JPG"></img>
          <h3>Chonbuk National University</h3>
          <h4>Bachelor of Chemical Engineering</h4>
        </div>
      </Wrapper>
    );
  }
}

export default Education;
