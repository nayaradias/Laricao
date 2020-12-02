import styled from "styled-components/native";
import colors from "../global/colors";
import metrics from '../global/mectrics';

export const ContainerInput = styled.View`
    flex-direction: row;
    margin: 15px 0px;
    width: 100%;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid ${colors.lightgray};
`;

export const Input = styled.TextInput`
    width:100%;
    margin-left: 8px;
    font-size: 14px;
    color: ${colors.darkgray};
    border:none;
`;

export const Content = styled.ScrollView`
    padding:0px 20px;
`;

export const Card = styled.View`
    width:${metrics.widthPercentageToDP('74%')};
    background-color: ${colors.white};
    box-shadow: 1px 1px 14px ${colors.lightgray};
    margin: 15px 10px 15px 40px;
    padding: 5px 20px;
    border-radius: 10px;
    flex-direction: row;
    
`;

export const CardImage = styled.Image`
    width: 100px;
    height: 100px;
    justify-content:center;
    align-self:center;
    border-radius: 10px;
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
    padding: 8px;
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
    border: 1px solid ${props => props.borderColor || colors.green};
    padding: 2px;
  
`;

export const CardStars = styled.View`
    flex-direction: row;
    justify-content:space-between;

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
    margin-left: 167px;
    margin-top: -23px;
    padding: 5px;
    justify-content:center;
    border-radius: 100px;
    background-color: ${colors.white};
    box-shadow: 1px 1px 14px ${colors.lightgray};
    width: 35px;
    height: 35px;
    align-items:center;
`;