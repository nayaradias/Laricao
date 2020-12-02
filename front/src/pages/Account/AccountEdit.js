import React, { useState, useEffect } from 'react';
import {
    Container,
    Text,
    Title,
} from "../../style/global/general";
import {
    Content,
    ContentMenu,
    ContainerInput,
    Input,
    Buttom
}
    from "../../style/pages/accountEdit";

import { FontAwesome } from '@expo/vector-icons';
import colors from "../../style/global/colors";
import api from '../../services/api';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
const createTost = (message) => {
    toast.error(message, {
        position: toast.POSITION.BOTTOM_CENTER
    });
}

const AccountEdit = ({ navigation, route }) => {
    const [user, setUser] = useState(null);
    const [name, setName] = useState("");
    const [password, setPassaword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState(null);
    useEffect(() => {
        if (route?.params)
            setUser(route?.params.user);
    }, []);
    const store = async ({ name, phoneNumber, password }) => {

        await api.post("user/edit", {
            id: user._id,
            Email: user.Email,
            Password: password,
            Name: name,
            PhoneNumber: phoneNumber,
        }).then((res) => {
            console.log('store on edit:', res.data);
            res.data.user.ok !== 1 ? createTost("Erro na atualizaçao ") : navigation.navigate('Account');
        }).catch((error) => {

            createTost(error);
        });

    };
    console.log("user Edit:", user);
    return (
        <>
            <ToastContainer />
            <Container>
                <Content>
                    <ContentMenu>
                        <Title fontFamily="Lobster" textAlign="center">Editar Conta</Title>
                        <FontAwesome name="edit" size={24} color={colors.orange} />
                        {/* 
  
  // Address: 
  //   State: { type: String, required: false },
  //   City: { type: String, required: false },
  //   Neighborhood: { type: String, required: false },
  //   Number: { type: Number, required: false }

  // Payment: ['money', 'picpay', 'Credit card', 'Debit card',],
  */}
                        <ContainerInput>
                            <FontAwesome name="user" size={20} color={colors.orange} />
                            <Input placeholder="Nome"
                                type="text"
                                required
                                value={name}
                                onChangeText={name => setName(name)}
                            />
                        </ContainerInput>
                        <ContainerInput>
                            <FontAwesome name="phone" size={20} color={colors.orange} />
                            <Input placeholder="Telefone"
                                type="text"
                                required
                                value={phoneNumber}
                                onChangeText={PhoneNumber => setPhoneNumber(Number(PhoneNumber))}
                            />
                        </ContainerInput>
                        <ContainerInput>
                            <FontAwesome name="key" size={20} color={colors.orange} />
                            <Input placeholder="Senha"
                                secureTextEntry
                                type="password"
                                required
                                name="password"
                                value={password}
                                onChangeText={password => setPassaword(password)}
                            />
                        </ContainerInput>

                        <Buttom onPress={() => store({ name, phoneNumber, password })}>
                            <Text fontFamily="Lobster" color={colors.white} fontSize={18}>
                                Atualizar
                        </Text>
                        </Buttom>
                    </ContentMenu>
                </Content>
            </Container>
        </>
    );
}


export default AccountEdit;