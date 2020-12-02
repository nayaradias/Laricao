import React, { useEffect, useState } from "react";
import { Container, Title, Text } from "../../style/global/general";
import colors from "../../style/global/colors";
import api from "../../services/api";
import { FontAwesome } from "@expo/vector-icons";
import {
  Card,
  Banner,
  CardHeader,
  ContainerText,
  ContainerInfo
} from "../../style/pages/requestsDetails";
import moment from 'moment';
const RequestsDetails = ({ navigation, route }) => {
  const [request, setRequest] = useState(null);


  useEffect(() => {
    if (route?.params) {

      api.post("food/list/request/", { id: route.params.id }).then((res) => {
        setRequest(res.data?.foods[0]);
      }).catch((erro) => {
        console.log(erro);
      });
    }
  }, []);

  console.log('request:', request);
  return (
    <Container>
      <Banner
        source={{ uri: "http://localhost:3001/" + request?.UrlPhoto }}
      />
      <CardHeader>
        <Title fontWeight={500} color={colors.gray}>
          {request?.Name}
        </Title>
        <Text>
          {moment(request?.updatedAt).format('DD MMM YYYY h:mm')}
        </Text>
      </CardHeader>
      <Card>
        <Title fontWeight={500} color={colors.gray}>
          {request?.Category}
        </Title>
        <Text marginLeft={10}>
                Preço: Un/R${request?.Price}
                </Text>
        {
          request?.Options?.length > 0 && (
            <ContainerText>
              <FontAwesome name="list-alt" size={20} color={colors.orange} />
              <Text marginLeft={10}>
                Complementos:
                </Text>
            </ContainerText>
          )
        }
        {
          request?.Options?.map((option) => (
            <>
              <ContainerInfo>
                <Text>
                  {option?.Name}
                  <Text marginLeft={5}>
                    R${option?.Price}
                  </Text>
                </Text>
              </ContainerInfo>
            </>
          ))
        }
      </Card>
    </Container>
  );
};

export default RequestsDetails;
