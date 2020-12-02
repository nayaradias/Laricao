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
    ContentFooter,
    ContainerLanguage,
    ButtomLanguage,
    IconLanguage,
}
    from "../../style/pages/Account";
import colors from "../../style/global/colors";
import { FontAwesome } from "@expo/vector-icons";
import { logout, getData } from '../../services/auth';
import moment from 'moment';
import api from "../../services/api";
const Account = ({ navigation }) => {
    const [user, setUser] = useState(null);
    const [language, setLanguage] = useState('pt_BR');
    const [isOpenLanguage, setIsOpenLanguage] = useState(false);

    const handleChangeLanguage = () => setIsOpenLanguage(!isOpenLanguage);

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
    }, [user]);
    console.log('GetData user:', user);
    return (
        <Container >
            <Background>
                <Circle />
                <ProfileContent>
                    {
                        user?.UrlPhoto ? (
                            <Avatar source={{ uri: "http://localhost:3001/" + user?.UrlPhoto }} />
                        ) : (
                                <FontAwesome name="user" size={50} color={colors.white} />
                            )
                    }

                    <Title color={colors.white} fontWeight="bold">{user?.Name}</Title>
                    <Text color={colors.white} fontSize={12}>{user?.Email}</Text>
                </ProfileContent>

                <Content>
                    <Title fontFamily="Lobster">Minha Conta</Title>

                    <ContentMenu onPress={handleChangeLanguage}>
                        <Text fontFamily="Lobster">Idioma</Text>
                        <FontAwesome size={20} color={colors.orange} name={isOpenLanguage ? 'chevron-down' : 'chevron-right'} />
                    </ContentMenu>
                    {
                        isOpenLanguage && (
                            <ContainerLanguage>
                                <ButtomLanguage onPress={() => setLanguage('pt_BR')}>
                                    <IconLanguage source={require('../../assets/icons/brazil.svg')} />
                                    <Text fontWeight={language === 'pt_BR' && 'bold'} fontFamily={language === 'pt_BR' && 'Lobster'} fontSize={12} marginTop={2} color={language === 'pt_BR' && colors.orange}>pt-BR</Text>
                                </ButtomLanguage>
                                <ButtomLanguage onPress={() => setLanguage('en_US')}>
                                    <IconLanguage source={require('../../assets/icons/united-states.svg')} />
                                    <Text fontWeight={language === 'en_US' && 'bold'} fontFamily={language === 'en_US' && 'Lobster'} fontSize={12} marginTop={2} color={language === 'en_US' && colors.orange}>en-US</Text>
                                </ButtomLanguage>
                                <ButtomLanguage onPress={() => setLanguage('es_US')}>
                                    <IconLanguage source={require('../../assets/icons/spain.svg')} />
                                    <Text fontWeight={language === 'es_US' && 'bold'} fontFamily={language === 'es_US' && 'Lobster'} fontSize={12} marginTop={2} color={language === 'es_US' && colors.orange}>es-US</Text>
                                </ButtomLanguage>
                            </ContainerLanguage>
                        )
                    }

                    <ContentMenu onPress={() => { logout(); navigation.navigate('Bag') }}>
                        <Text fontFamily="Lobster">Pagamento</Text>
                        <FontAwesome size={20} color={colors.orange} name='chevron-right' />
                    </ContentMenu>

                    <ContentMenu onPress={() => { logout(); navigation.navigate('Requests') }}>
                        <Text fontFamily="Lobster">Pedidos</Text>
                        <FontAwesome size={20} color={colors.orange} name='chevron-right' />
                    </ContentMenu>

                    <ContentMenu onPress={() => { logout(); navigation.navigate('Favorites') }}>
                        <Text fontFamily="Lobster">Favoritos</Text>
                        <FontAwesome size={20} color={colors.orange} name='chevron-right' />
                    </ContentMenu>

                    <ContentMenu onPress={() => { logout(); navigation.navigate('Menu') }}>
                        <Text fontFamily="Lobster">Ofertas</Text>
                        <FontAwesome size={20} color={colors.orange} name='chevron-right' />
                    </ContentMenu>

                    <Title fontFamily="Lobster">Mais</Title>
                    <ContentFooter marginTop={10} onPress={() => navigation.navigate('Account Details', { user })}>
                        <FontAwesome style={{ marginLeft: 3 }} size={24} color={colors.orange} name='info' />
                        <Text marginLeft={20}>Informações</Text>
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