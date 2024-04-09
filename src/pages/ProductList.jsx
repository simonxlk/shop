import React from 'react'
import styled from "styled-components"
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Products from '../components/Products';

const Container = styled.div`

`;
const Title = styled.h1` margin:20px;`;
const FilterContainer = styled.div` display:flex; justify-content:space-between;`;
const Filter = styled.div`margin:20px;`;
const FilterText = styled.span`font-size:20px; font-weight:600; margin-right:20px;`;

const Select = styled.select`
    padding: 10px;
    margin-right:20px;
`;
const Option = styled.option``;
//End styles


function ProductList() {
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Title>Clothes</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Products:</FilterText>
                <Select>
                    <Option disabled Selected>Material</Option>
                    <Option>Jeans</Option>
                    <Option>Red</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>Sort Products:</FilterText>
                <Select>
                    <Option disabled Selected>Price</Option>
                    <Option>Ascending</Option>
                    <Option>Descending</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products />
    </Container>
  )
}

export default ProductList