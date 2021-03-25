import React, { useContext } from "react";
import { ThemeContext } from "styled-components";

const ThemeButton = () => {
  const {colors} = useContext(ThemeContext);

  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 0C4.03 0 0 4.03 0 9C0 13.97 4.03 18 9 18C13.97 18 18 13.97 18 9C18 8.54 17.96 8.08 17.9 7.64C16.92 9.01 15.32 9.9 13.5 9.9C10.52 9.9 8.1 7.48 8.1 4.5C8.1 2.69 8.99 1.08 10.36 0.0999999C9.92 0.0399999 9.46 0 9 0Z"
        fill={colors.secondary}
      />
    </svg>
  );
};

export default ThemeButton;
