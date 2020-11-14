import React from 'react';
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
const Menu = () => {

    return (
        <Container>
            <ContainerInput>
                <FontAwesome name="search" size={22} color={colors.orange} />
                <Input placeholder="Buscar" />
            </ContainerInput>

            <Row style={{ justifyContent: "space-between" }}>
                <Title marginLeft={20} fontWeight="bold" color={colors.grey} fontSize={16}>Explorar Categorias</Title>
                <Text color={colors.lightgray}>Ver todos</Text>
            </Row>
            <Row>
                <ContainerScrollView horizontal>
                    {
                        dataCategories.map(
                            (category) => (
                                <Categories key={category.id}>
                                    <CategoriesImage source={require('../../assets/images/Footer1.png')} />
                                    <Title fontWeight="bold" fontSize={16} color={colors.grey}>{category.title}</Title>
                                </Categories>
                            )
                        )
                    }
                </ContainerScrollView>
            </Row>

            <Title marginLeft={20} fontWeight="bold" color={colors.grey} fontSize={16}>Populares</Title>
            <Row>
                <ContainerScrollView horizontal>
                    <Popular>
                        <PopularImage source={require('../../assets/images/Footer1.png')} />
                    </Popular>
                    <Popular>
                        <PopularImage source={require('../../assets/images/Footer1.png')} />
                    </Popular>
                    <Popular>
                        <PopularImage source={require('../../assets/images/Footer1.png')} />
                    </Popular>
                </ContainerScrollView>
            </Row>
            <Title marginLeft={20} fontWeight="bold" color={colors.grey} fontSize={16}>Recomendados</Title>
            <ContainerScrollView horizontal>
                
                <ContainerRecommended>
                    <RecommendedImage source={require('../../assets/images/Footer1.png')} />
                    <RecommendedDescription>
                        <ViewTransaparent>
                            <Title fontSize={16} color={colors.gray}>Jumbo</Title>
                            <Text fontSize={10} color={colors.lightgray}>Pão briche, burger especial 150g, muçarela, bacon, ovo..</Text>
                            <Title fontSize={12} fontWeight="bold" color={colors.gray}>Buffalo´s Burger</Title>
                        </ViewTransaparent>

                        <ContainerButtons>
                            <ButtonLess>
                                <FontAwesome name="minus" size={16} color={colors.orange} />
                            </ButtonLess>
                            <ViewTransaparent> 
                                <Text fontWeight="bold" color={colors.orange}>1</Text>
                            </ViewTransaparent>
                            <ButtonMore>
                                <FontAwesome name="plus" size={16} color={colors.white} />
                            </ButtonMore>
                            <ViewTransaparent> 
                                <Text color={colors.yellow}>R$ 14,00</Text>
                            </ViewTransaparent>
                        </ContainerButtons>
                    </RecommendedDescription>
                </ContainerRecommended>


              

                <ContainerRecommended>
                    <RecommendedImage source={require('../../assets/images/Footer1.png')} />
                    <RecommendedDescription>
                        <ViewTransaparent>
                            <Title fontSize={16} color={colors.gray}>Jumbo 2</Title>
                            <Text fontSize={10} color={colors.lightgray}>Pão briche, burger especial 150g, muçarela, bacon, ovo..</Text>
                            <Title fontSize={12} fontWeight="bold" color={colors.gray}>Buffalo´s Burger</Title>
                        </ViewTransaparent>

                        <ContainerButtons>
                            <ButtonLess>
                                <FontAwesome name="minus" size={16} color={colors.orange} />
                            </ButtonLess>
                            <ViewTransaparent> 
                                <Text fontWeight="bold" color={colors.orange}>1</Text>
                            </ViewTransaparent>
                            <ButtonMore>
                                <FontAwesome name="plus" size={16} color={colors.white} />
                            </ButtonMore>
                            <ViewTransaparent> 
                                <Text color={colors.yellow}>R$ 14,00</Text>
                            </ViewTransaparent>
                        </ContainerButtons>
                    </RecommendedDescription>
                </ContainerRecommended>


                <ContainerRecommended>
                    <RecommendedImage source={require('../../assets/images/Footer1.png')} />
                    <RecommendedDescription>
                        <ViewTransaparent>
                            <Title fontSize={16} color={colors.gray}>Jumbo 3</Title>
                            <Text fontSize={10} color={colors.lightgray}>Pão briche, burger especial 150g, muçarela, bacon, ovo..</Text>
                            <Title fontSize={12} fontWeight="bold" color={colors.gray}>Buffalo´s Burger</Title>
                        </ViewTransaparent>

                        <ContainerButtons>
                            <ButtonLess>
                                <FontAwesome name="minus" size={16} color={colors.orange} />
                            </ButtonLess>
                            <ViewTransaparent> 
                                <Text fontWeight="bold" color={colors.orange}>1</Text>
                            </ViewTransaparent>
                            <ButtonMore>
                                <FontAwesome name="plus" size={16} color={colors.white} />
                            </ButtonMore>
                            <ViewTransaparent> 
                                <Text color={colors.yellow}>R$ 14,00</Text>
                            </ViewTransaparent>
                        </ContainerButtons>
                    </RecommendedDescription>
                </ContainerRecommended>
            </ContainerScrollView>
        </Container>
    );
}

export default Menu;