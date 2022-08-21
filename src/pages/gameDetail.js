import React from 'react';
import '../style/gameDetail.css'
import bannerImg from '../images2/banner.png'
import actionIcon from '../images2/Vector.png'
import img1 from '../images2/img1.png'
import img2 from '../images2/img2.png'
import img3 from '../images2/img3.png'
import img4 from '../images2/img4.png'
import star from '../images2/star.png'
import persion from '../images2/persion.png'
import playIcon from '../images/Vector.png'
import image11 from '../images/image12.png'
import dil from '../images/dil.png'
const GameDetail = ()=>{
    return(
        <>
            <div className='conatainer'>
                 <div className='banner'>
                        <img src={bannerImg}/>
                        <div className='bannerDetail'>
                            <h1>Apeiron</h1>
                             <h3>@Publisher Name</h3>
                             <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ipsum dolore deserunt enim ea velit nemo iusto officia ad possimus voluptates ....</p>
                           
                        </div>
                        <div className='trailer'>
                                <h3>TRAILER</h3>
                                <div><img src={playIcon}/></div>
                        </div>
                 </div>
                 <div id='mainContainer'>
                        <div id='mainWrapper'>
                                <div id='functionsWrapper'>
                                    <div className='elements'>
                                        <div className='level'>
                                            <div><div>4.0</div></div>
                                            <h3>Rating</h3>
                                        </div>
                                    </div>
                                    <div className='elements'>
                                        <div className='level'>
                                        <div><div><img src={actionIcon}></img></div></div>
                                            <h3>Action</h3>
                                        </div>
                                    </div>
                                    <div className='elements'>
                                        <div className='level'>
                                        <div><div>10.02k</div></div>
                                            <h3>Downloads</h3>
                                        </div>
                                    </div>
                                    <div className='elements'>
                                        <div className='level'>
                                        <div><div>20k</div></div>
                                            <h3>Views</h3>
                                        </div>
                                    </div>
                                    <div className='elements'>
                                        <div className='level'>
                                        <div><div>9+</div></div>
                                            <h3>Languages</h3>
                                        </div>
                                    </div>
                                    <div className='elements'>
                                        <div className='level'>
                                        <div><div>18+</div></div>
                                            <h3>Age</h3>
                                        </div>
                                    </div>
                                </div>

                                <div className='gameAboutSectionWrapper'>
                                    <div id='leftPart'> 
                                        <div className='gameAboutSection'>
                                            <div className='title'>About</div>
                                            <div className='lableTagWrapper'>
                                                <div className='lableTag'>Lable Tag</div>
                                                <div className='lableTag'>Lable Tag</div>
                                                <div className='lableTag'>Lable Tag</div>
                                            </div>
                                            <div className='description'>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm  tempor inci  didunt ut labore et dolore magna aliqua. Ut enim admin im veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in repre henderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                                            Excepteur sint occaecat cupidatat non proident, sunt in culpa officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius mod tempor inci  didunt labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerc  tation ullamco laboris nisi ut.                                         </div>
                                            <div className='updt-vers'>
                                                <div>
                                                    <h2>Updated On</h2>
                                                    <div>Jul 27,2022</div>
                                                </div>
                                                <div>
                                                    <h2>Version Info</h2>
                                                    <div>0.01.2015</div>
                                                </div>
                                            </div>
                                        </div>
 
                                    </div>
                                    <div id='rightPart'>
                                        <div className='gameImages'>
                                            <div className='imageTitle'>Images</div>
                                            <div className='imageWrapper'>
                                                <img src={img1}/>
                                                <img src= {img2}/>
                                                <img src={img3}/>
                                                <img src={img4}/>
                                            </div>
                                        </div>
                                        <div className='whats-new gameImages'>
                                            <div className='new-title imageTitle'>What's New</div>
                                            <div className='new-lists'>
                                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ipsum dolore deserunt enim ea velit nemo iusto officia ad possimus voluptates .... </li>
                                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ipsum dolore deserunt enim ea velit nemo iusto officia ad possimus voluptates .... </li>
                                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ipsum dolore deserunt enim ea velit nemo iusto officia ad possimus voluptates .... </li>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            <div className='gameReviewSectionWrapper gameAboutSectionWrapper'>
                                <div className='leftPart-1'>
                                    <div className=' reviewSection '>
                                        <div className='imageTitle reviewTitle'>Reviews <h6>View All</h6></div>
                                         
                                        <div className='commentSection'>
                                            <div className='commentImageSec'>
                                                <img src={persion}/>
                                            </div>
                                            <div className='commentDetailSec'>
                                                <div className='nameRatingDate'>
                                                    <div className='userName'>Roy D.</div>
                                                    <div className='rating'></div>
                                                    <div className='date'>Jul 14,2015</div>
                                                </div>
                                                <div className='commentpaira'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ipsum dolore </div>
                                            </div>
                                        </div>
                                        <div className='commentSection'>
                                            <div className='commentImageSec'>
                                                <img src={persion}/>
                                            </div>
                                            <div className='commentDetailSec'>
                                                <div className='nameRatingDate'>
                                                    <div className='userName'>Roy D.</div>
                                                    <div className='rating'></div>
                                                    <div className='date'>Jul 14,2015</div>
                                                </div>
                                                <div className='commentpaira'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ipsum dolore </div>
                                            </div>
                                        </div>
                                        <div className='commentSection'>
                                            <div className='commentImageSec'>
                                                <img src={persion}/>
                                            </div>
                                            <div className='commentDetailSec'>
                                                <div className='nameRatingDate'>
                                                    <div className='userName'>Roy D.</div>
                                                    <div className='rating'></div>
                                                    <div className='date'>Jul 14,2015</div>
                                                </div>
                                                <div className='commentpaira'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ipsum dolore </div>
                                            </div>
                                        </div>
                                        <div className='PostCommentSection'>
                                            <div className='postCTitle'>Your Review</div>
                                            <div className='setStar'>
                                                <img src={star}/>
                                                <img src={star}/>
                                                <img src={star}/>
                                                <img src={star}/>
                                                <img src={star}/>
                                            </div>
                                            <input type={'text'} placeholder='let us know what to do'/>
                                        </div>
                                    </div>
                                </div>
                                <div className='rightPart-2'>
                                        <div className='suportWrapper'>
                                            <h2>Support</h2>
                                            <div className='supportWayWrapper'>
                                                <div className='supportWay'>
                                                    <h2>Website</h2><h3>https://www.apeironft.com/</h3>
                                                </div>
                                                <div className='supportWay'>
                                                    <h2>Email</h2><h3>rendrue.8900@gmail.com</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='similargameWrapper '>
                                        <div className='imageTitle reviewTitle'>Similar Games <h6>View All</h6></div>
                                        <div className='wrapCards'>
                                            <div className='contaier'>
                                                    <img src={image11} alt="image" id='image'/>
                                                    <div class="crouselDetails  ">
                                                        <div class="gametypes">Game Type</div>
                                                        <div class="crouselDetailWrappers">
                                                            <img src={dil} alt=""/>
                                                        </div>
                                                    </div>
                                                    <div class="descrptions  ">
                                                        <div class="descriptionTitleWrappers"><span class="titles">Axie Infinity</span> <span class="publisher">@Publisher Name</span></div>
                                                        <div class="rattingWrappers"><span class="ratting"><span class="fa fa-star checked"></span> 4.7</span> <span class="views">10.5k Views</span></div>
                                                        <div class="pairas">
                                                            Lorem ipsum dolor sit amet psum dolore deserunt 
                                                        </div>
                                                    </div>
                                            </div>
                                            <div className='contaier'>
                                                    <img src={image11} alt="image" id='image'/>
                                                    <div class="crouselDetails  ">
                                                        <div class="gametypes">Game Type</div>
                                                        <div class="crouselDetailWrappers">
                                                            <img src={dil} alt=""/>
                                                        </div>
                                                    </div>
                                                    <div class="descrptions  ">
                                                        <div class="descriptionTitleWrappers"><span class="titles">Axie Infinity</span> <span class="publisher">@Publisher Name</span></div>
                                                        <div class="rattingWrappers"><span class="ratting"><span class="fa fa-star checked"></span> 4.7</span> <span class="views">10.5k Views</span></div>
                                                        <div class="pairas">
                                                            Lorem ipsum dolor sit amet psum dolore deserunt 
                                                        </div>
                                                    </div>
                                            </div>
                                            <div className='contaier'>
                                                    <img src={image11} alt="image" id='image'/>
                                                    <div class="crouselDetails  ">
                                                        <div class="gametypes">Game Type</div>
                                                        <div class="crouselDetailWrappers">
                                                            <img src={dil} alt=""/>
                                                        </div>
                                                    </div>
                                                    <div class="descrptions  ">
                                                        <div class="descriptionTitleWrappers"><span class="titles">Axie Infinity</span> <span class="publisher">@Publisher Name</span></div>
                                                        <div class="rattingWrappers"><span class="ratting"><span class="fa fa-star checked"></span> 4.7</span> <span class="views">10.5k Views</span></div>
                                                        <div class="pairas">
                                                            Lorem ipsum dolor sit amet psum dolore deserunt 
                                                        </div>
                                                    </div>
                                            </div>
                                        </div>
                                        </div>
                                </div>
                            </div>

                        </div>
                 </div>
            </div>
        </>
    )
}


export default GameDetail