import styled from "styled-components"


const Container = styled.div`
    height: 30px;
    background-color: teal;
    color:#fff;
    display:flex;
    align-items:center;
    justify-content:center;
    font-weight:bold;
`


function Announcement() {
  return (
    <Container>
        Super deals.. 10% of every purchase.. today only
    </Container>
  )
}

export default Announcement