import styled from "styled-components";


const Container = styled.div`
    width:100vw;
    height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:#ccc;
`;
const Wrapper = styled.div`width: 25%; padding:20px; background-color: #fff;`;
const Form = styled.form`display:flex; flex-direction:column;`;
const Title = styled.h1`font-size:24px; font-weight:300;`;
const Input = styled.input`flex:1; win-width:40%; margin:20px 10px 0px 0px; padding:10px;`;
const Button = styled.button` width:40%; padding:15px 20px; background-color: teal; color:#fff; border:none; cursor:pointer; margin:20px 0;`;
const Link = styled.a`margin:5px 0px; font-size:12px; text-decoration:underline; cursor:pointer;`;
//End styles

function Login() {
  return (
    <Container>
        <Wrapper>
            <Title>Sign in</Title>
    
            <Form>
                <Input placeholder="email" />
                <Input placeholder="password" />
                <Button>Submit</Button>
                <Link>Forgot password</Link>
                <Link>Create New account</Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login