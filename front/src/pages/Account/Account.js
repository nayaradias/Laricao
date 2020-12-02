import React, { useEffect, useState } from 'react';
import {
    Container,
    Text,
    Title,
} from "../../style/global/general";
import {
    Background,
    Content,
    ProfileContent,
    Circle,
    Avatar,
    ContentMenu,
    ContentFooter
}
    from "../../style/pages/Account";
import colors from "../../style/global/colors";
import { FontAwesome } from "@expo/vector-icons";
import { logout, getData } from '../../services/auth';
import moment from 'moment';
import api from "../../services/api";
const Account = ({ navigation }) => {
    const [user, setUser] = useState(null);

    const getUser = async () => {
        try {
            getData('user').then((res) => {
                setUser(res);
            }).catch((err) => {
                console.log(err);
            });

        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getUser();
    }, []);
    console.log('GetData user:',user);
    return (
        <Container >
            <Background>
                <Circle />
                <ProfileContent>
                    <Avatar source={{ uri: "http://localhost:3001/" + user?.UrlPhoto }} />
                    <Title color={colors.white} fontWeight="bold">{user?.Name}</Title>
                    <Text color={colors.white} fontSize={12}>{user?.Email}</Text>
                </ProfileContent>

                <Content>
                    <Title fontFamily="Lobster">Minha Conta</Title>

                    <ContentMenu>
                        <Text fontFamily="Lobster">Endereço</Text>
                        <FontAwesome size={22} color={colors.orange} name='chevron-right' />
                    </ContentMenu>

                    <ContentMenu onPress={() => { logout(); navigation.navigate('Bag') }}>
                        <Text fontFamily="Lobster">Pagamento</Text>
                        <FontAwesome size={22} color={colors.orange} name='chevron-right' />
                    </ContentMenu>

                    <ContentMenu onPress={() => { logout(); navigation.navigate('Requests') }}>
                        <Text fontFamily="Lobster">Pedidos</Text>
                        <FontAwesome size={24} color={colors.orange} name='chevron-right' />
                    </ContentMenu>

                    <ContentMenu onPress={() => { logout(); navigation.navigate('Favorites') }}>
                        <Text fontFamily="Lobster">Favoritos</Text>
                        <FontAwesome size={24} color={colors.orange} name='chevron-right' />
                    </ContentMenu>

                    <ContentMenu onPress={() => { logout(); navigation.navigate('Menu') }}>
                        <Text fontFamily="Lobster">Ofertas</Text>
                        <FontAwesome size={24} color={colors.orange} name='chevron-right' />
                    </ContentMenu>

                    <Title fontFamily="Lobster">Mais</Title>
                    <ContentFooter marginTop={10} onPress={() => navigation.navigate('Account Details', { user })}>
                        <FontAwesome style={{ marginLeft: 3 }} size={24} color={colors.orange} name='info' />
                        <Text marginLeft={22}>Informações</Text>
                    </ContentFooter>

                    <ContentFooter onPress={() => { logout(); navigation.navigate('SignIn') }}>
                        <FontAwesome size={20} color={colors.orange} name='power-off' />
                        <Text marginLeft={15}>Sair</Text>
                    </ContentFooter>

                </Content>
            </Background>
        </Container>
    );
}


export default Account;