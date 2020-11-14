import styled from "styled-components/native";
import colors from "../global/colors";

export const Content = styled.View`
  flex:1;
  justify-content: center;
  align-items: center;
  align-self:center;


`;
export const Banner = styled.Image`
  flex:0.4;

  height: ${props => props.height || 150}px;
`;
export const Buttom = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;

  margin-top:80px;
  padding:25px 120px;
  border-radius:30px;
  height: ${props => props.height || 30}px;
  background-color:${colors.orange};

`;

export const Link = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;

  padding:5px;
  margin-top:10px;
`;



