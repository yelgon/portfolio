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
      </Wrapper>
    );
  }
}
export default Experience;
