import React, { FormEvent, useRef, useState, useCallback } from 'react';
import { FiMail, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationError';

import { Container, AnimationContent, Content, Background } from './styles';
import logoImg from '../../assets/Logo.svg';

import api from '../../services/api';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SingIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: FormEvent) => {
    try {
      const schema = Yup.object().shape({
        email: Yup.string().email('Insira um email valido').required('E-mail obrigatório'),
        password: Yup.string().min(6, 'Minimo 6 dígitos'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      const errors = getValidationErrors(err);

      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <Container>
      <Content>
        <AnimationContent>
          <img src={logoImg} width="90%" alt="Pinheiro de Queiroz" />

          <Form ref={formRef} onSubmit={handleSubmit}>
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
};

export default SingIn;
