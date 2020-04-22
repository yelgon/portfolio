import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  img {
    height: 100px;
  }
  .home {
    color: #20366b;
    top: 10px;
    padding: 10px;
    font-size: 30px;
    text-decoration: none;
  }
  .work {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
    align-items: center;
    justify-items: center;
    border: 4px solid #20366b;
    position: relative;
    margin: 10px;
    height: 250px;
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
    li {
      padding: 5px;
    }
    @media (max-width: 650px) {
      grid-template-columns: 1fr;
      grid-template-rows: auto;
      min-height: 300px;
    }
  }
`;
class Experience extends Component {
  render() {
    return (
      <Wrapper>
        <div>
          <Link to="/" className="home">
            Home
          </Link>
        </div>
        <div className="work">
          <h2>Industrial Draftman</h2>
          <h4>2016.12-2020.04</h4>
          <h3>Mr.Roller ( Montreal )</h3>
          <div>
            <ul>
              <li>Mechanical design using AutoCAD and ProE</li>
            </ul>
          </div>
        </div>
        <div className="work">
          <h2>Math Teacher</h2>
          <h4>2011.01-2015.01</h4>
          <h3>Gubei Academy ( Shanghai, China )</h3>
          <div>
            <ul>
              <li>Teaching Math ( Calculus 1,2 and Linear Algebra )</li>
              <li>Supporting communication between teacher and parents</li>
            </ul>
          </div>
        </div>
        <div className="work">
          <h2>Team Leader in Math department </h2>
          <h4>2006.02-2012.03</h4>
          <h3>RootM ( Seoul, S.Korea )</h3>
          <div>
            <ul>
              <li>Teaching Math ( Calculus 1,2 and Geometry )</li>
              <li>Training how to teach Math for other teachers </li>
            </ul>
          </div>
        </div>
      </Wrapper>
    );
  }
}
export default Experience;
