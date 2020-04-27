import React from 'react';

import logoImg from '../../assets/logo.svg';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';
import { Container, Content, Background } from './styles';
import { Form } from '@unform/web';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignUp: React.FC = () => {
    function handleSubmit(data: object): void {
        console.log(data);
    }
    return (
        <Container>
            <Background />
            <Content>
                <img src={logoImg} alt="GoBarber" />

                <Form onSubmit={handleSubmit}>
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
                </Form>
                <a href="teste">
                    <FiArrowLeft />
                    Voltar
                </a>
            </Content>
        </Container>
    );
};

export default SignUp;
