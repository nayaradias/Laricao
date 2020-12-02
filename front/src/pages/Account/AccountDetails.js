import React, { useState, useEffect } from 'react';
import {
    Container,
    Text,
    Title,
} from "../../style/global/general";
import {
    Content,
    ContentMenu,
}
    from "../../style/pages/accountDetails";
import moment from 'moment';
import { FontAwesome } from '@expo/vector-icons';
import colors from "../../style/global/colors";

const AccountDetails = ({ navigation, route }) => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        if (route?.params)
            setUser(route?.params.user);
    }, []);
    console.log("user:", user);
    return (
        <Container>
            <Content>
                <ContentMenu onPress={() => navigation.navigate('Account Edit', { user })}>
                    <Title fontFamily="Lobster" textAlign="center">Detalhes Conta</Title>
                    <FontAwesome name="edit" size={24} color={colors.orange} />
                </ContentMenu>

                <ContentMenu align="flex-start" justify="flex-start">
                    <Title fontSize={16} marginTop={2}>Nome: <Text>{user?.Name}</Text></Title>
                    <Title fontSize={16} marginTop={2}>Email: <Text>{user?.Email}</Text></Title>
                    <Title fontSize={16} marginTop={2}>Telefone: <Text>{user?.PhoneNumber}</Text></Title>
                    <Title fontSize={16} marginTop={2}>Cidade: <Text>{user?.Address?.City}</Text></Title>
                    <Title fontSize={16} marginTop={2}>Bairro: <Text>{user?.Address?.Neighborhood}, {user?.Address?.State}, n° {user?.Address?.Number}</Text></Title>
                    <Title fontSize={16} marginTop={2}>Tipo de Pagamento: <Text>{user?.Payment}</Text></Title>
                    <Title fontSize={16} marginTop={2}>Última Atualização: <Text>{moment(user?.updateAt).format('DD MMM YYYY h:mm')}</Text></Title>
                </ContentMenu>
            </Content>
        </Container>
    );
}


export default AccountDetails;