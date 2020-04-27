import React from 'react';

import logoImg from '../../assets/logo.svg';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';
import { Container, Content, Background } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignUp: React.FC = () => (
    <Container>
        <Background />
        <Content>
            <img src={logoImg} alt="GoBarber" />

            <form>
                <h1>Registre-se</h1>

                <Input icon={FiUser} name="name" placeholder="Nome" />

                <Input icon={FiMail} name="email" placeholder="E-mail" />

                <Input
                    icon={FiLock}
                    name="password"
                    type="password"
                    placeholder="Senha"
                />

                <Button type="submit">Cadastrar</Button>
            </form>
            <a href="teste">
                <FiArrowLeft />
                Voltar
            </a>
        </Content>
    </Container>
);

export default SignUp;
