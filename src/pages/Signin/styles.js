import styled from 'styled-components/native';

export const KeyboardView = styled.KeyboardAvoidingView`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #000;
`;

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding-bottom: 30px;
    width: 90%;
`;

export const Title = styled.Text`
    color: white;
    font-size: 26px;
    font-weight: bold;
    margin-bottom: 20px;
`;

export const Input = styled.TextInput`
    height: 10%;
    border: 2px solid #000FFF;
    margin-bottom: 30px;
    font-size: 20px;
    padding: 15px 20px;
    border-radius: 9px;
    color: white;
    width: 90%;
`;

export const ButtonSubmit = styled.TouchableOpacity`
    background-color: #A287f4;
    border-radius: 9px;
    width: 90%;
    padding: 20px;
    align-items: center;
`;

export const TextSubmit = styled.Text`
    color: #FFF;
    font-size: 16px;
    font-weight: bold;
`;