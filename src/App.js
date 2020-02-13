import React, { Component } from "react";

import Hero from "./Components/Hero";

import "./Styles/app.scss";

class App extends Component {
    constructor() {
        super();
        this.state = {
          cityNames: [],
          suggestions: [],
          text: "",
          locationData: []
        };
      }

      render() {
          return (
              <div className="container">
                  <Hero />
              </div>
          );
      }
}

export default App;