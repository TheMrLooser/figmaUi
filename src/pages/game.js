import React from "react";
import '../style/game.css';
import img from '../images/img.png';
import dil from '../images/dil.png';
import image12 from '../images/image12.png';
import image13 from '../images/image 6113.png';
import image11 from '../images/image 6111.png';
import image6114 from '../images/image 6114.png';
import image15 from '../images/image15.png';
import image16 from '../images/image16.png';
import image17 from '../images/image17.png';
import image18 from '../images/image18.png';
import image19 from '../images/image19.png';
import image20 from '../images/image20.png';
import image21 from '../images/image21.png';
import Vector from '../images/Vector.png';
import logo from '../images/logo.png';
import {Link} from 'react-router-dom'


const Game =()=>{
    return(<>
            <div>
            {/* <div id="navbar">
        <img src={logo} alt="logo" id="logo"/>
        <div id="elementWrapper">
            <div class="element">Game</div>
            <div class="element">News</div>
            <div class="element">Allies</div>
            <div class="element">Badges</div>
        </div>
        <div id="buttonWrapper">
            <div class="buttons">Login</div>
            <div class="buttons">Sign Up</div>
        </div>
    </div> */}

    <div class="container">
        <div id="banner">
            <img src={img}></img>
            <div class="bannerDetail">
                <h3>Apeiron</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum dolorum molestiae accusantium, in atque nihil laudantium, delectus, quaerat corrupti doloribus tempore cupiditate praesentium consequatur dolore ipsa voluptas. Vero, facilis maxime.</p>
                <div id="trailerContainer">
                    <p>TRAILER</p>
                    <div class="playButton">
                        <img src={Vector} alt=""/>
                    </div>
                </div>
            </div>
        </div>
        <h1>Game WerePlaying</h1>
        <div class="gameWerePlaying">
         <div>
                <img src={image11} alt="image"/>
                <div class="crouselDetail">
                    <div class="gameType">Game Type</div>
                    <div class="crouselDetailWrapper">
                        <img src={dil} alt=""/>
                    </div>

                </div>
                <div class="descrption">
                    <div class="descriptionTitleWrapper"><span class="title">Axie Infinity</span> <span class="publisher">@Publisher Name</span></div>
                    <div class="rattingWrapper"><span class="ratting"><span class="fa fa-star checked"></span> 4.7</span> <span class="views">10.5k Views</span></div>
                    <div class="paira">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ipsum dolore deserunt enim ea velit nemo iusto officia ad possimus voluptates ....
                    </div>
                </div>
            </div>
           
            <div>
                <img src={image12} alt="image"/>
                <div class="crouselDetail">
                    <div class="gameType">Game Type</div>
                    <div class="crouselDetailWrapper">
                        <img src={dil} alt=""/>
                    </div>

                </div>
                <div class="descrption">
                    <div class="descriptionTitleWrapper"><span class="title">Axie Infinity</span> <span class="publisher">@Publisher Name</span></div>
                    <div class="rattingWrapper"><span class="ratting"><span class="fa fa-star checked"></span> 4.7</span> <span class="views">10.5k Views</span></div>
                    <div class="paira">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ipsum dolore deserunt enim ea velit nemo iusto officia ad possimus voluptates ....
                    </div>
                </div>
            </div>
            <div>
                <img src={image13} alt="image"/>
                <div class="crouselDetail">
                    <div class="gameType">Game Type</div>
                    <div class="crouselDetailWrapper">
                        <img src={dil} alt=""/>
                    </div>

                </div>
                <div class="descrption">
                    <div class="descriptionTitleWrapper"><span class="title">Axie Infinity</span> <span class="publisher">@Publisher Name</span></div>
                    <div class="rattingWrapper"><span class="ratting"><span class="fa fa-star checked"></span> 4.7</span> <span class="views">10.5k Views</span></div>
                    <div class="paira">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ipsum dolore deserunt enim ea velit nemo iusto officia ad possimus voluptates ....
                    </div>
                </div>
            </div>
            <div>
                <img src={image6114} alt="image"/>
                <div class="crouselDetail">
                    <div class="gameType">Game Type</div>
                    <div class="crouselDetailWrapper">
                        <img src={dil} alt=""/>
                    </div>

                </div>
                <div class="descrption">
                    <div class="descriptionTitleWrapper"><span class="title">Axie Infinity</span> <span class="publisher">@Publisher Name</span></div>
                    <div class="rattingWrapper"><span class="ratting"><span class="fa fa-star checked"></span> 4.7</span> <span class="views">10.5k Views</span></div>
                    <div class="paira">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ipsum dolore deserunt enim ea velit nemo iusto officia ad possimus voluptates ....
                    </div>
                </div>
            </div>
        </div>


        <h1>Live Now</h1>
        <div class="gameWerePlaying">
            <div>
                <img src={image15} alt="image"/>
                <div class="crouselDetail">
                    <div class="gameType">Game Type</div>
                    <div class="crouselDetailWrapper">
                        <img src={dil} alt=""/>
                    </div>

                </div>
                <div class="descrption">
                    <div class="descriptionTitleWrapper"><span class="title">Axie Infinity</span> <span class="publisher">@Publisher Name</span></div>
                    <div class="rattingWrapper"><span class="ratting"><span class="fa fa-star checked"></span> 4.7</span> <span class="views">10.5k Views</span></div>
                    <div class="paira">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ipsum dolore deserunt enim ea velit nemo iusto officia ad possimus voluptates ....
                    </div>
                </div>
            </div>
            <div>
                <img src={image20} alt="image"/>
                <div class="crouselDetail">
                    <div class="gameType">Game Type</div>
                    <div class="crouselDetailWrapper">
                        <img src={dil} alt=""/>
                    </div>

                </div>
                <div class="descrption">
                    <div class="descriptionTitleWrapper"><span class="title">Axie Infinity</span> <span class="publisher">@Publisher Name</span></div>
                    <div class="rattingWrapper"><span class="ratting"><span class="fa fa-star checked"></span> 4.7</span> <span class="views">10.5k Views</span></div>
                    <div class="paira">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ipsum dolore deserunt enim ea velit nemo iusto officia ad possimus voluptates ....
                    </div>
                </div>
            </div>
            <div>
                <img src={image21} alt="image"/>
                <div class="crouselDetail">
                    <div class="gameType">Game Type</div>
                    <div class="crouselDetailWrapper">
                        <img src={dil} alt=""/>
                    </div>

                </div>
                <div class="descrption">
                    <div class="descriptionTitleWrapper"><span class="title">Axie Infinity</span> <span class="publisher">@Publisher Name</span></div>
                    <div class="rattingWrapper"><span class="ratting"><span class="fa fa-star checked"></span> 4.7</span> <span class="views">10.5k Views</span></div>
                    <div class="paira">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ipsum dolore deserunt enim ea velit nemo iusto officia ad possimus voluptates ....
                    </div>
                </div>
            </div>
            <div>
                <img src={image15} alt="image"/>
                <div class="crouselDetail">
                    <div class="gameType">Game Type</div>
                    <div class="crouselDetailWrapper">
                        <img src={dil} alt=""/>
                    </div>

                </div>
                <div class="descrption">
                    <div class="descriptionTitleWrapper"><span class="title">Axie Infinity</span> <span class="publisher">@Publisher Name</span></div>
                    <div class="rattingWrapper"><span class="ratting"><span class="fa fa-star checked"></span> 4.7</span> <span class="views">10.5k Views</span></div>
                    <div class="paira">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ipsum dolore deserunt enim ea velit nemo iusto officia ad possimus voluptates ....
                    </div>
                </div>
            </div>
        </div>

        <h1>Comming Soon</h1>
        <div class="gameWerePlaying">
            <div>
                <img src={image16} alt="image"/>
                <div class="crouselDetail">
                    <div class="gameType">Game Type</div>
                    <div class="crouselDetailWrapper">
                        <img src={dil} alt=""/>
                    </div>

                </div>
                <div class="descrption">
                    <div class="descriptionTitleWrapper"><span class="title">Axie Infinity</span> <span class="publisher">@Publisher Name</span></div>
                    <div class="rattingWrapper"><span class="ratting"><span class="fa fa-star checked"></span> 4.7</span> <span class="views">10.5k Views</span></div>
                    <div class="paira">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ipsum dolore deserunt enim ea velit nemo iusto officia ad possimus voluptates ....
                    </div>
                </div>
            </div>
            <div>
                <img src={image17} alt="image"/>
                <div class="crouselDetail">
                    <div class="gameType">Game Type</div>
                    <div class="crouselDetailWrapper">
                        <img src={dil} alt=""/>
                    </div>

                </div>
                <div class="descrption">
                    <div class="descriptionTitleWrapper"><span class="title">Axie Infinity</span> <span class="publisher">@Publisher Name</span></div>
                    <div class="rattingWrapper"><span class="ratting"><span class="fa fa-star checked"></span> 4.7</span> <span class="views">10.5k Views</span></div>
                    <div class="paira">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ipsum dolore deserunt enim ea velit nemo iusto officia ad possimus voluptates ....
                    </div>
                </div>
            </div>
            <div>
                <img src={image18} alt="image"/>
                <div class="crouselDetail">
                    <div class="gameType">Game Type</div>
                    <div class="crouselDetailWrapper">
                        <img src={dil} alt=""/>
                    </div>

                </div>
                <div class="descrption">
                    <div class="descriptionTitleWrapper"><span class="title">Axie Infinity</span> <span class="publisher">@Publisher Name</span></div>
                    <div class="rattingWrapper"><span class="ratting"><span class="fa fa-star checked"></span> 4.7</span> <span class="views">10.5k Views</span></div>
                    <div class="paira">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ipsum dolore deserunt enim ea velit nemo iusto officia ad possimus voluptates ....
                    </div>
                </div>
            </div>
            <div>
                <img src={image19} alt="image"/>
                <div class="crouselDetail">
                    <div class="gameType">Game Type</div>
                    <div class="crouselDetailWrapper">
                        <img src={dil} alt=""/>
                    </div>

                </div>
                <div class="descrption">
                    <div class="descriptionTitleWrapper"><span class="title">Axie Infinity</span> <span class="publisher">@Publisher Name</span></div>
                    <div class="rattingWrapper"><span class="ratting"><span class="fa fa-star checked"></span> 4.7</span> <span class="views">10.5k Views</span></div>
                    <div class="paira">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ipsum dolore deserunt enim ea velit nemo iusto officia ad possimus voluptates ....
                    </div>
                </div>
            </div>
        </div>
        <h1>Free-To-Play</h1>
        <div class="gameWerePlaying">
            <div>
                <img src={image20} alt="image"/>
                <div class="crouselDetail">
                    <div class="gameType">Game Type</div>
                    <div class="crouselDetailWrapper">
                        <img src={dil} alt=""/>
                    </div>

                </div>
                <div class="descrption">
                    <div class="descriptionTitleWrapper"><span class="title">Axie Infinity</span> <span class="publisher">@Publisher Name</span></div>
                    <div class="rattingWrapper"><span class="ratting"><span class="fa fa-star checked"></span> 4.7</span> <span class="views">10.5k Views</span></div>
                    <div class="paira">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ipsum dolore deserunt enim ea velit nemo iusto officia ad possimus voluptates ....
                    </div>
                </div>
            </div>
            <div>
                <img src={image21} alt="image"/>
                <div class="crouselDetail">
                    <div class="gameType">Game Type</div>
                    <div class="crouselDetailWrapper">
                        <img src={dil} alt=""/>
                    </div>

                </div>
                <div class="descrption">
                    <div class="descriptionTitleWrapper"><span class="title">Axie Infinity</span> <span class="publisher">@Publisher Name</span></div>
                    <div class="rattingWrapper"><span class="ratting"><span class="fa fa-star checked"></span> 4.7</span> <span class="views">10.5k Views</span></div>
                    <div class="paira">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ipsum dolore deserunt enim ea velit nemo iusto officia ad possimus voluptates ....
                    </div>
                </div>
            </div>
            <div>
                <img src={image12} alt="image"/>
                <div class="crouselDetail">
                    <div class="gameType">Game Type</div>
                    <div class="crouselDetailWrapper">
                        <img src={dil} alt=""/>
                    </div>

                </div>
                <div class="descrption">
                    <div class="descriptionTitleWrapper"><span class="title">Axie Infinity</span> <span class="publisher">@Publisher Name</span></div>
                    <div class="rattingWrapper"><span class="ratting"><span class="fa fa-star checked"></span> 4.7</span> <span class="views">10.5k Views</span></div>
                    <div class="paira">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ipsum dolore deserunt enim ea velit nemo iusto officia ad possimus voluptates ....
                    </div>
                </div>
            </div>
            <div>
                <img src={image11} alt="image"/>
                <div class="crouselDetail">
                    <div class="gameType">Game Type</div>
                    <div class="crouselDetailWrapper">
                        <img src={dil} alt=""/>
                    </div>

                </div>
                <div class="descrption">
                    <div class="descriptionTitleWrapper"><span class="title">Axie Infinity</span> <span class="publisher">@Publisher Name</span></div>
                    <div class="rattingWrapper"><span class="ratting"><span class="fa fa-star checked"></span> 4.7</span> <span class="views">10.5k Views</span></div>
                    <div class="paira">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ipsum dolore deserunt enim ea velit nemo iusto officia ad possimus voluptates ....
                    </div>
                </div>
            </div>
        </div>
    </div>
            </div>
    </>)
}


export default Game