import SearchBar from "../SearchBar/SearchBar"
import {NavLink, useNavigate} from "react-router-dom"
import "./Nav.css"

const Nav = ({onSearch ,setAccess}) => {
    const navigate=useNavigate()
    const handleLogOut = () => {
        setAccess(false);
        navigate("/");
    }
    return (
        <nav >
            <div className="seasonmessage">
                <p className="Movingtext">Season 7 COMING SOON! RELEASE DATE: 2023</p>
            </div>
        <div className="Navigation">
            <div className="Buttons">
            <NavLink className="aboutButton" to = "/about">ABOUT</NavLink>
            <NavLink className="homeButton"to = "/home">HOME</NavLink>
            <NavLink className="favoritesButton"to = "/favorites">FAVORITES</NavLink>
            </div>

        <button className="logout" onClick={handleLogOut}>Log Out</button>
        <SearchBar onSearch={onSearch}/>
        </div>
        </nav>
        
    )
}

export default Nav;