import NavMenu from "./NavMenu";
import "./Layout-c.css";

const Header = () => {
  return (
    <header className="Header">
      <NavMenu />
        <div className="header-branding">
                <h1>Lotus Wolf Foundation</h1>
                <img src={`${import.meta.env.BASE_URL}LotusWolfFoundationIcon.png`} alt="Lotus Wolf Foundation Icon" />
            </div>
    </header>
  );
};

export default Header;
