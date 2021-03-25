import React from "react";
import Body from "../Body";
import Header from "../Header";
import { Wrapper } from "./style"

const Main = ( {toggleTheme} ) => {
  return (
    <Wrapper>
      <Header toggleTheme={toggleTheme} />
      <Body />
    </ Wrapper>
  );
};

export default Main;
