import React, { useEffect, useState } from "react";
import { Container, Title, Text } from "../../style/global/general";
import colors from "../../style/global/colors";
import { FontAwesome } from "@expo/vector-icons";
import {
    Card,
    Banner,
    ContainerText,
} from "../../style/pages/companyDetails";
import moment from 'moment';

const CompanyDetails = ({ navigation, route }) => {
    const [company, setCompany] = useState(null);


    useEffect(() => {
        if (route?.params)
            setCompany(route?.params.item);
    }, []);

    console.log('company:', company);
    return (
        <Container>
            <Banner
                source={{ uri: "http://localhost:3001/" + company?.UrlPhoto }}
            />
            <Card>
                <ContainerText>
                    {/* <FontAwesome name="check" size={40} color={colors.orange} style={{ margin: 10 }} /> */}
                    <Title fontWeight={500} color={colors.gray} >
                        {company?.Name}
                    </Title>
                    <Text color={colors.lightgray}>
                        {company?.Email}
                    </Text>
                    <Text color={colors.lightgray} marginTop={10}>
                        {company?.PhoneNumber}
                    </Text>
                    <Text color={colors.lightgray}>
                        {company?.WorkHoursStart} - {company?.WorkHoursEnd}
                    </Text>
                    <Text color={colors.lightgray}>
                        {moment(company?.createdAt).format('DD MMM YYYY h:mm')}
                    </Text>
                    <Text color={colors.lightgray} textAlign="center">
                        {company?.Address}
                    </Text>
                </ContainerText>
            </Card>
        </Container>
    );
}

export default CompanyDetails;