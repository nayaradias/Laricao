import React from 'react';
import colors from '../../style/global/colors';
import {  Title , Text} from '../../style/global/general';
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
           
            <Title marginLeft={20} fontWeight="bold" color={colors.grey} fontSize={16}>Explorar Categorias</Title>
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

            <ContainerScrollView horizontal>
                    <ContainerRecommended>
                        <RecommendedImage source={require('../../assets/images/Footer1.png')} />
                        <RecommendedDescription>
                            <Title>Nome .......</Title>
                            <Text>dec.............................................................................................</Text>
                            <Title>Nome 2.....</Title>
                        </RecommendedDescription>
                    </ContainerRecommended>
            </ContainerScrollView>
        </Container>
    );
}

export default Menu;