import React, { useEffect, useState } from 'react';
import colors from '../../style/global/colors';
import { Title, Text } from '../../style/global/general';
import {
    Container,
    Row,
    ContainerScrollView,
    Categories,
    CategoriesImage,
    Popular,
    PopularImage,
    ContainerRecommended,
    RecommendedImage,
    RecommendedDescription,
    ViewTransaparent,
} from '../../style/pages/Menu';
import api from '../../services/api';

const dataCategories = [
    {
        id: 1,
        Name: 'Burger',
        image: require('../../assets/images/hamburguer.jpg')
    },
    {
        id: 2,
        Name: 'Pizza',
        image: require('../../assets/images/pizza.jpg')
    },
    {
        id: 3,
        Name: 'Japonesa',
        image: require('../../assets/images/japonesa.jpg')
    },
    {
        id: 4,
        Name: 'Churrasco',
        image: require('../../assets/images/churrasco.jpg')
    }
]

const Menu = ({ navigation }) => {
    const [popular, setPopular] = useState([]);
    const [recommended, setRecommended] = useState([]);

    const getPopular = async () => {
        try {
            const response = await api.get("company/listFavorites", {});
            //console.log('company/listFavorites:', response);
            setPopular(response.data.companies);
        } catch (err) {
            console.log("ERR Catch:", err);
            // createToastError(err);
        }
    }
    const getRecommended = async () => {
        try {
            const response = await api.get("food/list", {});
            setRecommended(response.data.foods);
            // console.log('food/list:', response);
        } catch (err) {
            console.log("ERR Catch:", err);
        }
    }

    useEffect(() => {
        getPopular();
        getRecommended();
    }, []);

    return (
        <Container
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
        >
            <Row style={{ justifyContent: "space-between" }}>
                <Title marginLeft={20} marginTop={20} fontWeight="bold" color={colors.grey} fontSize={16}>Explorar Categorias</Title>
            </Row>
            <Row>
                <ContainerScrollView horizontal
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                >
                    {
                        dataCategories.map(
                            (item) => (
                                <Categories key={item.id}>
                                    <CategoriesImage source={{ uri: item.image }} />
                                    <Title fontWeight="bold" fontSize={16} color={colors.grey}>{item.Name}</Title>
                                </Categories>
                            )
                        )
                    }
                </ContainerScrollView>
            </Row>

            <Title marginLeft={20} marginTop={20} fontWeight="bold" color={colors.grey} fontSize={16}>Populares</Title>
            <Row>
                <ContainerScrollView horizontal
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                >
                    {
                        popular?.map(
                            (item) => (
                                <Popular key={item._id}>
                                    <PopularImage
                                        source={{
                                            uri: "http://localhost:3001/" + item.UrlPhoto,
                                        }}
                                    />
                                </Popular>
                            )
                        )
                    }
                </ContainerScrollView>
            </Row>
            <Title marginLeft={20} marginTop={20} fontWeight="bold" color={colors.grey} fontSize={16}>Recomendados</Title>
            <ContainerScrollView horizontal
                showsHorizontalScrollIndicator={false}>
                {
                    recommended.map(
                        (item) => (
                            <ContainerRecommended key={item._id} onPress={() => navigation.navigate('Bag', { food: item })}>
                                <RecommendedImage
                                    source={{
                                        uri: "http://localhost:3001/" + item.UrlPhoto,
                                    }} />
                                <RecommendedDescription>
                                    <ViewTransaparent>
                                        <Title fontSize={16} color={colors.gray}>{item.Name}</Title>
                                        <Text marginTop={5} fontSize={10} color={colors.lightgray}>{item.Description}</Text>
                                        <Text marginTop={5} fontWeight="bold" color={colors.orange}>R$ {item.Price}</Text>
                                        <Text marginTop={5} fontSize={12} fontWeight="bold" color={colors.gray}>{item.Company.Name}</Text>
                                    </ViewTransaparent>
                                </RecommendedDescription>
                            </ContainerRecommended>

                        )
                    )
                }
            </ContainerScrollView>
        </Container>
    );
}

export default Menu;