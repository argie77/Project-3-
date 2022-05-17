import styled from "styled-components"
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';


//styled components
const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: pink;
   
`

//arrows
const Arrow = styled.div`
width: 50px;
height: 50px;
backgroung-color: blue;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
`

export const Slider = () => {
  return (
    <Container>
        <Arrow>
            <KeyboardDoubleArrowLeftIcon />
        </Arrow>
        <Arrow>
            <KeyboardDoubleArrowRightIcon />
        </Arrow>
    </Container>
  )
}
