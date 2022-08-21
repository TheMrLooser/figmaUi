import { AlliesNav, AlliesNavElement, Banner, BannerHeading, BannerText, BannerTextContainer, Cantainer, CardBanner, CardCantainer, CardDetailWrapper, CardLogo, CardUserBages, CardUserBagesElem, CardUserBagesElem_1, CardUserBagesElem_2, CardUserBagesElem_3, CardUserBagesElem_4, CardUserBagesElem_5, CardUserBagesElem_6, CardUserBagesImg, CarduserExp, CarduserExpElem, CarduserExpElemNum, CarduserExpElemText, CardUserid, CardUserName, CardUserStarImg, Heading, WholeCardCantainer, Wrapper } from "../styledComponents/allise"
import userBanner from '../images4/userBanner_1.png';
import user_1 from '../images4/user_1.png'
import user_2 from '../images4/user_2.png'
import user_3 from '../images4/user_3.png'
import user_4 from '../images4/user_4.png'
import badge from '../images4/badge.png'
import pinkBadge from '../images4/pinkBadge.png'
import yelloBadge from '../images4/yelloBadge.png'
import pulpalBadge from '../images4/pulpalBadge.png'
import Allisestar from '../images4/Allisestar.png'
import { useState } from "react";

const Allise = ()=>{
    const array = [1,2,3,4,5,6,7,8,9,10,11,12]
    const [openScholer , setOpenScholer] = useState(true)
    const [openGuild , setOpenGuild] = useState(false)

    const opeScho = ()=>{
        if(openGuild){
            setOpenGuild(false)
            setOpenScholer(true)
        }
    }
    const opeGuil = ()=>{
        if(openScholer){
             setOpenScholer(false)
            setOpenGuild(true)

        }
    }
    return(
        <>
            <Cantainer>
                 <Wrapper>
                    <Banner>
                        <BannerHeading>Earn Alliance</BannerHeading>
                        <BannerTextContainer>
                            <BannerText>Amet minim mollit non deserunt ullamco est sit aliqua Amet minim mollit non deserunt ullamco est sit aliqua deserunt ullamco est sit aliqua</BannerText>
                        </BannerTextContainer> 
                    </Banner>
                    <AlliesNav>
                            <AlliesNavElement onClick={ opeScho}>Scholar</AlliesNavElement>
                            <AlliesNavElement onClick={opeGuil }>Guild</AlliesNavElement>
                    </AlliesNav>
                    <Heading>Featured Allies</Heading>
                    {
                        openScholer &&
                    
                    <WholeCardCantainer>
                        {array.map(data=><>
                            <CardCantainer>
                            <CardBanner src={userBanner}/>
                            <CardDetailWrapper>
                                <CardLogo src={user_1}/>
                                <CardUserName>Nicholas Grissom</CardUserName>
                                <CardUserid>ronin29WUDB4</CardUserid>
                                <CarduserExp>
                                    <CarduserExpElem>
                                        <CarduserExpElemNum>2001</CarduserExpElemNum>
                                        <CarduserExpElemText>Avg SLP</CarduserExpElemText>
                                    </CarduserExpElem>
                                    <CarduserExpElem>
                                        <CarduserExpElemNum>2001</CarduserExpElemNum>
                                        <CarduserExpElemText>SLP Earned</CarduserExpElemText>
                                    </CarduserExpElem>
                                    <CarduserExpElem style={{border:"none"}}>
                                        <CarduserExpElemNum>365</CarduserExpElemNum>
                                        <CarduserExpElemText>Days Played</CarduserExpElemText>
                                    </CarduserExpElem>
                                </CarduserExp>
                                <CardUserBages>
                                    <CardUserBagesElem_1><CardUserBagesImg src={pulpalBadge}/></CardUserBagesElem_1>
                                    <CardUserBagesElem_2><CardUserBagesImg src={pinkBadge} /></CardUserBagesElem_2>
                                    <CardUserBagesElem_3><CardUserBagesImg src={yelloBadge}/></CardUserBagesElem_3>
                                    <CardUserBagesElem_4><CardUserStarImg src={Allisestar}/></CardUserBagesElem_4>
                                    <CardUserBagesElem_5><CardUserBagesImg src={badge}/></CardUserBagesElem_5>
                                    <CardUserBagesElem_6>10+</CardUserBagesElem_6>
                                </CardUserBages>
                            </CardDetailWrapper>
                        </CardCantainer>
                        </>)}
                    </WholeCardCantainer>
                    }




                    {
                        openGuild &&

                        <WholeCardCantainer>
                        {array.map(data=><>
                            <CardCantainer>
                            <CardBanner style={{opacity:0}}/>
                            <CardDetailWrapper>
                                <CardLogo src={user_1}/>
                                <CardUserName>Nicholas Grissom</CardUserName>
                                <CardUserid>ronin29WUDB4</CardUserid>
                                <CarduserExp>
                                    {/* <CarduserExpElem>
                                        <CarduserExpElemNum>2001</CarduserExpElemNum>
                                        <CarduserExpElemText>Avg SLP</CarduserExpElemText>
                                    </CarduserExpElem>
                                    <CarduserExpElem>
                                        <CarduserExpElemNum>2001</CarduserExpElemNum>
                                        <CarduserExpElemText>SLP Earned</CarduserExpElemText>
                                    </CarduserExpElem> */}
                                    <CarduserExpElem style={{border:"none"}}>
                                        <CarduserExpElemNum>2001</CarduserExpElemNum>
                                        <CarduserExpElemText>Members</CarduserExpElemText>
                                    </CarduserExpElem>
                                </CarduserExp>
                                <CardUserBages>
                                    <CardUserBagesElem_1><CardUserBagesImg src={pulpalBadge}/></CardUserBagesElem_1>
                                    <CardUserBagesElem_2><CardUserBagesImg src={pinkBadge} /></CardUserBagesElem_2>
                                    <CardUserBagesElem_3><CardUserBagesImg src={yelloBadge}/></CardUserBagesElem_3>
                                    <CardUserBagesElem_4><CardUserStarImg src={Allisestar}/></CardUserBagesElem_4>
                                    <CardUserBagesElem_5><CardUserBagesImg src={badge}/></CardUserBagesElem_5>
                                    <CardUserBagesElem_6>10+</CardUserBagesElem_6>
                                </CardUserBages>
                            </CardDetailWrapper>
                        </CardCantainer>
                        </>)}
                    </WholeCardCantainer>
                    }
                 </Wrapper>
            </Cantainer>
        </>
    )
}


export default Allise