import styled from "styled-components/native";
import { Dimensions } from "react-native";
import colors from "../global/colors";

export const ContainerInput = styled.View`
    flex-direction: row;
    margin: 20px 0px;
    width: 100%;
    padding: 15px;
    border-radius: 10px;
    border: 1px solid ${colors.lightgray};
`;

export const Input = styled.TextInput`
    margin-left: 8px;
    font-size: 12px;
    color: ${colors.lightgray};
`;

export const Content = styled.ScrollView`
    margin:0px 20px;
`;

export const Card = styled.View`
    background-color: ${colors.white};
    box-shadow: 1px 1px 14px ${colors.lightgray};
    margin: 0px 10px 5px 40px;
    padding: 0px 20px;
    border-radius: 10px;
    flex-direction: row;
    
`;

export const CardImage = styled.Image`
    width: 70px;
    height: 70px;
    justify-content:center;
    align-self:center;
 
`;

export const CardImageContainer = styled.View`
    border-radius: 10px;
    background-color: ${colors.white};
    margin-left: -50px;
    box-shadow: 1px 1px 14px ${colors.lightgray};
    padding: 8px;
    justify-content:center;
    align-self:center;
    align-items:center;
    width: 100px;
    height: 100px;

`;

export const CardText = styled.View`
    padding: 5px;
    margin: 0px 3px;
    flex: 1;
    
`;

export const CardTextStatus = styled.View`
    flex-direction: row;
    justify-content:space-between;
    align-items:center;
    margin: 1px 0px;
  
`;

export const CardTextBoard = styled.View`
    border-radius: 5px;
    border: 1px solid ${colors.green};
    padding: 2px;
  
`;

export const CardStars = styled.View`
    flex-direction: row;
    margin: 3px 0px;
    padding: 2px;
  
`;

export const CardRanking = styled.View`
    flex-direction: row;
    margin: 3px 0px;
    padding: 2px;
  
`;

export const CardHeart = styled.View`
    flex-direction: row;
    margin-left: 155px;
    margin-top: -18px
    padding: 10px;
    justify-content:flex-end;
    border-radius: 100px;
    background-color: ${colors.white};
    box-shadow: 1px 1px 14px ${colors.lightgray};
    width: 40px;
    height: 40px;
    align-items:center;
`;