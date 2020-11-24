import React from "react";
import { Container, Title, Text } from "../../style/global/general";
import colors from "../../style/global/colors";
import { FontAwesome } from "@expo/vector-icons";
import {
  Content,
  Card,
  ContentText,
  ContainerText,
  Banner,
  Row,
  Column,
  ButtonAberto,
} from "../../style/pages/requestsDetails";

const RequestsDetails = () => {
  
  return (
    <Container>
      <Content>
        <Card>
          <Row>
            <Banner
              source={require("../../assets/images/loja.jpg")}
            />
          </Row>
        </Card>
      </Content>
    
      <Content>
        <Card>
          <Row>
            <Column>
              <>
                <ContentText>
                  <Title fontWeight={500} marginLeft={10} color={colors.gray}>
                    Pizza Hut
                  </Title>
                </ContentText>
                <Text marginLeft={11} color={colors.lightgray}>
                  Rua, Av. Dr. Olivio, 353 - Praia da Costa
                </Text>
              </>
              <ContainerText>
                <Text marginLeft={11} color={colors.gray}>
                  4,9 <FontAwesome name="star" size={16} color={colors.yellow} /> (254) 15-30 min Fecha às 23:00 
                </Text>
              </ContainerText>
            </Column>
          </Row>
        </Card>
      </Content>
    </Container>
  );
};

export default RequestsDetails;
