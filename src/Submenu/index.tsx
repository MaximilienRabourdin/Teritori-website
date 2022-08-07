import React from 'react';
import './SubmenuStyled.css';

const Submenu: React.FC = () => {
  return (
    <nav className="dropdownmenu">
    <ul>
      <li><a href="#">Commmunity</a>
        <ul id="submenu">
          <li><a href="/grants">Grants</a></li>
        </ul>
      </li>
    </ul>
  </nav>
  );
};

export default Submenu;
