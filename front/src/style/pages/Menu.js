import styled from "styled-components/native";
import colors from "../global/colors";
// import metrics from '../global/mectrics';
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
  color:${colors.lightgray};
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
border-radius:100;
`;


export const Popular = styled.TouchableOpacity`
    background-color:${colors.transparent};
    box-shadow: 3px 3px 10px ${colors.lightgray};
    margin: 5px 10px;
`;
export const PopularImage = styled.Image`
    height:100px;
    width:130px;
    border-radius:10px;
`;
export const ContainerRecommended = styled.View`
    flex-direction:column;
    width:170px;
    margin-bottom:30px;
`;
export const RecommendedImage = styled.Image`
height:90px;
/* background-color:black; */
border-top-right-radius:10px;
border-top-left-radius:10px;

`;
export const RecommendedDescription = styled.View`
/* background-color:red; */
padding:5px;
border-bottom-right-radius:10px;
border-bottom-left-radius:10px;
`;
