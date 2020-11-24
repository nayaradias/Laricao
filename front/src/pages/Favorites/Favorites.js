import React, { useState, useEffect } from 'react';
import { Title, Text, Container } from "../../style/global/general";
import {
    ContainerInput, Input, Content, Card,
    CardImage, CardText, CardImageContainer, CardTextBoard, CardTextStatus, CardStars, CardRanking, CardHeart
} from "../../style/pages/favorites";
import { FontAwesome } from "@expo/vector-icons";
import colors from "../../style/global/colors";
import api from "../../services/api";
import { getData } from "../../services/auth";
import AsyncStorage from '@react-native-community/async-storage';
const Favorites = () => {
    const [favorites, setFavorites] = useState([]);

    const getFavorites = async () => {
        try {
            await api.get("company/listFavorites").then((res) => {
                setFavorites(res.data.companies);
            }).catch((erro) => {
                console.log(erro);
            });
        } catch (error) {
            console.log(error);
        }
    }
    // const getSearch = async (text) => {
    //     try {
    //         await api.get("user/listFavorites/search", { Name: text }).then((res) => {
    //             setFavorites(res.data.companies);
    //         }).catch((erro) => {
    //             console.log(erro);
    //         });
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    useEffect(() => {
        getFavorites();
    }, []);

    return (
        <Container>
            <Content showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}>
                <ContainerInput>
                    {/* getSearch */}
                    <FontAwesome name="search" size={20} color={colors.orange} />
                    {/* <Input placeholder="Buscar" type="text" onChangeText={(text) => getSearch(text)} /> */}
                </ContainerInput>
                <Text color={colors.gray} fontSize={16} fontWeight="bold" marginBottom={20}>Favorites</Text>
                {
                    favorites?.map(
                        (item) => (
                            <Card key={item._id}>
                                <CardImageContainer>
                                    <CardImage source={{ uri: "http://localhost:3001/" + item.UrlPhoto }} />
                                </CardImageContainer>
                                <CardText>
                                    <CardHeart>
                                        <FontAwesome name="heart" size={20} color={colors.red} />
                                    </CardHeart>
                                    <Title fontWeight="bold" fontSize={16} numberOfLines={1} ellipsizeMode='head'>{item.Name}</Title>
                                    <Text color={colors.lightgray} numberOfLines={1} ellipsizeMode='head'>{item.Email}</Text>
                                    <Text color={colors.lightgray} numberOfLines={1} ellipsizeMode='head'>{item.Address}</Text>
                                    <CardTextStatus>
                                        <CardTextBoard borderColor={item.Status === "Fechado" ? colors.red : colors.green}>
                                            <Title fontSize={14} color={item.Status === "Fechado" ? colors.red : colors.green}>{item.Status}</Title>
                                        </CardTextBoard>
                                        {/* <Text color={colors.orange} marginLeft={5}>{item.WorkHoursStart} {"-"} {item.WorkHoursEnd}</Text> */}
                                    </CardTextStatus>
                                    {/* <CardStars>
                                        <CardRanking>
                                            {(() => {
                                                switch (item.Evaluation) {
                                                    case 1:
                                                        return (<FontAwesome name="star" size={20} color={colors.yellow} />)
                                                    case 2:
                                                        return (
                                                            <>
                                                                <FontAwesome name="star" size={20} color={colors.yellow} />
                                                                <FontAwesome name="star" size={20} color={colors.yellow} />
                                                            </>
                                                        )
                                                    case 3:
                                                        return (
                                                            <>
                                                                <FontAwesome name="star" size={20} color={colors.yellow} />
                                                                <FontAwesome name="star" size={20} color={colors.yellow} />
                                                                <FontAwesome name="star" size={20} color={colors.yellow} />
                                                            </>
                                                        )
                                                    case 4:
                                                        return (
                                                            <>
                                                                <FontAwesome name="star" size={20} color={colors.yellow} />
                                                                <FontAwesome name="star" size={20} color={colors.yellow} />
                                                                <FontAwesome name="star" size={20} color={colors.yellow} />
                                                                <FontAwesome name="star" size={20} color={colors.yellow} />
                                                            </>
                                                        )
                                                    case 5:
                                                        return (
                                                            <>
                                                                <FontAwesome name="star" size={20} color={colors.yellow} />
                                                                <FontAwesome name="star" size={20} color={colors.yellow} />
                                                                <FontAwesome name="star" size={20} color={colors.yellow} />
                                                                <FontAwesome name="star" size={20} color={colors.yellow} />
                                                                <FontAwesome name="star" size={20} color={colors.yellow} />
                                                            </>
                                                        )
                                                    default:
                                                        return (<FontAwesome name="star" size={20} color={colors.yellow} />)
                                                }
                                            })()}
                                        </CardRanking>
                                        <CardRanking>
                                            <Text color={colors.lightgray} marginLeft={20} marginTop={5}> {item.Evaluation} </Text>
                                        </CardRanking>
                                    </CardStars> */}
                                </CardText>
                            </Card>
                        )
                    )
                }
            </Content>
        </Container>

    );
}

export default Favorites;