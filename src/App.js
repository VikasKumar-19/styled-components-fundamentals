import React from 'react'
import { StyledButton, FancyButton, SubmitButton, AnimatedButton, DarkButton } from './components/button1.style'
import { ThemeProvider, createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => (props.whiteColor ? 'darkgoldenrod' : 'black')};
  }
`

const App = () => {

  const theme = {
    dark:{
      primary: "black",
      text: "white"
    },
    light:{
      primary: "white", 
      text: "black"
    }
  }

  

  return (
    // this theme can be accessed by all child components by using context api
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <div>App</div>
        {/* <button>Click Me</button> */}
        <StyledButton type='submit'>Normal Styled Button</StyledButton>
        <div>################################</div>
        <StyledButton type='button' variant="outlined">Styled Button</StyledButton>
        {/* polymorphic prop is passed so that it will act as an anchor element */}
        <FancyButton as='a' >Fancy Button</FancyButton>
        <div>Below is the type example on creation by passing props</div>
        <SubmitButton variant="normal">Submit</SubmitButton>
        <div>animated button is below</div>
        <AnimatedButton>Animated Button</AnimatedButton>

        {/* styled component has full theming support by exporting theming provider wrapper component */}

        <DarkButton>Dark theme</DarkButton>
      </>
    </ThemeProvider>
  )
}

export default App