import React, { useState } from "react";
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
  Link,
} from "../../style/pages/signup";
import api from '../../services/api';

const SignUp = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassaword] = useState("");
  const store = async ({ name, email, password }) => {
    try {
      const response = await api.post("user/store", {
        Name: name,
        Email: email,
        Password: password,
      });
      console.log(response.data);
      navigation.navigate('SignIn');
    } catch (err) {
      console.log("ERR Catch:", error);
    }
  };
  return (
    <Container>
      <Header>
        <ContainerTile>
          <Title fontFamily="Lobster" color={colors.white} fontSize={30} fontWeight="bold">
            Cadastro
          </Title>
          
        <ContainerLogo marginBottom={-110}>
          <Logo source={require("../../assets/icons/LogoIcon.svg")} />
        </ContainerLogo>
        </ContainerTile>
      </Header>
      <Form>
        <ContainerInput>
          <FontAwesome name="user" size={20} color={colors.orange} />
          <Input placeholder="Nome"
            type="mail"
            required
            name="email"
            value={name}
            onChangeText={name => setName(name)}
          />
        </ContainerInput>
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
        <Buttom onPress={() => store({ name, email, password })}>
          <Text fontFamily="Lobster" color={colors.white} fontSize={18}>
            Cadastrar
          </Text>
        </Buttom>
        <Link onPress={() => navigation.navigate('SignIn')}>
          <Text> Possui conta? <Text color={colors.orange}>Faça o login</Text></Text>
        </Link>
      </Form>
    </Container>
  );
};

export default SignUp;
