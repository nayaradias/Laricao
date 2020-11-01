import styled from "styled-components/native";
import { Dimensions } from "react-native";
import colors from "../global/colors";

const { width } = Dimensions.get("window");
export const Header = styled.View`
  flex:1;
  justify-content: center;
  align-items: center;

  /* margin-top:100; */
  width: ${width + 30}px;
  height: ${width / 1.8};
  border-top-left-radius: 190px;
  border-top-right-radius: 190px;
  box-shadow: 8px 8px 50px ${colors.lightgray};
  background-color: ${(props) => props.backgroundColor || colors.orange};
`;

export const Input = styled.TextInput`
  margin-left:8px;
  font-size: 13px;
  color: ${colors.gray};
`;
export const Buttom = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;

  width: 100%;
  padding: 15px;
  border-radius: 30px;
  margin-top: 25px;
  background-color: ${(props) => props.backgroundColor || colors.orange};
  box-shadow: 3px 3px 5px ${colors.lightgray};

`;

export const ContainerTile = styled.View`
  justify-content: center;
  align-items: center;

  margin-top:-160px;
  padding:60px 0px;

`;

export const Form = styled.View`
flex:2;
  justify-content: center;
  align-items: center;

  padding: 40px;
  margin-top: 5%;
  width: 100%;
`;
export const ContainerInput = styled.View`
  flex-direction:row;

  margin-top:25px;
  width:100%;
  padding: 15px; 
  border-radius: 30px;
  border: 1px solid ${colors.lightgray}
  border-radius: 30px;
  border: 1px solid ${colors.lightgray};
  box-shadow: 3px 3px 5px ${colors.lightgray};
`;
