import React, { useState } from "react";
import { FontAwesome } from '@expo/vector-icons';
import colors from "../../style/global/colors";
import AsyncStorage from '@react-native-community/async-storage';
import {
    Container,
    ContainerLogo,
    Logo,
    Title,
    Text,
} from "../../style/global/general";
import {
    Header,
    Buttom,
    Input,
    ContainerTile,
    Form,
    ContainerInput,
    Link,
} from "../../style/pages/signin";
import api from '../../services/api';


const SignIn = ({navigation}) => {
    const [email, setEmail] = useState("");
    const [password, setPassaword] = useState("");
    const login = async ({ email, password }) => {
        try {
            const response = await api.post("user/login", {
                email,
                password,
            });
            if (response.status === 200) {
                AsyncStorage.setItem('token', response.data.token);
                AsyncStorage.setItem('user', response.data.user);
                navigation.navigate('Laricao');
            }
        } catch (err) {
            
            console.log("ERR Catch:", err);
        }
    };
    return (
        <Container>
            <Form>
                <ContainerInput>
                    <FontAwesome name="envelope" size={20} color={colors.orange} />
                    <Input placeholder="Email"
                        type="mail"
                        required
                        name="email"
                        value={email}
                        onChangeText={email => setEmail(email)}
                    />
                </ContainerInput>
                <ContainerInput>
                    <FontAwesome name="key" size={20} color={colors.orange} />
                    <Input placeholder="Senha"
                        type="password"
                        required
                        name="password"
                        value={password}
                        onChangeText={password => setPassaword(password)}
                    />
                </ContainerInput>
                <Buttom onPress={() => login({ email, password })}>
                    <Text color={colors.white} fontSize={18} fontFamily="Lobster">
                        Entrar
                     </Text>
                </Buttom>
                <Link onPress={() => navigation.navigate('SignUp')}>
                    <Text>Não possui conta? <Text color={colors.orange}>Cadastre-se</Text></Text>
                </Link>
            </Form>
            <Header>
                <ContainerTile>
                    <ContainerLogo marginTop={-110}>
                        <Logo source={require("../../assets/icons/LogoIcon.svg")} />
                    </ContainerLogo>
                    <Title fontFamily="Lobster" color={colors.white} fontSize={30} fontWeight="bold">
                        Login
                     </Title>
                </ContainerTile>
            </Header>
        </Container>
    );
}

export default SignIn;