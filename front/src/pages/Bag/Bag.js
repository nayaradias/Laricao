import React, { useEffect, useState } from "react";
import { Container, Title, Text } from "../../style/global/general";
import { FontAwesome } from "@expo/vector-icons";
import colors from "../../style/global/colors";
import {
  Content,
  Card,
  ContentText,
  ContainerButton,
  ButtonLess,
  ButtonMore,
  ViewTransaparent,
  ContainerText,
  Banner,
  Row,
  Column,
  CardBottom,
  Line,
  ContentTitle,
  ContentSubTitle1,
  ContentSubTitle2,
  ContentSubTitle3,
  ContentSubTitle4,
  ButtonPedido,
  Scroll,
  Button,
  ContainerButtonBack
} from "../../style/pages/bag";

const Bag = ({ navigation, route }) => {
  const [value, setValue] = useState(0);
  const [unity, setUnity] = useState(0);
  const [price, setPrice] = useState(value);
  const [food, setFood] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  useEffect(() => {
    if (route.params?.food) {
      setFood(route.params.food);
      setValue(route.params.food.Price);
    }
  }, [route.params?.food]);

  const handleLess = () => {
    unity <= 0 ? setUnity(0) : setUnity(unity - 1);
    price <= 0 ? setPrice(0) : setPrice(value);
    for (let i = 0; i < unity; i++)
      price <= value ? setPrice(0) : setPrice(price - value);

  };

  const handleMore = () => {
    setUnity(unity + 1);
    setPrice(food.Price);
    for (let i = 0; i < unity; i++)
      setPrice(price + value);
  };


  return (
    <Container>
      {food && (
        <Content>
          <Scroll>
            <Card>
              <Row>
                <Banner
                  source={{
                    uri: "http://localhost:3001/" + food?.UrlPhoto,
                  }}
                />
                <Column>
                  <>
                    <ContentText>
                      <Title fontWeight={500} fontFamily="roboto-regular" marginLeft={10} color={colors.gray} numberOfLines={1} ellipsizeMode='head'>
                        {food?.Name}
                      </Title>
                    </ContentText>
                    <Text marginLeft={11} color={colors.lightgray}>
                      {food?.Unity}
                    </Text>
                    <ContainerButton>
                      <ButtonLess onPress={handleLess}>
                        <FontAwesome name="minus" size={16} color={colors.orange} />
                      </ButtonLess>
                      <ViewTransaparent>
                        <Text fontWeight="bold" color={colors.orange}>
                          {unity}
                        </Text>
                      </ViewTransaparent>
                      <ButtonMore onPress={handleMore}>
                        <FontAwesome name="plus" size={16} color={colors.white} />
                      </ButtonMore>
                    </ContainerButton>
                  </>
                  <ContainerText>
                    <Text fontWeight="bold" marginLeft={11} color={colors.gray}>
                      R$ {price},00
                  </Text>
                    <Text marginRight={10} color={colors.orange}>
                      R$ {price},00
                </Text>
                  </ContainerText>
                </Column>
              </Row>
            </Card>
          </Scroll>
          <CardBottom>
            <Row paddingLeft={30} paddingTop={15}>
              <ContentTitle>
                <Title fontWeight="bold" size={14} fontFamily="sans-serif">
                  Pedido
              </Title>
                <Title color={colors.lightgray}> | {unity} {unity >= 2 && 'Itens'} {unity <= 1 && 'Item'}</Title>
              </ContentTitle>
            </Row>
            <Line />
            <Row paddingLeft={30} paddingTop={5}>
              <ContentSubTitle1>
                <Title color={colors.darkgray}>Subtotal</Title>
              </ContentSubTitle1>
              <ContentSubTitle2>
                <Title color={colors.darkgray} fontWeight={400} fontFamily="roboto-regular"> R${price},00</Title>
              </ContentSubTitle2>
            </Row>
            <Row paddingLeft={30} paddingTop={5}>
              <ContentSubTitle1>
                <Title color={colors.darkgray}>Taxa de Entrega</Title>
              </ContentSubTitle1>
              <ContentSubTitle3>
                <Title color={colors.green} fontWeight="bold">
                  {" "}
                Grátis
              </Title>
              </ContentSubTitle3>
            </Row>
            <Row paddingLeft={30} paddingTop={5}>
              <ContentSubTitle1>
                <Title color={colors.darkgray} fontWeight="bold">
                  Total
              </Title>
              </ContentSubTitle1>
              <ContentSubTitle4>
                <Title color={colors.darkgray} fontWeight="bold">
                  R${price},00
              </Title>
              </ContentSubTitle4>
            </Row>
            <ButtonPedido>
              <Text fontWeight="bold" fontFamily="roboto-regular" color={colors.white}>Fazer Pedido</Text>
            </ButtonPedido>
          </CardBottom>
        </Content>
      )}
      {!food && (
        <ContainerButtonBack>
          <Row>
            <Title fontWeight="bold" color={colors.gray}>Para realizar um Pedido selecione um item do menu! !</Title>
          </Row>
          <Row>
            <Button onPress={() => navigation.navigate('Menu')}>
              <Text fontWeight="bold" fontFamily="roboto-regular" color={colors.white}>Fazer Pedido</Text>
            </Button>
          </Row>
        </ContainerButtonBack>
      )}
    </Container>
  );
};

export default Bag;
