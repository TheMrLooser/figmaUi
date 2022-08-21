import styled from 'styled-components'
import backgroundImg from '../images3/Rectangle.png'
import Ellipse from '../images3/Ellipse.png';
import Etherium_2 from '../images3/Etherium-2.png';
import image_6102 from '../images3/image 6102.png';
import Monero_3 from '../images3/Monero-3.png';
import Rectangle from '../images3/Rectangle.png';




export const MainContainer = styled.div`
background:url(${backgroundImg});
width:100%;
height:260vh;
display:flex;
${'' /* gap:60px; */}
flex-direction:column;
justify-content:center;
align-items : center;
 
`
export const MainWrapper = styled.div`
${'' /* border:1px solid yellow; */}
width:70%;
`
export const MainLogoCont = styled.div`
width:150px;
${'' /* max-width:100px; */}
height:100px;
${'' /* border:1px solid red; */}
display:flex;
justify-content:flex-end;
align-items:center;
position:absolute;
left:0px;
top:0px;
`
export const Logo = styled.img`
width:65%;
height:70%;

`
export const MainNavCont = styled.div`
color:white;
width:100%;
height:100px;
border-left:3px solid rgba(255, 255, 255, 0.12);
display:flex;
gap:30px;
align-items:center;
justify-content:center;

`
export const MainNavElem = styled.div`

`
export const ContentCont = styled.div`

 
`
export const ContentCont_1 = styled.div`
width:100%;
height:50vh;
border-left:3px solid rgba(255, 255, 255, 0.12);
border-bottom:1px solid rgba(255, 255, 255, 0.12);
border-bottom-left-radius:30px;
`
export const ContentCont_1_Wrapper = styled.div`
display:flex;
max-width:100%;
align-items:center;
position:relative;
`
export const ContentCont_1_Title = styled.div`
color:white;
max-width:30%;
height:100px;
display:flex;
gap:30px;
align-items:flex-start;
justify-content:flex-end;
font-size:50px
`
export const ContentCont_1_ImgCont = styled.div`
width:100%;
max-width:100%;
height:250px;
display:flex;
align-items: flex-start;
justify-content: flex-end;

`
export const ContentCont_1_ImgCont_2 = styled.div`
 width:100%;
 height:100px;
 display:flex;
 align-items:center;
 justify-content:center;
`
export const ContentCont_1_ImgCont_3 = styled.div`
 width:100%;
  max-width:80px;
 height:80px;
 background: #2d2c2c;
 border-radius:50%;
 background-repeat:no-repeat ;
 background-position:center;
 display:flex;
 align-items:center;
 justify-content:center;

`
export const ContentCont_1_ImgCont_4 = styled.div`
   width:100%;
  max-width:70px;
 height:70px;
 background:linear-gradient(50deg,blue,skyblue);
 border-radius:40%;
 background-repeat:no-repeat ;
 background-position:center;
 display:flex;
 align-items:center;
 justify-content:center;
`
export const ContentCont_1_ImgCont_5 = styled.div`
  width:100%;
  max-width:110px;
 height:110px;
 background:url(${image_6102 });
 background-repeat:no-repeat ;
 background-position:center;

`
export const ContentCont_1_ImgDiv_1 = styled.div`
 width:150px;
 height:120px;

`
export const ContentCont_1_ImgDiv_2 = styled.div`
 width:100%;
 max-width:150px;
 height:100%;
 ${'' /* border:1px solid red; */}
display:flex;
flex-direction:column;
align-items:flex-end;
justify-content:flex-end
`

export const StyleWrapper = styled.div`
display:flex;
width:50%;
${'' /* border:1px solid red; */}
align-items:center;

`

export const ContentCont_1_TextCont = styled.div`
width:100%;
max-width:300px;
height:250px;
display:flex;
flex-direction:column;
align-items:flex-start;
justify-content:center;
font-size:20px;
color:white;
gap:20px;

`
export const ContentCont_1_Year = styled.div`
font-family: 'Outfit';
font-style: normal;
font-weight: 100;
font-size: 71px;
 
`
export const ContentCont_1_QN= styled.div`
font-family: 'Outfit';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 25px; 
display: flex;
align-items: center;
color: rgba(255, 255, 255, 0.39);
`
export const ContentCont_1_Q = styled.div`
font-weight: 500;
font-size: 33px;
color: #15C4C6;
`
export const ContentCont_1_StyleBig = styled.div`
width:100%;
max-width:150px;
height:150px;
display:flex;
align-items:center;
justify-content:center;
background: #FFFFFF;
box-shadow: 12px 32px 80px -20px rgba(0, 0, 0, 0.12);
border-radius: 32px;
position:relative;
left:-80px;
`
export const ContentCont_2_StyleBig = styled.div`
width:100%;
max-width:220px;
height:130px;
display:flex;
align-items:center;
justify-content:center;
background: rgba(29, 51, 64, 0.45);
backdrop-filter: blur(80px);
box-shadow: 12px 32px 80px -20px rgba(0, 0, 0, 0.12);
border-radius: 32px;
position:relative;
left:120px;
`
export const ContentCont_1_StyleSmall = styled.div`
width:100%;
max-width:80px;
height:80px;
background: linear-gradient(180deg, #15C4C6 0%, #0C79F4 100%);
border: 6px solid rgba(255, 255, 255, 0.3);
box-shadow: 0px 22px 44px rgba(31, 31, 31, 0.4);
border-radius: 50%;
`
export const ContentCont_2_StyleSmall = styled.div`
width:100%;
max-width:80px;
height:80px;
background: linear-gradient(180deg, #778282 0%, #2F3842 100%);
border: 6px solid rgba(255, 255, 255, 0.3);
box-shadow: 0px 22px 44px rgba(31, 31, 31, 0.4);
border-radius: 50%;
`


export const ContentCont_2 = styled.div`
width:100%;
height:30vh;
border-top:1px solid rgba(255, 255, 255, 0.12);
border-right:3px solid rgba(255, 255, 255, 0.12);
border-bottom:1px solid rgba(255, 255, 255, 0.12);
border-top-right-radius:30px;
border-bottom-right-radius:30px;
margin-left:30px;
display:flex;
justify-content:flex-end;
position:relative;
`
export const ContentCont_3 = styled.div`
width:100%;
height:30vh;
border-top:1px solid rgba(255, 255, 255, 0.12);
border-left:3px solid rgba(255, 255, 255, 0.12);
border-bottom:1px solid rgba(255, 255, 255, 0.12);
border-top-left-radius:30px;
border-bottom-left-radius:30px;
margin-right:30px;
display:flex;
justify-content:flex-start;
position:relative;
`
export const ContentCont_4 = styled.div`
width:100%;
height:30vh;
border-top:1px solid rgba(255, 255, 255, 0.12);
border-right:3px solid rgba(255, 255, 255, 0.12);
border-bottom:1px solid rgba(255, 255, 255, 0.12);
border-top-right-radius:30px;
border-bottom-right-radius:30px;
margin-left:30px;
display:flex;
justify-content:flex-end;
position:relative;
`
export const ContentCont_5 = styled.div`
width:100%;
height:30vh;
border-top:1px solid rgba(255, 255, 255, 0.12);
border-left:3px solid rgba(255, 255, 255, 0.12);
border-bottom:1px solid rgba(255, 255, 255, 0.12);
border-top-left-radius:30px;
border-bottom-left-radius:30px;
margin-right:30px; 
display:flex;
justify-content:flex-start;
position:relative;
`
export const ContentCont_6 = styled.div`
width:100%;
height:30vh;
border-top:1px solid rgba(255, 255, 255, 0.12);
border-right:3px solid rgba(255, 255, 255, 0.12);
border-top-right-radius:30px;
margin-left:30px; 
display:flex;
justify-content:flex-start;
position:relative;
`



// export const 