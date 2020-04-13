import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Home from "./Home.jsx";
import Project from "./Project.jsx";
import Experience from "./Experience.jsx";
import Education from "./Education.jsx";
import Contact from "./Contact.jsx";

class App extends Component {
  renderHome = () => {
    return <Home />;
  };
  renderProject = () => {
    return <Project />;
  };
  renderExperience = () => {
    return <Experience />;
  };
  renderEducation = () => {
    return <Education />;
  };
  renderContact = () => {
    return <Contact />;
  };
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact={true} path="/" render={this.renderHome} />
          <Route exact={true} path="/project" render={this.renderProject} />
          <Route
            exact={true}
            path="/experience"
            render={this.renderExperience}
          />
          <Route exact={true} path="/education" render={this.renderEducation} />
          <Route exact={true} path="/contact" render={this.renderContact} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
