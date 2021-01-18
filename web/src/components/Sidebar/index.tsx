import React, { useState } from 'react';
import * as FiIcons from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';
import { SidebarData } from './sidebarData';

import { Container, Nav } from './styles';

const SideBar: React.FC = () => {
  const [sidebar, setSidebar] = useState(true);

  const showSidebar = () => setSidebar(!sidebar);
  const { singOut } = useAuth();

  return (
    <Container>
      <Nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className="nav-menu-item">
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
          <li className="navbar-singOut">
            <button type="button" onClick={singOut}>
              <FiIcons.FiPower size={24} color="#fff" />
            </button>
          </li>
        </ul>
      </Nav>
    </Container>
  );
};

export default SideBar;
