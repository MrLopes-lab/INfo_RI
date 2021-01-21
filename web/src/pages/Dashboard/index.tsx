import React from 'react';
import { format } from 'date-fns';
import { Form } from '@unform/web';
import * as FiIcons from 'react-icons/fi';

import Button from '../../components/Button';
import Card from '../../components/Card';
import PageHeader from '../../components/PageHeader';
import SideBar from '../../components/Sidebar';
import Input from '../../components/Input';

import { Container, Content, AddRegistriesTable } from './styles';

const Dashboard: React.FC = () => {
  const dateNow = format(new Date(), 'MM/dd/yyyy');

  return (
    <Container>
      <SideBar />

      <PageHeader title="" description="" />

      <Content>
        <h1>{dateNow}</h1>
        <AddRegistriesTable>
          <table>
            <tbody>
              <tr>
                <td>
                  <h3>Marcelo</h3>
                </td>
                <td>
                  <Form onSubmit={() => {}}>
                    <Input
                      name="Matriculas"
                      icon={FiIcons.FiFileText}
                      placeholder="Matriculas"
                    />
                  </Form>
                </td>
                <td>
                  <Button>Adicionar</Button>
                </td>
              </tr>

              <tr>
                <td>
                  <h3>Marcelo</h3>
                </td>
                <td>
                  <Form onSubmit={() => {}}>
                    <Input
                      name="Matriculas"
                      icon={FiIcons.FiFileText}
                      placeholder="Matriculas"
                    />
                  </Form>
                </td>
                <td>
                  <Button>Adicionar</Button>
                </td>
              </tr>

              <tr>
                <td>
                  <h3>Marcelo</h3>
                </td>
                <td>
                  <Form onSubmit={() => {}}>
                    <Input
                      name="Matriculas"
                      icon={FiIcons.FiFileText}
                      placeholder="Matriculas"
                    />
                  </Form>
                </td>
                <td>
                  <Button>Adicionar</Button>
                </td>
              </tr>
            </tbody>
          </table>
        </AddRegistriesTable>
      </Content>
    </Container>
  );
};

export default Dashboard;
