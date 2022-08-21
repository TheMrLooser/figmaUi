import {ContentCont, ContentCont_1, ContentCont_1_ImgCont, ContentCont_1_ImgCont_2, ContentCont_1_ImgCont_3, ContentCont_1_ImgCont_4, ContentCont_1_ImgCont_5, ContentCont_1_ImgDiv_1, ContentCont_1_ImgDiv_2, ContentCont_1_Q, ContentCont_1_QN, ContentCont_1_StyleBig, ContentCont_1_StyleSmall, ContentCont_1_TextCont, ContentCont_1_Title, ContentCont_1_Wrapper, ContentCont_1_Year, ContentCont_2, ContentCont_2_StyleBig, ContentCont_2_StyleSmall, ContentCont_3, ContentCont_4, ContentCont_5, ContentCont_6, Logo, MainContainer, MainLogoCont, MainNavCont, MainNavElem, MainWrapper, StyleWrapper} from '../styledComponents/home';
import logo from '../images3/logo.png';
import Ellipse from '../images3/Ellipse.png';
import Etherium_2 from '../images3/Etherium-2.png';
import image_6102 from '../images3/image 6102.png';
import Monero_3 from '../images3/Monero-3.png';
import Rectangle from '../images3/Rectangle.png';
import Sandglass_Bitcoin_3 from '../images3/Sandglass&Bitcoin-3.png';
import Sandglass_Bitcoin_4 from '../images3/Sandglass&Bitcoin-4.png';
import Footer from './footer';

const Landing  =()=>{
    return(
        <>
            <MainContainer>
                <MainLogoCont>
                    <Logo src={logo} />
                </MainLogoCont>
                <MainWrapper>
                    <MainNavCont>
                        <MainNavElem>Blog</MainNavElem>
                        <MainNavElem>Road Maps</MainNavElem>
                        <MainNavElem>Contacts</MainNavElem>
                    </MainNavCont>
                    <ContentCont>
                        <ContentCont_1>
                            <ContentCont_1_Title>Road Maps</ContentCont_1_Title>
                            <ContentCont_1_Wrapper>
                                <StyleWrapper>
                                    <ContentCont_1_StyleBig>
                                        <ContentCont_1_StyleSmall/>
                                    </ContentCont_1_StyleBig>
                                    <ContentCont_1_TextCont>
                                        <ContentCont_1_Year>2022</ContentCont_1_Year>
                                        <ContentCont_1_Q>Q1</ContentCont_1_Q>
                                        <ContentCont_1_QN>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id purus augue. Lorem ipsum dolor </ContentCont_1_QN>
                                    </ContentCont_1_TextCont>
                                </StyleWrapper>
                                <ContentCont_1_ImgCont>
                                        <ContentCont_1_ImgDiv_1>
                                            <img src={Etherium_2}/>
                                            <img src={Sandglass_Bitcoin_3}/>
                                        </ContentCont_1_ImgDiv_1>
                                        <ContentCont_1_ImgDiv_2>
                                            <ContentCont_1_ImgCont_2>
                                                <ContentCont_1_ImgCont_3>
                                                    <ContentCont_1_ImgCont_4>
                                                        <ContentCont_1_ImgCont_5>

                                                        </ContentCont_1_ImgCont_5>
                                                    </ContentCont_1_ImgCont_4>
                                                </ContentCont_1_ImgCont_3>
                                            </ContentCont_1_ImgCont_2>
                                            
                                            <img src={Sandglass_Bitcoin_4} style={{height:'30%'}}/>
                                        </ContentCont_1_ImgDiv_2>
                                </ContentCont_1_ImgCont>
                            </ContentCont_1_Wrapper>
                        </ContentCont_1>

                                
                        <ContentCont_2>
                            <StyleWrapper>
                                    
                                <ContentCont_1_TextCont>
                                    <ContentCont_1_Year>2022</ContentCont_1_Year>
                                    <ContentCont_1_Q>Q2</ContentCont_1_Q>
                                    <ContentCont_1_QN>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id purus augue. Lorem ipsum dolor </ContentCont_1_QN>
                                </ContentCont_1_TextCont>
                                <ContentCont_2_StyleBig>
                                    <ContentCont_2_StyleSmall/>
                                </ContentCont_2_StyleBig>
                            </StyleWrapper>
                        </ContentCont_2>
                        

                        <ContentCont_3>
                                <StyleWrapper>
                                    <ContentCont_2_StyleBig style={{left:'-100px'}}>
                                        <ContentCont_2_StyleSmall/>
                                    </ContentCont_2_StyleBig>
                                    <ContentCont_1_TextCont>
                                        <ContentCont_1_Year>2022</ContentCont_1_Year>
                                        <ContentCont_1_Q>Q3</ContentCont_1_Q>
                                        <ContentCont_1_QN>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id purus augue. Lorem ipsum dolor </ContentCont_1_QN>
                                    </ContentCont_1_TextCont>
                                    
                                </StyleWrapper>
                        </ContentCont_3>


                        <ContentCont_4>
                            <StyleWrapper> 
                                    
                                    <ContentCont_1_TextCont>
                                        <ContentCont_1_Year>2022</ContentCont_1_Year>
                                        <ContentCont_1_Q>Q4</ContentCont_1_Q>
                                        <ContentCont_1_QN>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id purus augue. Lorem ipsum dolor </ContentCont_1_QN>
                                    </ContentCont_1_TextCont>
                                    <ContentCont_2_StyleBig style={{left:'120px'}}>
                                        <ContentCont_2_StyleSmall/>
                                    </ContentCont_2_StyleBig>
                                </StyleWrapper>
                        </ContentCont_4>
                        <ContentCont_5>
                            <StyleWrapper>
                                    <ContentCont_2_StyleBig style={{left:'-120px'}}>
                                        <ContentCont_2_StyleSmall/>
                                    </ContentCont_2_StyleBig>
                                    <ContentCont_1_TextCont>
                                        <ContentCont_1_Year>2022</ContentCont_1_Year>
                                        <ContentCont_1_Q>Q5</ContentCont_1_Q>
                                        <ContentCont_1_QN>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id purus augue. Lorem ipsum dolor </ContentCont_1_QN>
                                    </ContentCont_1_TextCont>
                                    
                                </StyleWrapper>
                        </ContentCont_5>

                        <ContentCont_6/>
                    </ContentCont>
                </MainWrapper>

                <Footer/>
            </MainContainer>
        </>
    )
}

export default Landing