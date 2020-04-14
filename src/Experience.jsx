import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  img {
    height: 100px;
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
  .work {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
    align-items: center;
    justify-items: center;
    border: 2px solid black;
    border-radius: 1em;
    margin: 10px;
    height: 250px;
    background: #d4edf4;
    li {
      padding: 5px;
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
