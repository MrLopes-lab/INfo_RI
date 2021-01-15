import React from 'react';
import Card from '../../components/Card';
import SideBar from '../../components/SideBar';

import { Container, Content } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <SideBar />

      <Content>
        <Card>
          <h1>HELLO TESTE</h1>
        </Card>

        <Card>
          <h1>HELLO TESTE</h1>
        </Card>
      </Content>
    </Container>
  );
};

export default Dashboard;
