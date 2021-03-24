import React from "react";
import Card from "../Card";
import { H2, ListCard, Wrapper } from "./styles";

import ImgComponent from "../../Img/component_img.png";
import ImgProps from "../../Img/props_img.png";
import ImgState from "../../Img/state_img.png";

const Body = () => {
  return (
    <Wrapper>
      <H2>No Curso Vamos Aprender Sobre</H2>
      <ListCard>
        <Card img={ImgComponent} text="Componentes"/>
        <Card img={ImgProps} text="Props"/>
        <Card img={ImgState} text="State"/>
      </ListCard>
    </Wrapper>
  );
};

export default Body;
