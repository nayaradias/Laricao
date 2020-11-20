import styled from "styled-components/native";
import colors from "../global/colors";

import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Entypo from '@expo/vector-icons/Entypo';

import {Text, Title} from "../global/general";





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
export const MoreTitle = styled(Title)`
font-size: 16px;
margin-top: 32px;
margin-bottom: 32px;
`;

export const ContentMenu = styled.View`
flex: 1;
flex-direction: row;
marginBottom: 16px;
align-items: center;
`;

export const ArrowIcon = styled(MaterialIcons) `
font-size: 22px;
color: ${colors.orange};
margin-left: auto;
`;

export const Icon = styled(Entypo)`
font-size: 22px;
color: ${colors.orange};
margin-right: 8px;
`;

