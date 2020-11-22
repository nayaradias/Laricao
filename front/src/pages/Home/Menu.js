import React, { useEffect, useState } from 'react';
import colors from '../../style/global/colors';
import { Title, Text } from '../../style/global/general';
import {
    Container,
    ContainerInput,
    Input,
    Row,
    ContainerScrollView,
    Categories,
    CategoriesImage,
    Popular,
    PopularImage,
    ContainerRecommended,
    RecommendedImage,
    RecommendedDescription,
    ContainerButtons,
    ButtonLess,
    ButtonMore,
    ViewTransaparent,
} from '../../style/pages/Menu';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import api from '../../services/api';
const dataCategories = [
    {
        id: 1,
        title: 'Burger',
        // image: require("../../assets/imagesFooter1.png")
    },
    {
        id: 2,
        title: 'Pizza',
        // image: require("../../assets/imagesFooter1.png")
    },
    {
        id: 3,
        title: 'Japonesa',
        // image: require("../../assets/imagesFooter1.png")
    },
    {
        id: 4,
        title: 'Churrasco',
        // image: require("../../assets/imagesFooter1.png")
    }
    ,
    {
        id: 5,
        title: 'Teste',
        // image: require("../../assets/imagesFooter1.png")
    }
]
const Menu = ({ navigation }) => {
    const [popular, setPopular] = useState([]);
    const [categories, setCategories] = useState([]);
    const [recommended, setRecommended] = useState([]);
    const [totalArray, setTotalArray] = useState([]);
    const [total, setTotal] = useState(0);

    const less = () => {
        total <= 0 ? 0 : setTotal(total - 1);
        setTotal(...total);
    };
    const more = () => {
        setTotal(total + 1)
        setTotal(...total);
    };
    console.log("Total:", total);
    const getPopular = async () => {
        try {
            const response = await api.get("company/listFavorites", {});
            setPopular(response.data.companies);
        } catch (err) {
            console.log("ERR Catch:", err);
        }
    }
    const getRecommended = async () => {
        try {
            const response = await api.get("food/list", {});
            setRecommended(response.data.foods);
            setCategories(recommended);
        } catch (err) {
            console.log("ERR Catch:", err);
        }
    }

    useEffect(() => {
        getPopular();
        getRecommended();
    }, []);
    console.log(recommended);
    return (
        <Container
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
        >
            <ContainerInput>
                <FontAwesome name="search" size={22} color={colors.orange} />
                <Input placeholder="Buscar" />
            </ContainerInput>

            <Row style={{ justifyContent: "space-between" }}>
                <Title marginLeft={20} fontWeight="bold" color={colors.grey} fontSize={16}>Explorar Categorias</Title>
                {/* <Text color={colors.lightgray} marginRight={20}>Ver todos</Text> */}
            </Row>
            <Row>
                <ContainerScrollView horizontal
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                >
                    {
                        categories.map(
                            (item) => (
                                <Categories key={item._id}>
                                    <CategoriesImage source={{
                                        uri: "http://localhost:3001/" + item.UrlPhoto,
                                    }} />
                                    <Title fontWeight="bold" fontSize={16} color={colors.grey}>{item.Name}</Title>
                                </Categories>
                            )
                        )
                    }
                </ContainerScrollView>
            </Row>

            <Title marginLeft={20} fontWeight="bold" color={colors.grey} fontSize={16}>Populares</Title>
            <Row>
                <ContainerScrollView horizontal
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                >
                    {
                        popular.map(
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
            <Title marginLeft={20} fontWeight="bold" color={colors.grey} fontSize={16}>Recomendados</Title>
            <ContainerScrollView horizontal
                showsHorizontalScrollIndicator={false}>
                {
                    recommended.map(
                        (item) => (
                            <ContainerRecommended key={item._id}>
                                <RecommendedImage
                                    source={{
                                        uri: "http://localhost:3001/" + item.UrlPhoto,
                                    }} />
                                <RecommendedDescription>
                                    <ViewTransaparent>
                                        <Title fontSize={16} color={colors.gray}>{item.Name}</Title>
                                        <Text fontSize={10} color={colors.lightgray}>descrvvdskvndsknvdksnvkdsnvdklsn</Text>
                                        <Title fontSize={12} fontWeight="bold" color={colors.gray}>{item.Company.Name}</Title>
                                    </ViewTransaparent>

                                    <ContainerButtons>
                                        <ButtonLess onPress={() => less(item._id)}>
                                            <FontAwesome name="minus" size={16} color={colors.orange} />
                                        </ButtonLess>
                                        <ViewTransaparent>
                                            {/* {
                                                total?.map((item) => {
                                                    <Text fontWeight="bold" color={colors.orange}>
                                                        {
                                                            item ? item : "0"
                                                        }
                                                    </Text>
                                                })
                                            } */}
                                            <Text fontWeight="bold" color={colors.orange}>
                                                R$ 0,00
                                                
                                            </Text>
                                        </ViewTransaparent>
                                        <ButtonMore onPress={() => more(item._id)}>
                                            <FontAwesome name="plus" size={16} color={colors.white} />
                                        </ButtonMore>
                                        <ViewTransaparent>
                                            <Text color={colors.yellow}>R$ {item.Price}</Text>
                                        </ViewTransaparent>
                                    </ContainerButtons>
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