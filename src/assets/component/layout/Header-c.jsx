import NavMenu from "./NavLink/NavMenu";
import './Layout-c.css';

const Header = () => {
     return (
    <header className="Header">
        <NavMenu />
          <h1>Life Line Services</h1>

            
          <img src="/LifeLineServiceDog Logo.png" alt="Life Line Services Logo" />
    </header>
  );
}

export default Header;