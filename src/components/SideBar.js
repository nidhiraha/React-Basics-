import React, { useState } from 'react';
import { Menu } from 'lucide-react';


function Sidebar() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="sidebar">
      <button className="toggle-btn" onClick={()=>{setToggle(!toggle)}}>
        <Menu size={20} />
      </button>

     {toggle && <nav className="nav-menu">
        <ul className="nav-list">
          <li className="nav-item">Home</li>
          <li className="nav-item">About</li>
          <li className="nav-item">Services</li>
          <li className="nav-item">Contact</li>
        </ul>
      </nav>}
    </div>
  );
}

export default Sidebar;
