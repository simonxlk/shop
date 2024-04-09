import { Add, Remove } from "@mui/icons-material";
import styled from "styled-components"
import Navbar from "../components/Navbar"

const Container = styled.div``;
const Wrapper = styled.div`padding:20px;`;
const Title = styled.h1`font-weight:300; text-align:center;`;
const Top = styled.div`display:flex; align-items:center; justify-content:space-between; padding:20px;`;
const TopButton = styled.button`padding:10px; font-weight:600; cursor:pointer;
    border: ${props=>props.type === "filled" && "none"};
    background-color: ${props=>props.type === "filled" ? "black" : "transparent"};
    color: ${props=>props.type === "filled" && "white"};
`;
const TopTexts = styled.div``;
const TopText = styled.span`text-decoration:underline; cursor:pointer; margin:0 10px;`;

const Bottom = styled.div`
    display:flex; 
    justify-content:space-between;
`;
const Info = styled.div`flex:3;`;

const Product = styled.div`
    display:flex; justify-content:space-between;
`;
const ProductDetails = styled.div`
   flex:2; 
   display:flex;
`;
const Image = styled.img`width:200px;`;
const Details = styled.div`padding:20px; display:flex; flex-direction:column; justify-content:space-around;`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColour = styled.div`
    width:20px; height:20px; border-radius:50%;
    background-color: ${props=>props.colour};
`;
const ProductSize = styled.span``;
const PriceDetails = styled.span`flex:1; display:flex; align-items:center; justify-content:center; flex-direction:column`;

const ProductAmountContainer = styled.div`display:flex; align-items:center;`;
const ProductAmount = styled.div` font-size:24px; margin:5px; margin-bottom:20px;`;
const ProductPrice = styled.div`font-size:30px; margin:5px; `;
const Hr = styled.hr``;

const Summary = styled.div`flex:1; border: 0.5px solid #eee; border-radius: 10px; padding:20px; height:50vh;`;
const SummaryTitle = styled.h1`font-weight:200;`;
const SummaryItem = styled.div`margin:30px 0px; display:flex; justify-content:space-between;
font-weight:${props=>props.type === "total" && "500"};
font-size:${props=>props.type === "total" && "24px"};
`;
const SummaryItemPrice = styled.span``;
const SummaryItemText = styled.span``;
const SummaryButton = styled.button`padding:10px; background-color:#000; color:#fff; font-weight:600; font-size:20px;`;


function Cart() {
  return (
    <Container>
        <Navbar />

        <Wrapper>
            <Title>Your shopping basket</Title>
            <Top>
                <TopButton type="filled">Continue shopping</TopButton>
                <TopTexts>
                    <TopText>Shopping basket(2)</TopText>
                    <TopText>Your Wishlist(0)</TopText>
                </TopTexts>
                <TopButton>Checkout now</TopButton>
            </Top>
            <Bottom>
                <Info>
                    <Product>
                        <ProductDetails>
                            <Image src="https://cdn.pixabay.com/photo/2020/01/25/11/09/male-4792234_960_720.jpg" />
                            <Details>
                                <ProductName>Product: Nice Jeans</ProductName>
                                <ProductId>ID: 265</ProductId>
                                <ProductColour colour="black"/>
                                <ProductSize>Size: 37.5</ProductSize>

                            </Details>
                        </ProductDetails>
                        <ProductDetails>
                            <PriceDetails>
                                <ProductAmountContainer>
                                    <Add />
                                        <ProductAmount>2</ProductAmount>
                                    <Remove />
                                </ProductAmountContainer>
                                <ProductPrice>£30</ProductPrice>
                            </PriceDetails>
                        </ProductDetails>
                    </Product>
                    <Hr />
                    <Product>
                        <ProductDetails>
                            <Image src="https://cdn.pixabay.com/photo/2018/11/22/12/49/clothing-3831829_960_720.jpg" />
                            <Details>
                                <ProductName>Product: Nice Jeans</ProductName>
                                <ProductId>ID: 265</ProductId>
                                <ProductColour colour="#f5424b"/>
                                <ProductSize>Size: 20</ProductSize>

                            </Details>
                        </ProductDetails>
                        <ProductDetails>
                            <PriceDetails>
                                <ProductAmountContainer>
                                    <Add />
                                        <ProductAmount>2</ProductAmount>
                                    <Remove />
                                </ProductAmountContainer>
                                <ProductPrice>£40</ProductPrice>
                            </PriceDetails>
                        </ProductDetails>
                    </Product>
                </Info>
                <Summary>
                    <SummaryTitle>Order Summary</SummaryTitle>  
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>£350</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Postage</SummaryItemText>
                        <SummaryItemPrice>£10</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type="total">
                        <SummaryItemText>Total</SummaryItemText>
                        <SummaryItemPrice>£360</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryButton>Checkout now</SummaryButton>
                    </SummaryItem>
                </Summary>
            </Bottom>
        </Wrapper>
    </Container>
  )
}

export default Cart