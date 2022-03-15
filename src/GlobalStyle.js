import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style : none;
    font-family: 'Nunito', sans-serif;
    text-decoration: none;

}
body{
    background: #e5e5e5;
    color: white;
}

a{
    color:inherit;
}

`;

export default GlobalStyle;
