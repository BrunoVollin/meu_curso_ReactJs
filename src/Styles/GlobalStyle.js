import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: var(--white);
}
html,
body,
#root {
  max-height: 100vh;
  max-width: 100vw;
  width: 100%;
  height: 100%;
}
*,
button,
input {
  border: 0;
  background: none;
}
html {
  background: var(--primary);
}

& {
  width: 100vw;
  height: 100vh;
  background-color: var(--background);

  display: flex;
  justify-content: center;
  align-items: center;

}

:root {
  --primary: ${props => props.theme.colors.primary};
  --secondary: ${props => props.theme.colors.secondary};
  --third: ${props => props.theme.colors.third};
  --emphasis:  ${props => props.theme.colors.emphasis};
  --background: ${props => props.theme.colors.background};
}
`;
