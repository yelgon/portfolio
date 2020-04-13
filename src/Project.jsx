import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;
`;

class Project extends Component {
  render() {
    return (
      <Wrapper>
        <Link to="/">Home</Link>
      </Wrapper>
    );
  }
}

export default Project;
