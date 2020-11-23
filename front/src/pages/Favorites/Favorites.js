import React, {useState, useEffect} from 'react';
import { Title, Text, Container} from "../../style/global/general";
import { ContainerInput, Input, Content, Card, 
    CardImage, CardText, CardImageContainer, CardTextBoard, CardTextStatus, CardStars, CardRanking, CardHeart} from "../../style/pages/favorites";
import { FontAwesome } from "@expo/vector-icons";
import colors from "../../style/global/colors";
import api from "../../services/api";

const Favorites = () => {
    const [favorites, setFavorites] = useState([]);
    const getFavorites = async()=> {
        try {
            await api.get("food/list", {}).then((res)=>{
                console.log(res.data);
                setFavorites(res.data);
            }).catch((erro)=>{
                console.log(erro);
            })
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getFavorites();
    }, []);

    return (
    <Container>
        <Content>
        <ContainerInput> 
            <FontAwesome name="search" size={20} color={colors.orange}/>
            <Input placeholder="Buscar" type="text"/>
        </ContainerInput>
        <Text color={colors.gray} fontSize={16} fontWeight="bold" marginBottom={20}>Favorites</Text>
        <Card>
            <CardImageContainer>
                <CardImage source={require("../../assets/icons/LogoIcon.svg")}/> 
            </CardImageContainer>
            <CardText>
            <CardHeart> 
                    <FontAwesome name="heart" size={20} color={colors.red}/>
            </CardHeart>
                <Title fontWeight="bold">Laricão</Title>
                <Text color={colors.lightgray}>descrição do larição bem lindo vamos escrever mais pra poder deixar o texto grandão vlw show blz</Text>
                {/* <Title>ABERTO <Text> 15-30 minutos</Text> </Title> */}
                <CardTextStatus> 
                    <CardTextBoard><Title color={colors.green}>ABERTO</Title></CardTextBoard>
                    <Text color={colors.orange} marginLeft={5}>15-30 minutos</Text>
                </CardTextStatus>
                <CardStars>
                    <FontAwesome name="star" size={20} color={colors.yellow}/>
                    <FontAwesome name="star" size={20} color={colors.yellow}/>
                    <FontAwesome name="star" size={20} color={colors.yellow}/>
                    <FontAwesome name="star" size={20} color={colors.yellow}/>
                    <FontAwesome name="star" size={20} color={colors.yellow}/>
                    <CardRanking><Text color={colors.lightgray} marginLeft={5}> 4,9 (254)</Text></CardRanking>
                </CardStars>
                
            </CardText>
        </Card>
        </Content>
    </Container>
    
    );
}

export default Favorites;