import "./Home.css"
import Header from '../components/header/Header.jsx'
import Navbar from '../components/navbar/Navbar.jsx'
import Content from '../components/content/Content.jsx'
import Slide from "../components/header/Slide"

const Home = () => {
  return (
    <div className="page line-bottom">
      <Navbar />
      <Header />
      <h2 className="titlePopular">
        <img src="https://d2cgamingstore.com/assets/images/home/d2c2.png"
          width={40}
          alt="" />
        Game Populer
      </h2>
      <Content />
      <h2 className="titlePopular">
        <img src="https://d2cgamingstore.com/assets/images/home/d2c2.png"
          width={40}
          alt="" />
        Game Populer
      </h2>
      <Content />
      {/* Hello ditusian */}
    </div>
  )
}

export default Home