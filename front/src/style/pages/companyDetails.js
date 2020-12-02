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
    margin: ${(props) => props.marginTop || -40}px
    ${(props) => props.marginRight || 20}px
    ${(props) => props.marginBottom || 20}px
    ${(props) => props.marginLeft || 20}px;
`;

export const Banner = styled.Image`
    align-self:center;

    margin: 20px;
    border-radius: 10px;
    height:250px;
    width:80%;
`;

export const ContainerText = styled.View`
    justify-content:center;
    align-items:center;

    padding: 10px;
`;

