import {createGlobalStyle} from "styled-components"
import {normalize} from "styled-normalize"
import {theme} from "./theme"

export const GlobalStyle = createGlobalStyle`
${normalize}
::-webkit-scrollbar {
   display: none;
}

html {
   font-size: 10px;
   user-select: none;
   box-sizing: border-box;
}

body {
   height: 100vh;
   display: flex;
   -webkit-box-align: center;
   align-items: center;
   -webkit-box-pack: center;
   justify-content: center;
   font-family: 'NotoSansKRRegular', sans-serif;
   margin: 0px;
 
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;

   #root{
      width: 100%;
   }
 }
 
 
 code {
   font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
     monospace;
 }

button{
   width: auto;
   background: none;
   border: none;
   cursor: pointer;
   &:focus{
      outline: none;
   }
}

input{
   &:focus{
      outline: none;
   }
}

a{
   color: white;
   text-decoration: none;
   &:focus{
      color: white;
   }
   &:active{
      color: white;
   }

   &:hover{
      color: ${theme.colors.mint};
      transition: color 0.3s ease-out;
   }

}
`
