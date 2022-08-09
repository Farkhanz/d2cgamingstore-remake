import { Link } from "react-router-dom"
import Home from "../../pages/Home"
import "./Navbar.css"

const Navbar = () => {
    return (
        <div className="Navbar">
            <div className="leftSide">
                <img src="https://d2cgamingstore.com/assets/images/profile/Logo_Web-01.png" className="logoditusi" alt="" />
                <div className="menu">
                    <Link className="linkmenu" to="/">Home</Link>
                    <Link className="linkmenu" to="/">Top up</Link>
                    <Link className="linkmenu" to="/">About us</Link>
                    <Link className="linkmenu" to="/">Articles</Link>
                </div>
            </div>
            <div className="rightSide">
                <input type="text" className="searchBox" placeholder="Cari Game Favoritmu disini!" />
                <button className="buttonSearch">Cari</button>
            </div>
        </div>
    )
}

export default Navbar