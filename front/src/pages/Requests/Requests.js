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
import { getData } from "../../services/auth";
import moment from 'moment';

const Requests = ({ navigation }) => {
  //Requests
  const [requests, setRequests] = useState([]);
  const [request, setRequest] = useState(null);

  const getRequests = () => {
    try {
      getData('user').then((res) => {
        // console.log('u then:', res._id);
        api.post("user/list/requests/", { id: res._id }).then((res) => {
          setRequests(res.data.users[0].Requests);
          setRequest(res.data);
          // console.log('res.data:', res.data.users[0].Requests);
        }).catch((erro) => {
          console.log(erro);
        });

      }).catch((err) => {
        console.log(err);
      });


    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getRequests();
  }, []);
  // console.log("requests:",requests);
  return (
    <Container>
      <Scroll>
        <Content>
          {
            requests?.map((item) => (
              <Card onPress={() => navigation.navigate('Request Details', { id:item.Id })}>
                <Row>
                  <Banner
                    source={{ uri: "http://localhost:3001/" + item.UrlPhoto }}
                  />
                  <Column>
                    <>
                      <ContentText>
                        {/* <Text marginLeft={10}>
                          {moment(item.Date).format('MMM DD YYYY h:mm')}
                        </Text> */}
                        <Title fontWeight={500} marginLeft={10} color={colors.gray}>
                          {item.Name}
                        </Title>
                      </ContentText>
                      <Text marginLeft={11} color={colors.lightgray}>
                        {item.Unity} Un
                </Text>
                    </>
                    <ContainerText>
                      <Text fontWeight="bold" marginLeft={11} color={colors.gray}>
                        R$ {item.Price * item.Unity}
                      </Text>
                      <Text fontWeight="bold" marginLeft={60} color={item.Status === "Em andamento" ? colors.orange : colors.lightgray}>
                        {item.Status}
                      </Text>
                    </ContainerText>
                  </Column>
                </Row>
              </Card>
            ))
          }
        </Content>
      </Scroll>
    </Container>
  );
};

export default Requests;
