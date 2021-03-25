import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import light from "./Styles/themes/light";
import dark from "./Styles/themes/dark";

import GlobalStyle from "./Styles/GlobalStyle";
import Main from "./Components/Main";
import { Wrapper } from "./App.styles";

function App() {
  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light)
  }
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <GlobalStyle />
        <Main toggleTheme={toggleTheme} />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
