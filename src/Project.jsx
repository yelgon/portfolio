import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
  background: #bbded6;
  color: black;

  div {
    padding: 5px;
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
`;
const Box = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  row-gap: 10px;
  margin-left: 50px;
  margin-right: 50px;
  align-items: center;
`;
const Box2 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  row-gap: 10px;
  margin-left: 50px;
  margin-right: 50px;
  align-items: center;
  justify-items: right;
`;

class Project extends Component {
  render() {
    return (
      <Wrapper>
        <Link to="/" className="home">
          Home
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
