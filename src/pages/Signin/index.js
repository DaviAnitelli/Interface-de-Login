import React from 'react';
import { 
    KeyboardView, 
    Container,
    Title, 
    Input, 
    ButtonSubmit, 
    TextSubmit
} from './styles';

export default function Signin(){
    return(
        <KeyboardView>
            <Container>
                <Title>Login</Title>
                <Input
                    placeholderTextColor="#fff"
                    placeholder="E-mail"
                />
                <Input 
                    placeholderTextColor="#fff"
                    placeholder="Senha"
                    secureTextEntry
                />
                <ButtonSubmit>
                    <TextSubmit>Logar</TextSubmit>
                </ButtonSubmit>
            </Container>
        </KeyboardView>
    )
}