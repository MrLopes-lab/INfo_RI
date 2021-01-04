import React, { FormEvent, useRef, useState } from 'react';
import { FiMail, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { Link } from 'react-router-dom';

import { Container, AnimationContent, Content, Background } from './styles';
import logoImg from '../../assets/Logo.svg';

import api from '../../services/api';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SingIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleCreateSession(e: FormEvent): void{
    e.preventDefault();

    api.post('/sessions', {
      email,
      password,
    })
    .then(() => {
      alert('Aguarde...');
    })
    .catch(() => {
      alert('Email ou senha inválidos!');
    });
  }

  return (
    <Container>
      <Content>
        <AnimationContent>
          <img src={logoImg} width="90%" alt="Pinheiro de Queiroz" />

          <Form ref={formRef} onSubmit={handleCreateSession}>
            <h1>Faça seu Logon</h1>

            <Input name="email" icon={FiMail} placeholder="Email" />
            <Input
                type="password"
                name="password"
                icon={FiLock}
                placeholder="Senha"
              />

              <Button type="submit">Entrar</Button>

              <a href="forgot">Esqueci minha senha</a>
          </Form>
        </AnimationContent>
      </Content>
      <Background />
    </Container>


    // <div id="page-landing">
    //   <div className="content-wrapper">
    //     <div className="logo">
    //       <img src={logoImg} alt="Pinheiro de Queiroz" />
    //     </div>

    //     <div className="main-text-grid">
    //       <main>
    //         <h1>Informatização do Registro de Imoveis</h1>
    //       </main>
    //     </div>

    //     <div className="location-grid">
    //       <div className="location-text">
    //         <strong>Conceição do Araguaia</strong>
    //         <span>Pará</span>
    //       </div>
    //       <div className="location-icon">
    //         <FiMapPin color="#ffffff" size={56} />
    //       </div>
    //     </div>

    //     <div className="user-form-grid">
    //       <form className="user-form" onSubmit={handleCreateSession}>
    //         <div className="input-block">
    //           <label htmlFor="name">Nome</label>
    //           <input
    //             id="name"
    //             type="text"
    //             value={email}
    //             onChange={e => setEmail(e.target.value)}
    //           />
    //         </div>

    //         <div className="input-block">
    //           <label htmlFor="name">Senha</label>
    //           <input
    //             id="password"
    //             type="password"
    //             value={password}
    //             onChange={e => setPassword(e.target.value)}
    //           />
    //         </div>

    //         <div className="enter-app-grid">
    //       <button type="submit" className="enter-app">
    //         <FiArrowRight color="#5C8599" size={36}  />
    //       </button>
    //     </div>
    //       </form>
    //     </div>
    //   </div>
    // </div>
  );
}

export default SingIn;