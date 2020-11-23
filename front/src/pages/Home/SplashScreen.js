import React from 'react';
import colors from "../../style/global/colors";
import {
    Container,
    Logo,
    Title,
    Text,
} from "../../style/global/general";
import {
    ContainerLogo,
    Content,
} from "../../style/pages/splashscreen";

const SplashScreen = ({navigation}) => {
    setTimeout(() => {
        navigation.navigate('Home')
    }, 3000);
    return (
        <Container >
            <Content>
                <ContainerLogo>
                    <Logo width={130} height={130} source={require("../../assets/icons/LogoIcon.svg")} />
                </ContainerLogo>
                <Title color={colors.orange} fontWeight="bold" fontSize={72} fontFamily="Lobster">LariCão</Title>
                <Text>Não deixe para amanhã o que você pode comer hoje</Text>
            </Content>
        </Container>
    );
}

export default SplashScreen;