import React, { useState, useEffect } from "react";
import { Container, Title, Text } from "../../style/global/general";
import colors from "../../style/global/colors";
import {
  Content,
  Card,
  ContentText,
  ContainerText,
  Banner,
  Row,
  Column,
  Scroll
} from "../../style/pages/requests";
import api from "../../services/api";
const Requests = () => {
  //Requests
  const [requests, setRequests] = useState([]);

  const getRequests = async () => {
    try {
      await api.post("user/list/requests").then((res) => {
        setRequests(res.data);
      }).catch((erro) => {
        console.log(erro);
      });
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getRequests();
  }, []);
  console.log('requests:', requests);

  return (
    <Container>
      <Scroll>
        <Content>
          <Card>
            <Row>
              <Banner
                source={require("../../assets/images/espetinho-carne.jpg")}
              />
              <Column>
                <>
                  <ContentText>
                    <Text marginLeft={10}>
                      23/11/20 19:49
                  </Text>
                    <Title fontWeight={500} marginLeft={10} color={colors.gray}>
                      Espetinho de Boi
                  </Title>
                  </ContentText>
                  <Text marginLeft={11} color={colors.lightgray}>
                    250g/Un
                </Text>
                </>
                <ContainerText>
                  <Text fontWeight="bold" marginLeft={11} color={colors.gray}>
                    R$ 28,00
                </Text>
                  <Text fontWeight="bold" marginLeft={60} color={colors.orange}>
                    Rastrear Pedido
                </Text>
                </ContainerText>
              </Column>
            </Row>
          </Card>
        </Content>
      </Scroll>
    </Container>
  );
};

export default Requests;
