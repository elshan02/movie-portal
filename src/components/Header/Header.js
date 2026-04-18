import './Header.css';

function Header() {
  return (
    <>
      <header className="heather-header">
        <div className="header-inner">
          <div className="logo">
            <svg className="logo-icon" viewBox="0 0 32 32" fill="none">
              <rect x="3" y="6" width="26" height="20" rx="3" stroke="#d4a43c" strokeWidth="1.5"/>
              <rect x="3" y="10" width="26" height="1.5" fill="#d4a43c" opacity="0.4"/>
              <rect x="3" y="20" width="26" height="1.5" fill="#d4a43c" opacity="0.4"/>
              <circle cx="7.5" cy="8" r="1.2" fill="#d4a43c"/>
              <circle cx="24.5" cy="8" r="1.2" fill="#d4a43c"/>
              <circle cx="7.5" cy="24" r="1.2" fill="#d4a43c"/>
              <circle cx="24.5" cy="24" r="1.2" fill="#d4a43c"/>
              <polygon points="13,13 13,19 20,16" fill="#d4a43c"/>
            </svg>
            <span className="logo-text">Movie<span className="logo-accent">portal</span></span>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;