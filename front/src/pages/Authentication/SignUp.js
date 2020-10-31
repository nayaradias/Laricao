import React from "react";
import { FontAwesome } from '@expo/vector-icons';
import colors from "../../style/global/colors";
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
} from "../../style/pages/signup";
const SignUp = () => {
  return (
    <Container>
      <Header>
        <ContainerTile>
          <Title color={colors.white} fontSize={30} fontWeight="bold">
            Cadastro
          </Title>
        </ContainerTile>

        <ContainerLogo>
          <Logo source={require("../../assets/icons/LogoIcon.svg")} />
        </ContainerLogo>
      </Header>
      <Form>
        <ContainerInput>
        <FontAwesome name="user" size={20} color={colors.orange} />
          <Input placeholder="Nome" />
        </ContainerInput>
        <ContainerInput>
        <FontAwesome name="envelope" size={20} color={colors.orange} />
          <Input placeholder="Email" />
        </ContainerInput>
        <ContainerInput>
        <FontAwesome name="key" size={20} color={colors.orange} />
          <Input placeholder="Senha" />
        </ContainerInput>
        <Buttom>
          <Text color={colors.white} fontSize={18}>
            Cadastrar 
          </Text>
        </Buttom>
      </Form>
    </Container>
  );
};

export default SignUp;
