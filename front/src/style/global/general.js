import styled from "styled-components/native";

import colors from "./colors";
import metrics from "./mectrics";
export const Container = styled.SafeAreaView`
  flex: ${(props) => props.flex || 1};
  background-color: ${(props) => props.backgroundColor || colors.white};
`;

export const Title = styled.Text`
  align-self: ${(props) => props.alignSelf || "auto"};
  text-align: ${(props) => props.textAlign || "auto"}
  font-size: ${(props) => props.fontSize || "18px"};
  font-family: 'lobster';
  font-weight: ${(props) => props.fontWeight || 500};
  color: ${(props) => props.color || colors.gray};
  letter-spacing: ${(props) => props.letterSpacing || 0}px;
  margin: ${(props) => props.marginTop || 0}px
    ${(props) => props.marginRight || 0}px ${(props) =>
  props.marginBottom || 0}px
    ${(props) => props.marginLeft || 0}px;
  
`;

export const Text = styled.Text`
  align-self: ${(props) => props.alignSelf || "auto"};
  text-align: ${(props) => props.textAlign || "auto"};
  font-size: ${(props) => props.fontSize || "14px"};
  font-family: "roboto";
  font-weight: ${(props) => props.fontWeight || 400};
  color: ${(props) => props.color || colors.grayMedium};
  margin: ${(props) => props.marginTop || 0}px
    ${(props) => props.marginRight || 0}px
    ${(props) => props.marginBottom || 0}px
    ${(props) => props.marginLeft || 0}px;
`;

export const ContainerLogo = styled.View`
  justify-content: center;
  align-items: center;

  padding: 5px;
  border-radius:100px;
  background-color: ${(props) => props.backgroundColor || colors.white};
  margin: ${(props) => props.marginTop || 0}px
    ${(props) => props.marginRight || 0}px
    ${(props) => props.marginBottom || 0}px
    ${(props) => props.marginLeft || 0}px;
`;
export const Logo = styled.Image`
 width: 100;
 height: 100;
 /* box-shadow: 8px 8px 50px ${colors.lightgray}; */
`;
