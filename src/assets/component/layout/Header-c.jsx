import NavMenu from "./NavMenu";
import "./Layout-c.css";

const Header = () => {
  return (
    <header className="Header">
      <NavMenu />
        <div className="header-branding">
                <h1>Life Line Services</h1>
                <img src={`${import.meta.env.BASE_URL}LifeLineServicesIcon.png`} alt="Life Line Services Logo" />
            </div>
    </header>
  );
};

export default Header;
