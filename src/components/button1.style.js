import styled, {keyframes} from 'styled-components'

export const StyledButton = styled.button`
border-radius: 20px;
border: 2px solid darkcyan;
background-color: ${(props)=> props.variant === 'outlined'?'#fff': 'darkcyan'};
color: ${(props)=> props.variant === 'outlined'? 'darkcyan': '#fff'};
padding: 15px 35px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;
cursor: pointer;
transition: 0.5s all ease-out;
&:hover{
  background-color: ${(props)=> props.variant !== 'outlined'?'#fff': 'darkcyan'};
color: ${(props)=> props.variant !== 'outlined'? 'darkcyan': '#fff'};
}
`

// we have extended the styles of previous button into the fancy button
// extending an existing component's styles -> ways : 1) using props   2) using 
export const FancyButton = styled(StyledButton)`
background-image: linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1));
border: none;
`


// giving type on creating a styled button using attrs constructor, it can receive object(for giving type) or a function(for access props) as an argument 
export const SubmitButton = styled(StyledButton).attrs((props)=>{
  if(props.variant === "submit"){
    return{
      type: "submit"
    }
  }
  else{
    return{
      type: "button"
    }
  }
})`
background-color: darkgoldenrod;
color: cornflowerblue;
`

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to{
    transform: rotate(360deg);
  }
`

export const AnimatedButton = styled(StyledButton)`
background-color: orange;
color: purple;
border: none;
animation: ${rotate} infinite 2s linear;
`

export const DarkButton = styled(StyledButton)`
  background-color: ${(props)=> props.theme.dark.primary};
  color: ${(props)=>props.theme.dark.text}
`