import React from 'react';
import colors from "../../style/global/colors";
import {
    Container,
    Title,
    Text,
} from "../../style/global/general";
import {
    Content,
    Banner,
    Buttom,
    Link,
} from "../../style/pages/home";
const Home = ({ navigation }) => {
    return (
        <Container>
            <Content>
                <Title fontSize={72} fontWeight="bold" color={colors.orange}>Larição</Title>
                <Text fontSize={16} color={colors.gray}>Serviço 7 dias por semana. Pediu, chegou!</Text>
                <Buttom onPress={() => navigation.navigate('Laricao')}>
                    <Text color={colors.white}>INICIAR</Text>
                </Buttom>
                <Link onPress={() => navigation.navigate('SignIn')}>
                    <Text> Possui conta? <Text color={colors.orange}>Login</Text></Text>
                </Link>
            </Content>
            {/* <Banner source={require('../../assets/images/Footer1.png')} /> */}
        </Container>
    );
}

export default Home;