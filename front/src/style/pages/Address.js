import styled from "styled-components/native";
import colors from "../global/colors";

import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import {Text, Title} from "../global/general";

import { TextInput } from 'react-native';

import { FontAwesome } from '@expo/vector-icons'; 






export const ProfileContent = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 32px;

`;

export const Avatar = styled.Image`
    width: 80px;
    height: 80px;
    border-radius:100%;
    background-color:${colors.lightgray};
`;

export const UserName = styled(Text)`
color: ${colors.white}

`;

export const UserEmail = styled(Text)`
color: ${colors.white}
`;


export const Content = styled.View`
background-color:${colors.white};
box-shadow: 0px 2px 8px ${colors.darkgray};
margin:32px;
border-radius:10px;
height:65%;
padding: 16px;

`;

export const Background = styled.View`
background-color:${colors.orange};
flex: 1;
`;

export const Circle = styled.View`
border-radius:100%;
background-color:${colors.white};
width: 200%;
height: 100%;
position: absolute;
bottom: -30%;
left: -50%;
`;

export const MenuTitle = styled(Title)`
font-size: 16px;
margin-bottom: 32px;
`;

export const InputText = styled(Text)`
margin-bottom: 5px;
`;

export const Input = styled(TextInput)`
border-width: 1px;
border-color: ${colors.darkgray};
border-radius: 5px;
height: 30px;
margin-bottom: 24px;
`;


export const ContainerCheckBox = styled.TouchableOpacity`
align-items: center;
justify-content: flex-start;
width: 32px;
border: 2px solid ${colors.darkgray};
padding: 2px;
border-radius: 5px;
`;

export const IconCheck = styled(FontAwesome)`
color: ${props => props.color || colors.transparent};
`;

export const ContainerPagamentos = styled.View`
flex-direction: row;
justify-content: space-between;
`;

export const Column = styled.View`
flex-direction: column;
align-items: center;
`;



