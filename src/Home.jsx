import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Menu = styled.div`
  position: absolute;
  left: 30%;
  right: 30%;
  top: 25%;
  max-width: 800px;
  min-width: 500px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    "side project"
    "side education"
    "side experience";
  grid-gap: 20px;
  .btn {
    display: flex;
    text-decoration: none;
    border: 4px solid;
    color: #037365;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 16px;
    align-items: center;
    justify-content: center;
    position: relative;
    min-height: 50px;
    min-width: 150px;
  }
  .project {
    grid-area: project;
  }
  .education {
    color: #f2317f;
    grid-area: education;
  }
  .experience {
    color: #20366b;
    grid-area: experience;
  }
  .btn::before,
  .btn::after {
    content: "";
    position: absolute;
    width: 14px;
    height: 4px;
    background: white;
    transform: skewX(50deg);
    transition: 0.4s linear;
  }
  .btn::before {
    top: -4px;
    left: 10%;
  }
  .btn::after {
    bottom: -4px;
    right: 10%;
  }
  .btn:hover::before {
    left: 80%;
  }
  .btn:hover::after {
    right: 80%;
  }
  .name {
    border: 4px solid;
    color: black;
    position: relative;
    grid-area: side;
    padding: 10px;
    min-width: 350px;
  }
  .name::before,
  .name::after {
    content: "";
    position: absolute;
    width: 14px;
    height: 4px;
    background: white;
    transform: skewX(50deg);
    transition: 0.4s linear;
  }
  .name::before {
    top: -4px;
    left: 10%;
  }
  .name::after {
    bottom: -4px;
    right: 10%;
  }
  .name:hover::before {
    left: 80%;
  }
  .name:hover::after {
    right: 80%;
  }
  .title {
    min-height: 250px;
  }
  @media (max-width: 650px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-template-areas:
      "side"
      "project"
      "education"
      "experience";
    left: 5%;
    .title {
      min-height: 50px;
    }
  }
`;

class Home extends Component {
  render() {
    return (
      <Menu>
        <div className="name">
          <div
            className="title"
            style={{
              fontSize: "25px",
              fontWeight: "bold",
              padding: "20px",
            }}
          >
            Yangoh Kim
            <h3
              style={{
                textAlign: "center",
              }}
            >
              Full Stack Developer
            </h3>
          </div>
          <div
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              textAlign: "right",
              padding: "10px",
            }}
          >
            <div>yelgon36@gmail.com</div>
            <div>438-926-2922</div>
          </div>
        </div>
        <div className="btn project">
          <Link
            to="/project"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            Project
          </Link>
        </div>
        <div className="btn education">
          <Link
            to="/education"
            style={{
              color: "inherit",
              textDecoration: "inherit",
            }}
          >
            education
          </Link>
        </div>
        <div className="btn experience">
          <Link
            to="/Experience"
            style={{
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Experience
          </Link>
        </div>
      </Menu>
    );
  }
}

export default Home;
