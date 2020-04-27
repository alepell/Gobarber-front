import React from 'react';

import logoImg from '../../assets/logo.svg';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Container, Content, Background } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignIn: React.FC = () => (
    <Container>
        <Content>
            <img src={logoImg} alt="GoBarber" />

            <form>
                <h1>Login</h1>

                <Input icon={FiMail} name="email" placeholder="E-mail" />

                <Input icon={FiLock} name="password" type="password" placeholder="Senha" />

                <Button type="submit">Entrar</Button>

                <a href="teste">Esqueci minha senha</a>
            </form>
            <a href="teste">
                <FiLogIn />
                Criar conta
            </a>
        </Content>
        <Background />
    </Container>
);

export default SignIn;
