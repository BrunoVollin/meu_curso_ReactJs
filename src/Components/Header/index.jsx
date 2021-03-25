import React from "react";
import profile from "../../Img/profile.png";
import ThemeButton from "../ThemeButton";
import {
  Emphasis,
  EmphasisName,
  H1,
  H2,
  ProfileImg,
  Wrapper,
  Text,
  Line,
  Button,
} from "./styles";

const Header = ({toggleTheme}) => {
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
        <Button onClick={toggleTheme}>
          <ThemeButton />
        </Button>
      </Wrapper>
      <Line />
    </>
  );
};

export default Header;
