import React from 'react';
import Sidebar from '../../components/SideBar';

import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
} from 'react-icons/md'

import { Card, CardContainer, Container, TableContainer } from './style';

function App() {
  return (
    <>
      <Sidebar />

      <Container>
        <CardContainer>
          <Card>
            <header>
              <p>Entradas</p>
              <MdAddCircleOutline size={20} />
            </header>
            <h1>2000</h1>
          </Card>
          <Card>
            <header>
              <p>Saídas</p>
              <MdAddCircleOutline size={20} />
            </header>
            <h1>30000</h1>
          </Card>
          <Card total>
            <header>
              <p>Concluídas</p>
              <MdAddCircleOutline size={20} />
            </header>
            <h1>40000</h1>
          </Card>
        </CardContainer>

        <TableContainer>
          <table>
            <thead>
              <tr>
                <th>Funcionário</th>
                <th>Entregues Hoje</th>
                <th>Concluídas</th>
              </tr>
            </thead>

            <tbody>
              {/* {transactions.map(transaction => ( */}
              <tr>

                <td>MARCELO</td>

                <td>
                  <div>
                    <button type="button">
                      <MdRemoveCircleOutline
                        size={20}
                        color="#7159c1"
                      // onClick={() => decrement(product)}
                      />
                    </button>
                    <span>22</span>
                    <button type="button">
                      <MdAddCircleOutline
                        size={20}
                        color="#7159c1"
                      // onClick={() => increment(product)}
                      />
                    </button>
                  </div>
                </td>

                <td>15</td>
              </tr>
            </tbody>
          </table>
        </TableContainer>
      </Container>
    </>
  );
}

export default App;