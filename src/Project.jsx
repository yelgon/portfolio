import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
  color: black;
  img {
    height: 50px;
  }

  .home {
    color: #037365;
    top: 10px;
    padding: 10px;
    font-size: 30px;
    text-decoration: none;
  }
`;
const Box = styled.div`
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
  display: grid;
  position: relative;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  row-gap: 10px;
  margin-left: 50px;
  margin-right: 50px;
  margin-bottom: 10px;
  margin-top: 10px;
  align-items: center;
  border: 5px solid #037365;
  .contents1 {
    margin-left: 10px;
    div {
      padding: 5px;
    }
  }
`;
const Box2 = styled.div`
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
  display: grid;
  position: relative;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  row-gap: 10px;
  margin-left: 50px;
  margin-right: 50px;
  align-items: center;
  justify-items: right;
  border: 5px solid #037365;
  .contents2 {
    margin-left: 10px;
    div {
      padding: 5px;
    }
  }
`;

class Project extends Component {
  render() {
    return (
      <Wrapper>
        <Link to="/" className="home">
          <img src="homeIcon.png" />
        </Link>
        <Box>
          <div className="video1">
            <iframe
              src={"https://www.youtube.com/embed/gAIXxkBLx7A"}
              width="640"
              height="360"
              frameBorder="0"
            />
          </div>
          <div className="contents1">
            <h2>Market Place</h2>
            <div>
              <div> React/Redux</div>
              <div> Styled-component</div>
              <div> Express</div>
              <div> JavaScript</div>
              <div> MongoDB</div>
              <div> Cookie</div>
              <div>
                <a href="https://github.com/yelgon/fullstack-project-1">CODE</a>
              </div>
            </div>
          </div>
        </Box>
        <Box2>
          <div className="contents2">
            <h2>Social App</h2>
            <div>
              <div> React/Redux</div>
              <div> react-3d-cube</div>
              <div> Styled-component</div>
              <div> Express</div>
              <div> JavaScript</div>
              <div> MongoDB</div>
              <div> Cookie</div>
              <div> Google API</div>
              <div> Facebook API</div>
              <div>
                <a href="https://github.com/yelgon/tennis-buddy-finder">CODE</a>
              </div>
            </div>
          </div>

          <div className="video2">
            <iframe
              src={"https://www.youtube.com/embed/XW2oU8SB5gM"}
              width="640"
              height="360"
              frameBorder="0"
            />
          </div>
        </Box2>
      </Wrapper>
    );
  }
}

export default Project;
