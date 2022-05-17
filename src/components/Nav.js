//import { Search } from '@material-ui/icons/';
import React from 'react'
import styled from 'styled-components';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import ManageSearch from '@mui/icons-material/ManageSearch';
import { Badge } from '@mui/material';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

//STYLED COMPONENTS (react) (like css)
const Container = styled.div`
height: 60px;
`

//to have the space on the side of the page
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Left = styled.div`
flex:1;
display:flex;
align-items: center;
`

//the en on the upper left corner
const Language = styled.span`
font-size: 14px;
cursor: pointer;
`

//searchbar
const SearchContainer = styled.div`
border: 1px solid lightgrey;
display:flex;
align-items: center;
margin-left: 25px;
padding: 5px
`

//Register and login 
const Input = styled.input`
`
//Logo
const Center = styled.div`
flex:1;
`
//logo kaimono is inside the center 
const Logo = styled.h1`
font-weight: bold;
text-align: center;
`

//shopping cart
const Right = styled.div`
flex:1;
display: flex;
align-items: center;
justify-content: flex-end;
`

const ProductItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
`


//
const Nav = () => {
  return (
   <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input/>
                 <ManageSearch style={{color:"gray", fontSize:16}} />
                </SearchContainer>
            </Left>
            <Center><Logo>KAIMONO</Logo></Center>
            <Right>
            <ProductItem>REGISTER</ProductItem>
                <ProductItem>LOGIN</ProductItem>
                <ProductItem>
                <Badge badgeContent={2} color="secondary">
        <ShoppingCartCheckoutIcon/>
      </Badge>
                </ProductItem>
            </Right>
            </Wrapper>
    </Container>
  )
}

export default Nav