import React from 'react';

const Header = () => {
    return (
        <nav>
        <div className="topo">
          <a href="/" className="brand-logo">Dicas MEI</a>
          <ul className="right">
            <li><a href="/">Sobre</a></li>
          </ul>
        </div>
      </nav>
    );
}

export default Header;