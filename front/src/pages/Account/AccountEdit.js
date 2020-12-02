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
    Buttom,
    ContainerPayment,
    ButtomPayment
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

    const [phoneNumber, setPhoneNumber] = useState(null);
    const [state, setState] = useState("");
    const [city, setCity] = useState("");
    const [neighborhood, setNeighborhood] = useState("");
    const [number, setNumber] = useState("");
    const [payment, setPayment] = useState("");
    const [activePayment, setActivePayment] = useState("");

    useEffect(() => {
        if (route?.params)
            setUser(route?.params.user);
        setActivePayment(route?.params.user.Payment);
    }, []);
    const store = async ({ name, phoneNumber, state, city, neighborhood, number, payment }) => {

        await api.post("user/edit", {
            id: user._id,
            Name: name,
            PhoneNumber: phoneNumber,
            State: state,
            City: city,
            Neighborhood: neighborhood,
            Number: number,
            Payment: payment,
        }).then((res) => {
            console.log('store on edit:', res.data);
            res.data.user.ok !== 1 ? createTost("Erro na atualizaçao ") : navigation.navigate('Account');
        }).catch((error) => {

            createTost(error);
        });

    };
    // console.log("activePayment:", activePayment);
    return (
        <>
            <ToastContainer />
            <Container>
                <Content>
                    <ContentMenu>
                        <Title fontFamily="Lobster" textAlign="center">Editar Conta</Title>
                        <FontAwesome name="edit" size={24} color={colors.orange} />

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
                            <FontAwesome name="map-marker" size={20} color={colors.orange} />
                            <Input placeholder="Estado"
                                type="text"
                                value={state}
                                onChangeText={state => setState(state)}
                            />
                        </ContainerInput>
                        <ContainerInput>
                            <FontAwesome name="map-marker" size={20} color={colors.orange} />
                            <Input placeholder="Cidade"
                                type="text"
                                value={city}
                                onChangeText={city => setCity(city)}
                            />
                        </ContainerInput>

                        <ContainerInput>
                            <FontAwesome name="map-marker" size={20} color={colors.orange} />
                            <Input placeholder="Bairro"
                                type="text"
                                value={neighborhood}
                                onChangeText={neighborhood => setNeighborhood(neighborhood)}
                            />
                        </ContainerInput>
                        <ContainerInput>
                            <FontAwesome name="map-marker" size={20} color={colors.orange} />
                            <Input placeholder="Número"
                                type="text"
                                value={number}
                                onChangeText={number => setNumber(Number(number))}
                            />
                        </ContainerInput>

                        <ContainerPayment>
                            <ButtomPayment onPress={() => { setPayment('money'); setActivePayment('money'); }}>
                                <FontAwesome color={activePayment === 'money' ? colors.orange : colors.darkgray} size={22} name="money" />
                                <Text fontSize={12}>money</Text>
                            </ButtomPayment>
                            <ButtomPayment onPress={() => { setPayment('picpay'); setActivePayment('picpay'); }}>
                                <FontAwesome color={activePayment === 'picpay' ? colors.orange : colors.darkgray} size={22} name="vcard" />
                                <Text fontSize={12}>picpay</Text>
                            </ButtomPayment>
                            <ButtomPayment onPress={() => { setPayment('Credit card'); setActivePayment('Credit card'); }}>
                                <FontAwesome color={activePayment === 'Credit card' ? colors.orange : colors.darkgray} size={22} name="cc-mastercard" />
                                <Text fontSize={12}>Credit</Text>
                            </ButtomPayment>
                            <ButtomPayment onPress={() => { setPayment('Debit card'); setActivePayment('Debit card'); }}>
                                <FontAwesome color={activePayment === 'Debit card' ? colors.orange : colors.darkgray} size={22} name="credit-card" />
                                <Text fontSize={12}>Debit</Text>
                            </ButtomPayment>
                        </ContainerPayment>
                        <Buttom onPress={() => store({ name, phoneNumber, state, city, neighborhood, number, payment })}>
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