import React, { useRef, useCallback } from 'react';
import { FiMail, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationError';

import { Container, AnimationContent, Content, Background } from './styles';
import logoImg from '../../assets/Logo.svg';

import { useAuth } from '../../hooks/auth';

import Input from '../../components/Input';
import Button from '../../components/Button';
import { useToast } from '../../hooks/toast';

interface SingInFormData {
  email: string;
  password: string;
}

const SingIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { singIn } = useAuth();
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: SingInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('Email obrigatório')
            .email('Insira um email valido'),
          password: Yup.string().required('Senha obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await singIn({
          email: data.email,
          password: data.password,
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        }

        addToast({
          type: 'error',
          title: 'Erro na autenticação',
          description: 'Ocorreu um erro ao fazer login!',
        });
      }
    },
    [singIn, addToast],
  );

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
  );
};

export default SingIn;
