import styled  from "styled-components";

export const Container  = styled.div`
color:white;
width:100%;
height:45vh;
border-top:1px solid rgba(255, 255, 255, 0.12);
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
font-family: 'Graphik';
font-style: normal;
font-weight: 500;

/* identical to box height, or 150% */

letter-spacing: 0.1px;
`
export const Wrapper = styled.div`
display:flex;
justify-content:center;
align-items:center;
gap:100px;
height:inherit;
`
export const CopyRight = styled.div`

`
export const PagesContainer = styled.div`
display:flex;
justify-content:center;
align-items:flex-start;
gap:10px;
flex-direction:column;
`
export const Pages = styled.div`

`
export const Heading = styled.div`
height:50px;
display:flex;
justify-content:center;
align-items:center;
font-size: 20px;
line-height: 30px;
`
export const ContactContainer = styled.div`
display:flex;
justify-content:center;
align-items:flex-start;
gap:10px;
flex-direction:column;
${'' /* border:1px solid red; */}
`
export const JoinDiscard = styled.div`
letter-spacing: 0.2px;
font-size:14px;
color: #5865F2;
display:flex;
justify-content:center;
align-items:center;
gap:10px;
`
export const PhoneNo = styled.div`
display:flex;
justify-content:center;
align-items:center;
gap:10px;

`
export const SocilIconContainer = styled.div`
display:flex;
justify-content:flex-end;
align-items:center;
gap:15px;
height:50px;


`
export const SocileImg = styled.img`
height:25px;
width:20px;
`

