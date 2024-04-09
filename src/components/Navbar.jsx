import React from 'react'
import styled from 'styled-components';
import { Search, ShoppingCartOutlined } from '@mui/icons-material'
import { Badge } from '@mui/material';
import {mobile} from "../responsive";

//Styles
const NavContainer = styled.div`
    height:60px;
    ${mobile({height:"50px"})}
`
const Wrapper = styled.div`
    padding:10px 20px;
    display:flex;
    justify-content: space-between;
`
const Left = styled.div`flex:1; display:flex; align-items:center`

const Center = styled.div`flex:1;`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({display:"none"})}
`
const SearchContainer = styled.div`
    border: 1px solid #eee;
    display:flex;
    align-items:center;
    margin-left:25px;
    padding:5px;
`
const Input = styled.input`
    border:none;
`
const Logo = styled.h1`
    font-weight:bold;
    text-align:center;
    ${mobile({fontSize:"24px"})}
`

const Right = styled.div`
    flex:1; 
    display:flex; 
    justify-content:flex-end; 
    align-items:center;
`
const MenuItem = styled.div`
    font-size:14px;
    cursor: pointer;
    margin-right:20px;
    ${mobile({marginRight:"15px", fontSize:"13px"})}
`
//End styles


function Navbar() {
  return (
    <NavContainer>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input />
                    <Search style={{color:"#ccc", fontSize:16}}/>
                </SearchContainer>
            </Left>
            <Center><Logo>BigShop</Logo></Center>
            <Right>
                <MenuItem>
                    Register
                </MenuItem>
                <MenuItem>
                    Sign in
                </MenuItem>
                <MenuItem>
                    <Badge badgeContent={4} color="primary">
                        <ShoppingCartOutlined />
                    </Badge>
                </MenuItem>
            </Right>
        </Wrapper>
        
    </NavContainer>
  )
}

export default Navbar
