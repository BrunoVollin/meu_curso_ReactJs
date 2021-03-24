import React from "react";
import { CardImg, CardText, Wrapper } from "../Card/style";
import ImgComponent from "../../Img/component_img.png";

const Card = ({text, img}) => {
  return <Wrapper>
    <CardImg src={img}/>
    <CardText>{text}</CardText>
  </Wrapper>;
};

export default Card;
