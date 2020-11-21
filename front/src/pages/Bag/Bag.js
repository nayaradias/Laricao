import React from "react";
import { Container, Title, Text } from "../../style/global/general";
import { FontAwesome } from "@expo/vector-icons";
import colors from "../../style/global/colors";
import {
  Content,
  Card,
  ContentText,
  ContainerButton,
  ButtonMenos,
  ButtonMais,
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
} from "../../style/pages/bag";

const Bag = () => {
  return (
    <Container>
      <Content>
        <Card>
          <Row>
            <Banner
              source={require("../../assets/images/espetinho-carne.jpg")}
            />
            <Column>
              <>
                <ContentText>
                  <Title fontWeight="bold" marginLeft={10} color={colors.gray}>
                    Espetinho de Boi
                  </Title>
                </ContentText>
                <Text marginLeft={11} color={colors.lightgray}>
                  250g/Un
                </Text>
                <ContainerButton>
                  <ButtonMenos>
                    <FontAwesome name="minus" size={16} color={colors.orange} />
                  </ButtonMenos>
                  <Text fontWeight="bold" color={colors.orange}>
                    1
                  </Text>
                  <ButtonMais>
                    <FontAwesome name="plus" size={16} color={colors.white} />
                  </ButtonMais>
                </ContainerButton>
              </>
              <ContainerText>
                <Text fontWeight="bold" marginLeft={11} color={colors.gray}>
                  R$ 28,00
                </Text>
                <Text marginRight={15} color={colors.orange}>
                  R$ 28,00
                </Text>
              </ContainerText>
            </Column>
          </Row>
        </Card>
        <CardBottom>
          <Row>
            <ContentTitle>
              <Title fontWeight="bold" size={14} fontFamily="sans-serif">
                Pedido
              </Title>
              <Title color={colors.lightgray}> | 1 Item</Title>
            </ContentTitle>
          </Row>
          <Line />
          <Row>
            <ContentSubTitle1>
              <Title color={colors.darkgray}>Subtotal</Title>
            </ContentSubTitle1>
            <ContentSubTitle2>
              <Title color={colors.darkgray}> R$28,00</Title>
            </ContentSubTitle2>
          </Row>
          <Row>
            <ContentSubTitle1>
              <Title color={colors.darkgray}>Taxa de Entrega</Title>
            </ContentSubTitle1>
            <ContentSubTitle3>
              <Title color={colors.green} fontWeight="bold"> Grátis</Title>
            </ContentSubTitle3>
          </Row>
          <Row>
            <ContentSubTitle1>
              <Title color={colors.darkgray} fontWeight="bold">
                Total
              </Title>
            </ContentSubTitle1>
            <ContentSubTitle4>
              <Title color={colors.darkgray} fontWeight="bold">
                R$28,00
              </Title>
            </ContentSubTitle4>
          </Row>
          <ButtonPedido>Fazer Pedido</ButtonPedido>
        </CardBottom>
      </Content>
    </Container>
  );
};

export default Bag;
