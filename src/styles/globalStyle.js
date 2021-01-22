import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`
:root{
  --color-primary: #e25822;
--color-white: #fff;
--color-black: #000;
--color-black-dark: rgba(var(--color-black), 0.9);
--color-white-dark: rgba(var(--color-white), 0.8);
--color-grey: #777;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  font-size: 62.5%;
}

body {
  box-sizing: border-box;
  font-family: 'Kaushan Script', cursive;
  line-height: 1.1;

}


`;
