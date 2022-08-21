import styled from "styled-components";
import BannerImg from '../images4/alisebanner.png';

export const Cantainer = styled.div`
background-color:#161616;
width:100%;
max-width:100%;
color:white;
display:felx;
felx-direction:column;
justify-content:center;
align-items:flex-start; 

`
export const Wrapper = styled.div`
width:100%;
max-width:85%;
`
export const Banner = styled.div`
max-width:100%;
height:200px;
background:url(${BannerImg});
background-repeat: no-repeat;
background-position: center;
display:flex;
flex-direction:column;

`
export const BannerHeading= styled.div`
width:100%;
max-width:500px;
height:100px;
justify-content:center;
display:flex;
align-items:flex-end;
font-style: normal;
font-weight: 700;
font-size: 60px;

`
export const BannerTextContainer = styled.div`
width:100%;
max-width:50%;
display:flex;
justify-content:center;
align-items:flex-start;
`
export const BannerText = styled.div`
width:100%;
max-width:80%;
height:100px;
display:flex;
justify-content:flex-start;
align-items:flex-start;
font-size: 12px;
`
export const AlliesNav = styled.div`
width:100%;
max-width:100%;
height:50px;
border-bottom: 1px solid #2D2D2D;
display:flex;
justify-content:flex-start;
align-items:center;
gap:20px;
`
export const AlliesNavElement = styled.div`
max-width:100px;
width:100%;
height:inherit;
display:flex;
justify-content:flex-start;
align-items:center;
cursor:pointer;
`

export const Heading = styled.h1`
height:80px;
display:flex;
justify-content:flex-start;
align-items:center;
font-size:30px;
`


export const WholeCardCantainer  = styled.div`
width:100%;
display:flex;
flex-wrap:wrap;
gap:20px;
`
export const CardCantainer  = styled.div`
width:100%;
max-width:300px;
height:410px;
background: #1A1C1E;
border-radius: 8px;
`
export const CardBanner  = styled.img`
width:100%;
max-width:100%;
height:100px;

`
export const CardDetailWrapper  = styled.div`
width:100%;
display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:center;
position:relative;
`
export const CardLogo  = styled.img`
width:100%;
max-width:100px;
height:100px;
position:relative;
top:-50px;
`
export const CardUserName  = styled.div`
width:100%;
max-width:200px;
height:30px;
display:flex;
justify-content:center;
align-items:flex-start;
font-size:20px
`
export const CardUserid  = styled.div`
color: #5CB6E0;
max-width:200px;
height:30px;
display:flex;
font-size:14px;
justify-content:center;
align-items:center;
`
export const CarduserExp  = styled.div`
width:100%;
display:flex;
justify-content:center;
align-items:center;
gap:10px;
${'' /* border:1px solid red; */}
height:80px;
`
export const CarduserExpElem  = styled.div`
border-right:1px solid #DCDCDC;
width:100%;
max-width:100px;
height:50px;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
gap:10px;

`
export const CarduserExpElemNum  = styled.div`
font-size:20px;

`
export const CarduserExpElemText  = styled.div`
font-size:12px;
width:100%;
max-width:100%;
display:flex;
justify-content:center;
align-items:center;
`
export const CardUserBages  = styled.div`
width:100%;
max-width:100%;
height:50px;
display:flex;
justify-content:flex-end;
align-items:center;

`
export const CardUserBagesElem_1  = styled.div`
border:4px solid #986BFF;
width:100%;
max-width:40px;
height:40px;
border-radius:50%;
background-color:#824DFF;
color:#986BFF;

`
export const CardUserBagesElem_2  = styled.div`
border:4px solid #F07CF2;
width:100%;
max-width:40px;
height:40px;
border-radius:50%;
position:relative;
left:-15px;
background-color:#FF4CB8;

`
export const CardUserBagesElem_3  = styled.div`
border:4px solid #FFC774;
width:100%;
max-width:40px;
height:40px;
border-radius:50%;
position:relative;
left:-25px;
background-color:#FFED4C;
`
export const CardUserBagesElem_4  = styled.div`
border:4px solid orange;
width:100%;
max-width:40px;
height:40px;
border-radius:50%;
display:flex;
justify-content:center;
align-items:center;
background: linear-gradient(180deg, #AB2EBE 0%, #340354 100%);
position:relative;
left:-35px;
`
export const CardUserBagesElem_5  = styled.div`
border:4px solid #7186FE;
width:100%;
max-width:40px;
height:40px;
border-radius:50%;
background:#4F4CFF;
position:relative;
left:-45px;
`
export const CardUserBagesElem_6  = styled.div`
border:4px solid gray;
width:100%;
max-width:40px;
height:40px;
border-radius:50%;
background:black;
position:relative;
left:-55px;
display:flex;
justify-content:center;
align-items:center;
`
export const CardUserBagesImg  = styled.img`
width:100%;
max-width:100px;
height:60px;
`
export const CardUserStarImg  = styled.img`
width:100%;
max-width:25px;
height:25px;
`
 





