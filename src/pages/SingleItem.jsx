import { AddCircleOutline, RemoveCircleOutlined } from '@mui/icons-material';
import React from 'react'
import styled from "styled-components"
import Navbar from '../components/Navbar';

const Container = styled.div`

`;
const Wrapper = styled.div`
    padding:50px; 
    display:flex;
`;
const ImgContainer = styled.div`
    flex:1;
    padding:0 50px;
`;
const Image = styled.img``;
const InfoContainer = styled.div`
    flex:1;
`;
const Title = styled.h1`font-weight:200;`;
const Desc = styled.p`margin:20px 0;`;
const Price = styled.span`font-weight:100; font-size:40px;`;

const FilterContainer = styled.div`
    display:flex;
    width:50%;
    margin:30px 0px;
    justify-content:space-between;
`;
const Filter = styled.div`display:flex; align-items:center;`;
const FilterTitle = styled.span`font-size:20px; font-weight:200`;
const FilterColour = styled.div`
    width:20px; height:20px; border-radius:50%;
    background-color:${props=>props.colour};
    margin:0 5px;
`;
const FilterSize = styled.select`margin-left:10px; padding:5px;`;
const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
    display:flex;
    align-items:center;
    width:50%;
    justify-content:space-between;
`;
const AmountContainer = styled.div`display:flex; align-items:center; font-weight:700;`;
const Amount = styled.span` 
    width:30px; 
    height:30px; 
    border-radius:10px; 
    border:2px solid #eee;
    display:flex; 
    align-items:center;
    justify-content:center;
    margin:0 10px;
`;
const Button = styled.button`padding:15px; border:2px solid teal; background-color:#fff; cursor: pointer; font-weight:500;`;

//End styles

function SingleItem() {
  return (
    <Container>
        <Navbar />
        <Wrapper>
            <ImgContainer>
                <Image src="https://cdn.pixabay.com/photo/2018/10/10/14/25/pants-3737415_960_720.jpg" />
            </ImgContainer>
            <InfoContainer>
                <Title>Denim Jeans</Title>
                <Desc>The best pair of jeans in your collection</Desc>
                <Price>£1.99</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Colour:</FilterTitle>
                        <FilterColour colour="black" />
                        <FilterColour colour="blue" />
                        <FilterColour colour="gray" />
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>SM</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                            <FilterSizeOption>XL</FilterSizeOption>
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <RemoveCircleOutlined />
                        <Amount>1</Amount>
                        <AddCircleOutline />
                    </AmountContainer>
                    <Button>Add to Cart</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
    </Container>
  )
}

export default SingleItem