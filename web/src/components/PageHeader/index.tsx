import React from 'react';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';

import logoIcon from '../../assets/Icon.svg';
import { Container, TopBarContainer, HeaderContent } from './styles';

interface PageHeaderPros {
  title: string;
  description?: string;
}

const PageHeader: React.FC<PageHeaderPros> = ({
  title,
  description,
  children,
}) => {
  return (
    <Container>
      <TopBarContainer>
        <Link to="/">
          <img src={logoIcon} alt="Pinheiro de Queiroz" />
        </Link>
        <FiIcons.FiCodesandbox />
      </TopBarContainer>

      <HeaderContent>
        <strong>{title}</strong>
        {description && <p>{description}</p>}

        {children}
      </HeaderContent>
    </Container>
  );
};

export default PageHeader;
