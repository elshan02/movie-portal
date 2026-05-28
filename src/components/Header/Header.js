import './Header.css';

function Header() {
  return (
    <>
      <header className="heather-header">
        <div className="header-inner">
         <div className="logo-container">
          <img
            src="/logo.png"
            alt="MoviePortal Logo"
            className="site-logo-img"
          />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;