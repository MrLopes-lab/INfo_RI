import React from 'react';
import Card from '../../components/Card';
import PageHeader from '../../components/PageHeader';
import SideBar from '../../components/Sidebar';

import { Container, Content } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <SideBar />

      <PageHeader title="" description="" />

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
