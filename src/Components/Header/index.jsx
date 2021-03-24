import React from "react";
import profile from "../../Img/profile.png";
import {
  Emphasis,
  EmphasisName,
  H1,
  H2,
  ProfileImg,
  Wrapper,
  Text,
  Line,
} from "./styles";

const Header = () => {
  return (
    <>
      <Wrapper>
        <ProfileImg src={profile}></ProfileImg>
        <Text>
          <H1>
            Bem Vindo ao <br /> Curso <Emphasis>React Fundamentos</Emphasis>
          </H1>
          <H2>
            Meu nome é <EmphasisName>Bruno Almeida</EmphasisName>
          </H2>
        </Text>
      </Wrapper>
      <Line />
    </>
  );
};

export default Header;
