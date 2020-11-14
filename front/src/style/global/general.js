import styled from "styled-components/native";

import colors from "./colors";
import metrics from "./mectrics";
export const Container = styled.SafeAreaView`
  flex: ${(props) => props.flex || 1};
  background-color: ${(props) => props.backgroundColor || colors.white};
`;

export const Title = styled.Text`
  align-self: ${(props) => props.alignSelf || "auto"};
  text-align: ${(props) => props.textAlign || "auto"};
  font-size: ${(props) => props.fontSize || 18}px;
  /* font-family: 'roboto'; */
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
  font-size: ${(props) => props.fontSize || 14}px;
  /* font-family: "roboto"; */
  font-weight: ${(props) => props.fontWeight || 400};
  color: ${(props) => props.color || colors.gray};
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
 width: ${(props) => props.width || 100}px;
 height: ${(props) => props.height || 100}px;

`;
export const IconTabBar = styled.Image`
 width: ${(props) => props.width || 56}px;
 height: ${(props) => props.height || 56}px;
 margin-top:2px;
`;
export const IconActivy = styled.View`
  background-color:${colors.transparent};
  /* height:32px;
  width:32px; */
  padding:5px;
  border-radius:100px;
`;
