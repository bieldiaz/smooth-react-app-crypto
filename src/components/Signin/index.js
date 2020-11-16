import React from 'react'
import {
    FormWrap,
    FormLabel,
    FormContent,
    Form,
    FormH1,
    FormInput,
    FormButton,
    Text,
    Container,
    Icon
} from './SigninElements'

function index() {
    return (
        <Container>
            <FormWrap>
                <Icon to="/">
                    crypto
                </Icon>
                <FormContent>
                    <Form action="#">
                        <FormH1>Sign in to your account</FormH1>
                        <FormLabel htmlFor="for">Email</FormLabel>
                        <FormInput type="email" required></FormInput>
                        <FormLabel htmlFor="for">Password</FormLabel>
                        <FormInput type="password" required></FormInput>
                        <FormButton type="submit">Sign in</FormButton>
                        <Text>Forgot password?</Text>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
    )
}

export default index
