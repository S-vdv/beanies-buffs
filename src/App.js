import React, { Component } from "react";
import Header from "./components/header";
import Navbar from "./components/navbar";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
		box-sizing: border-box;
    margin: 0;
		paddin: 0;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

`;

class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        <Header />
        <Navbar />
      </div>
    );
  }
}

export default App;
