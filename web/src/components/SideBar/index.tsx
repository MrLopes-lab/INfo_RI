import React from 'react';
import { FiPower } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import logoIcon from '../../assets/Icon.svg';
import { useAuth } from '../../hooks/auth';

import { Container, Content } from './styles';

const SideBar: React.FC = () => {
  const { singOut } = useAuth();

  return (
    <Container className="sidebar">
      <img src={logoIcon} alt="Pinheiro de Queiroz" />

      <Content>
        <Link to="/#">GERAL</Link>
        <Link to="/#">OPERADORES</Link>
        <Link to="/#">MATRICULAS</Link>
      </Content>

      <footer>
        <button type="button" onClick={singOut}>
          <FiPower size={24} color="#fff" />
        </button>
      </footer>
    </Container>
  );
};

export default SideBar;
