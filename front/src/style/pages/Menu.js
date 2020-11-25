import styled from "styled-components/native";
import colors from "../global/colors";

export const Container = styled.ScrollView`
    background-color:${colors.white};
`;
export const ContainerInput = styled.View`
    flex-direction:row;
    justify-content:flex-start;
    align-items: flex-start;

    border: 1px solid ${colors.lightgray};
    padding:10px;
    margin:20px;
    border-radius:10px;
`;

export const Input = styled.TextInput`
    margin-left: 8px;
    margin-right:8px;
    color:${colors.gray};
    width:92%;
    padding:5px;
`;
export const Row = styled.View`
    flex-direction:row;
    margin:8px 0;
`;
export const ContainerScrollView = styled.ScrollView`
    padding:10px;
`;

export const Categories = styled.TouchableOpacity`
    justify-content:center;
    align-items:center;
    padding:10px 8px;
`;
export const CategoriesImage = styled.Image`
    width:80px;
    height:80px;
    border-radius:100px;
`;


export const Popular = styled.TouchableOpacity`
    background-color:${colors.transparent};
    box-shadow: 3px 3px 10px ${colors.lightgray};
    margin: 5px 10px;  
    border-radius:10px;
`;
export const PopularImage = styled.Image`
    height:100px;
    width:130px;
    border-radius:10px;
`;
export const ContainerRecommended = styled.TouchableOpacity`
    width:170px;
    margin:10px ;
    box-shadow: 3px 3px 10px ${colors.lightgray}; 
    border-radius:10px;
`;
export const RecommendedImage = styled.Image`
    height:90px;
    width:170px;
    border-top-right-radius:10px;
    border-top-left-radius:10px;

`;
export const RecommendedDescription = styled.View`
    padding:8px;
    border-bottom-right-radius:10px;
    border-bottom-left-radius:10px;
`;
export const ContainerButtons = styled.View`
    flex-direction:row;
    align-items:center;
    justify-content:space-between;

    padding:10px 0px;
`;
export const ButtonLess = styled.TouchableOpacity`
    align-items:center;
    justify-content:center;

    background-color:${colors.lightgray};
    border-radius:100px;
    width:30px;
    height:30px;
`;
export const ButtonMore = styled.TouchableOpacity`
    align-items:center;
    justify-content:center;

    background-color:${colors.orange};
    border-radius:100px;
    width:30px;
    height:30px;
`;
export const ViewTransaparent = styled.View`
    padding: 3px 0px;
`;
