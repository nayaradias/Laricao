import styled from "styled-components/native";
import colors from "../global/colors";

export const Content = styled.ScrollView`
    background-color:${colors.white};
`;

export const ContentMenu = styled.TouchableOpacity`
    align-items: ${props=>props.align || 'center'};
    justify-content:${props=>props.justify || 'center'};

    box-shadow: 5px 5px 30px ${colors.lightgray};
    border-radius:10px;
    padding: 20px;
    margin: 10px 20px;
`;



