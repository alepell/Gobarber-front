import React, { useCallback, useRef } from 'react';

import logoImg from '../../assets/logo.svg';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';
import { Container, Content, Background } from './styles';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import Input from '../../components/Input';
import Button from '../../components/Button';
import getValidationErrors from '../../utils/getValidationErrors';

const SignUp: React.FC = () => {
    const formRef = useRef<FormHandles>(null);

    const handleSubmit = useCallback(async (data: object) => {
        try {
            formRef.current?.setErrors({});
            const schema = Yup.object().shape({
                name: Yup.string().required('Nome Obrigatorio'),
                email: Yup.string()
                    .required('E-mail obrigatorio')
                    .email('Digite um e-mail valido'),
                password: Yup.string().min(
                    6,
                    'minimo 6 caracteres',
                ),
            });

            await schema.validate(data, {
                abortEarly: false,
            });
        } catch (err) {

            const errors = getValidationErrors(err)
            formRef.current?.setErrors(errors);
        }
    }, []);
    return (
        <Container>
            <Background />
            <Content>
                <img src={logoImg} alt="GoBarber" />

                <Form ref={formRef} onSubmit={handleSubmit}>
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
