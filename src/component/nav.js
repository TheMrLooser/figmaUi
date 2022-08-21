import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import '../style/game.css';



const Navbar = ()=>{
    return(<>
         <div id="navbar">
        <img src={logo} alt="logo" id="logo"/>
        <div id="elementWrapper">
            <Link to={'/game'} style={{textDecoration:"none"}}><div class="element">Game</div></Link>
            <div class="element">News</div>
           <Link to={'/allise'} style={{textDecoration:"none"}}><div class="element">Allies</div></Link> 
            <div class="element">Badges</div>
        </div>
        <div id="buttonWrapper">
            <div class="buttons">Login</div>
            <div class="buttons">Sign Up</div>
        </div>
    </div>
    </>)
}


export default Navbar