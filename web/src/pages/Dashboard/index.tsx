import React, { useCallback, useEffect, useState } from 'react';
import { format } from 'date-fns';
import { Form } from '@unform/web';
import * as FiIcons from 'react-icons/fi';
import { v4 } from 'uuid';

import Button from '../../components/Button';
import PageHeader from '../../components/PageHeader';
import SideBar from '../../components/Sidebar';
import Input from '../../components/Input';

import {
  Container,
  Content,
  AddRegistriesTable,
  ContainerRegisterToast,
  RegisterToast,
} from './styles';
import api from '../../services/api';

interface AddRegisterItens {
  id: string;
  register: string;
}

interface Operator {
  id: string;
  name: string;
}

const Dashboard: React.FC = () => {
  const dateNow = format(new Date(), 'MM/dd/yyyy');

  const [operators, setOperators] = useState<Operator[]>([]);

  useEffect(() => {
    api.get('operators').then(response => {
      setOperators(response.data);
      console.log(operators);
    });
  }, [operators]);

  const [registerItens, setRegisterItens] = useState<AddRegisterItens[]>([]);

  const handleAddRegisterItem = useCallback((data: AddRegisterItens) => {
    setRegisterItens(state => state.concat(data));
  }, []);

  const handleRemoveRegisterItem = useCallback((id: string) => {
    setRegisterItens(state => state.filter(item => item.id !== id));
  }, []);

  return (
    <Container>
      <SideBar />

      <PageHeader title="" description="" />

      <Content>
        <h1>{dateNow}</h1>

        {operators.map(operatorData => (
          <AddRegistriesTable>
            <table>
              <thead>
                <tr>
                  <th>
                    <span>{operatorData.name}</span>
                  </th>
                  <th>
                    <Form onSubmit={handleAddRegisterItem}>
                      <Input
                        name="register"
                        icon={FiIcons.FiFileText}
                        placeholder="Matriculas"
                      />
                      <Button type="submit">Adicionar</Button>
                    </Form>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th colSpan={3}>
                    <ContainerRegisterToast>
                      {registerItens.map(data => (
                        <RegisterToast key={v4()}>
                          <div>
                            <strong>{data.register}</strong>
                          </div>
                          <button type="button" onClick={() => {}}>
                            <FiIcons.FiXCircle size={18} />
                          </button>
                        </RegisterToast>
                      ))}
                    </ContainerRegisterToast>
                  </th>
                </tr>
              </tbody>
            </table>
          </AddRegistriesTable>
        ))}
      </Content>
    </Container>
  );
};

export default Dashboard;
