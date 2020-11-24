import React, { useState } from "react";
import { FontAwesome } from '@expo/vector-icons';
import colors from "../../style/global/colors";
import AsyncStorage from '@react-native-community/async-storage';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
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

const SignIn = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassaword] = useState("");

    const createTost = (message) => {
        toast.error(message, {
            position: toast.POSITION.BOTTOM_CENTER
        });
    }
    const login = async ({ email, password }) => {
        await api.post("user/login", {
            email,
            password,
        }).then((res) => {
            console.log("then:", res);
            if (res.status === 200) {
                AsyncStorage.setItem('token', res.data.token);
                AsyncStorage.setItem('user', res.data.user);
                navigation.navigate('Laricao');
            }
            res.data.erro != undefined ? createTost(res.data.erro) : createTost(res.data.message);

        }).catch((err) => {
            createTost(err);
        });
    };

    return (
        <>
            <ToastContainer />
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
                            secureTextEntry
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
        </>
    );
}

export default SignIn;