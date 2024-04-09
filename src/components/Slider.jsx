import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material"
import { useState } from "react"
import styled from "styled-components"
import {sliderItems} from '../data'
import {mobile} from "../responsive";

const Container = styled.div`
    width:100%;
    height: 100vh;
    display:flex;
    position:relative;
    overflow:hidden;
    ${mobile({display:"none"})}
`
const Arrow = styled.div`
    width:50px;
    height:50px;
    background-color:rgba(0,0,0, 0.3);
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    position:absolute;
    top:0; bottom:0;
    left: ${props=> props.direction === "left" && "20px"};
    right: ${props=> props.direction === "right" && "20px"};
    margin:auto;
    cursor:pointer;
    opacity:0.5;
    z-index:2;
`
const Wrapper = styled.div`
    height:100%;
    display:flex;
    transition: all 1s ease;
    transform: translateX(${props=>props.slideIndex * -100}vw);
`
const Slide = styled.div` 
    display:flex; align-items:center; 
    width:100vw; height:100vh; justify-content:center;
    background-color: #${props=>props.bg};
`;
const ImgContainer = styled.div`flex:1; height:100%;`;
const InfoContainer = styled.div`flex:1; padding:50px;`;
const Image = styled.img` height:80%;`

const Title = styled.h1`font-size:70px;`
const Desc = styled.p`margin:50px 0; font-size:20px; font-weight:500;`
const Button = styled.button`padding:10px; font-size:20px; background-color: transparent; cursor:pointer;`

//END STYLES

const Slider = () => {
    const slideLength = sliderItems.length -1;
    const [slideIndex, setSlideIndex] = useState(0);

    const handleClick = (direction) =>{
        if(direction === "left"){   //left button clicked
           // setSlideIndex(slideIndex > 0 ? slideIndex-1: slideLength)
           if(slideIndex > 0) {setSlideIndex(slideIndex - 1)}
        }else {
            //setSlideIndex(slideIndex < slideLength ? slideIndex +1 : 0)
            if(slideIndex < slideLength) {setSlideIndex(slideIndex + 1)}
        }
    };

  return (
    <Container>
        <Arrow direction="left" onClick={()=>handleClick("left")}>
            <ArrowLeftOutlined />
        </Arrow>

        <Wrapper slideIndex={slideIndex}>
            {sliderItems.map((item) => (
                <Slide bg={item.bg} key={item.id}>
                    <ImgContainer>
                        <Image src={item.img} />
                    </ImgContainer>
                    <InfoContainer>
                        <Title>{item.title}</Title>
                        <Desc>{item.desc}</Desc>
                        <Button>SHOP NOW</Button>
                    </InfoContainer>
                </Slide>
            ))};
        </Wrapper>

        <Arrow direction="right" onClick={()=>handleClick("right")}>
            <ArrowRightOutlined />
        </Arrow>
    </Container>
  )
}

export default Slider