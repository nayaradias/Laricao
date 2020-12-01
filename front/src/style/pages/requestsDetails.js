import styled from "styled-components/native";
import colors from "../global/colors";

export const Card = styled.View`
   justify-content:flex-start;
   align-items:flex-start;

    border-radius: 10px;
    background-color: ${colors.white};
    border: none;
    padding: ${props => props.padding || 20}px;
    box-shadow: 5px 5px 20px ${colors.lightgray};
    margin: ${(props) => props.marginTop || 30}px
    ${(props) => props.marginRight || 20}px
    ${(props) => props.marginBottom || 20}px
    ${(props) => props.marginLeft || 20}px;
`;
export const CardHeader = styled.View`
   justify-content:center;
   align-items:center;
   align-self:center;
    
    width:70%;
    border-radius: 10px;
    background-color: ${colors.white};
    border: none;
    padding: ${props => props.padding || 20}px;
    box-shadow: 5px 5px 10px ${colors.lightgray};
    margin: ${(props) => props.marginTop || -60}px
    ${(props) => props.marginRight || 20}px
    ${(props) => props.marginBottom || 20}px
    ${(props) => props.marginLeft || 20}px;
`;

export const Banner = styled.Image`
    align-self:center;

    margin: 20px;
    border-radius: 10px;
    height:250px;
    width:300px;
`;
export const ContainerText = styled.View`
    justify-content:space-between;
    align-items:center;
    flex-direction:row;

    padding: 5px 20px;
`;
export const ContainerInfo = styled.View`
    align-items:center;
    flex-direction:column;

    padding:0px 20px;
    margin-left:30px;
`;
 