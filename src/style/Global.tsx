import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved


const GlobalStyle = createGlobalStyle`
  * {
      font-family: "Google Sans", sans-serif;
  }
  body {


    img {
      height: auto;
      max-width: 100%;
    }
  }
  .gray{color: #8e8d95 !important}



  .navlogo{
    margin:30px auto;
    display:block
  }
`

export default GlobalStyle
