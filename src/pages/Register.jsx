import styled from "styled-components"


const Container = styled.div`
    width:100vw;
    height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:#ccc;
`;
const Wrapper = styled.div`width: 40%; padding:20px; background-color: #fff;`;
const Form = styled.form`display:flex; flex-wrap:wrap;`;
const Title = styled.h1`font-size:24px; font-weight:300;`;
const Input = styled.input`flex:1; win-width:40%; margin:20px 10px 0px 0px; padding:10px;`;
const Agreements = styled.span`width:100%; font-size:14px; padding:20px 0; `;
const Button = styled.button` width:40%; padding:15px 20px; background-color: teal; color:#fff; border:none; cursor:pointer;`;
//End styles
function Register() {
  return (
    <Container>
        <Wrapper>
            <Title>Create account</Title>
    
            <Form>
                <Input placeholder="name" />
                <Input placeholder="last name" />
                <Input placeholder="email" />
                <Input placeholder="password" />
                <Input placeholder="confirm password" />
                <Agreements>by signing up you agree to the Terms and Conditions</Agreements>
                <Button>Submit</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register