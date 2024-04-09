import { FavoriteBorderOutlined, SearchOffOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import React from 'react'
import styled from "styled-components"

//Styles
    const Info = styled.div`
        opacity:0;
        width:100%; 
        height:100%;
        position:absolute;
        top:0; left:0;
        z-index:3;
        display:flex;
        align-items:center;
        justify-content:center;
        background-color: rgba(0,0,0, 0.2);
        transition: all 0.5s ease;
    `;
    const Container = styled.div`
        flex:1;
        margin: 5px;
        min-width: 280px;
        height: 350px;
        display:flex;
        align-items:center;
        justify-content:center;
        background-color: #f5fbfd;
        position:relative;
        &:hover ${Info}{
            opacity:1;
        }
    `;
    const Circle = styled.div`

    `;
    const Image = styled.img` height:75%;`
   
    const Icon = styled.div`
        width:40px; height:40px;
        border-radius:50%;
        background-color:#fff;
        display:flex;
        align-items:center;
        justify-content:center;
        margin:10px;
        
        &:hover{
            background-color:#e9f5f5;
            transform:scale(1.05);
        }
    `;
//End styles

function SingleProduct({item}) {
  return (
    <Container>
        <Circle />
        <Image src={item.img} />
        <Info>
            <Icon>
                <ShoppingCartOutlined />
            </Icon>
            <Icon>
                <SearchOffOutlined />
            </Icon>
            <Icon>
                <FavoriteBorderOutlined />
            </Icon>
        </Info>
    </Container>
  )
}

export default SingleProduct