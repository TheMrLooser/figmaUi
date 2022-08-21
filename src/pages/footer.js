import {ContactContainer, Container, CopyRight, Heading, JoinDiscard, Pages, PagesContainer, PhoneNo, SocileImg, SocilIconContainer, Wrapper} from '../styledComponents/footer';
import Decard_blue from '../images3/Decard_blue.png'
import Decardimg from '../images3/Decord.png'
import Phoneimage  from '../images3/phone.png';
import Twitter from '../images3/twitter.png'
const Footer = ()=>{
    return(<>
        <Container>
            <Wrapper>
                <PagesContainer>
                    <Heading>Fingertips</Heading>
                    <Pages>Home</Pages>
                    <Pages>Blog</Pages>
                    <Pages>Roadmaps</Pages>
                    <Pages>Contacts</Pages>
                </PagesContainer>
                <PagesContainer>
                    <Heading>Resources</Heading>
                    <Pages>Discard</Pages>
                    <Pages>Twitter</Pages>
                    <Pages>Lorem</Pages>
                    <Pages>Lorem</Pages>
                </PagesContainer>
                <PagesContainer>
                    <Heading>About</Heading>
                    <Pages>Lorem</Pages>
                    <Pages>Lorem</Pages>
                    <Pages>Lorem</Pages>
                    <Pages>Lorem</Pages>
                </PagesContainer>

                <ContactContainer>
                    <JoinDiscard><SocileImg src={Decard_blue}/> Join us on Discord</JoinDiscard>
                    <PhoneNo><SocileImg src={Phoneimage}/> 7484589568</PhoneNo>
                    <SocilIconContainer>
                        <SocileImg src={Twitter}/>
                        <SocileImg src={Decardimg}/>
                    </SocilIconContainer>
                </ContactContainer>
            </Wrapper>

            <CopyRight>@copyright. earnmanagement 2022</CopyRight>
        </Container>
    </>)
}


export default Footer