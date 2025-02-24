import '../../styles/components/layout/_header.scss';


export default function Header() {
  return (
    <>
      <header className="header">
        <div className="header-container">
          <h1 className="header-title">My App Header</h1>
          <nav>
            <ul className="header-nav">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
        </div>
      </header>
      
    </>
  );
};

