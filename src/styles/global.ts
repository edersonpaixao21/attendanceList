import { createGlobalStyle } from 'styled-components'

export const GlobalStyled = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

h1 {
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 700;
}

button, input {
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 400;
}

strong {
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 500;
}

html {
    @media (max-width: 1080px) {
        font-size: 93.75%; //15px
    }

    @media (max-width: 720px) {
        font-size: 87.5%; //14px
    }
 }
`