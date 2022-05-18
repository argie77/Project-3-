import styled from "styled-components"
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { useState } from "react";


//styled components
const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: pink;
    position: relative;
    overflow: hidden;
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
position: absolute;
top: 0;
bottom: 0;
left: ${props=> props.direction == "left" && "10px"};
right: ${props=> props.direction == "right" && "10px"};
margin: auto;
cursor: pointer;
opacity: 0.5;
z-index: 2;
`

const Wrapper = styled.div`
    height: 100%;
    display:flex;
    transform:translateX(0vw)
`

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${props=>props.bg}
`
const ImgContainer = styled.div`
flex:1;
height: 100$;
`

const Image = styled.img`
height: 80%;
`

const InfoContainer = styled.div`
flex:1;
padding: 50ppx;
`

const Title = styled.h1`
font-size: 50px;
`
const Desc = styled.p`
margin:50px 0px;
font-size: 15px
font-weight: 500;
letter-spacing: 3px
`


const Button = styled.button`
padding: 5px;
font-size: 10px;
background-color: transparent;
cursor: pointer;
`

const handleClick = (direction) => {};

export const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);


    
  return (
    <Container>
        <Arrow direction="left" onClick={()=>handleClick("left")}>
            <KeyboardDoubleArrowLeftIcon />
        </Arrow>
        <Wrapper>
            <Slide bg="f5fafd">
            <ImgContainer>
                <Image src="https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg"/>
            </ImgContainer>
            <InfoContainer>
                <Title>SUMMER SALE!</Title>
                <Desc>A LOT OF DISCOUNTED ITEMS!</Desc>
                <Button>SHOP NOW</Button>
            </InfoContainer>
        </Slide>
            <Slide bg="fcf1ed" >
            <ImgContainer>
                <Image src="https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg"/>
            </ImgContainer>
            <InfoContainer>
                <Title>SUMMER SALE!</Title>
                <Desc>A LOT OF DISCOUNTED ITEMS!</Desc>
                <Button>SHOP NOW</Button>
            </InfoContainer>
        </Slide>
            <Slide bg="fbf0f4">
            <ImgContainer>
                <Image src="https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg"/>
            </ImgContainer>
            <InfoContainer>
                <Title>SUMMER SALE!</Title>
                <Desc>A LOT OF DISCOUNTED ITEMS!</Desc>
                <Button>SHOP NOW</Button>
            </InfoContainer>
        </Slide>
        </Wrapper>
        <Arrow direction ="right" onClick={()=>handleClick("right")}>
            <KeyboardDoubleArrowRightIcon />
        </Arrow>
    </Container>
  )
}

export default Slider