import styled from "styled-components/native";
import colors from "../global/colors";

export const Content = styled.ScrollView`
    background-color:${colors.white};
`;

export const ContentMenu = styled.View`
    align-items: ${props => props.align || 'center'};
    justify-content:${props => props.justify || 'center'};

    box-shadow: 5px 5px 30px ${colors.lightgray};
    border-radius:10px;
    padding: 20px;
    margin: 10px 20px;
`;

export const ContainerInput = styled.View`
  flex-direction:row;

  margin-top:25px;
  width:100%;
  padding: 15px; 
  border-radius: 30px;
  border: 1px solid ${colors.lightgray};
  border-radius: 30px;
  border: 1px solid ${colors.lightgray};
  box-shadow: 3px 3px 5px ${colors.lightgray};
`;

export const Input = styled.TextInput`
  margin-left:8px;
  font-size: 13px;
  color: ${colors.gray};
  font-family:'Lobster';
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



export const ContainerPayment = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction:row;

  width: 100%;
  padding: 15px;
  margin-top: 25px;
  background-color: ${colors.transparent};
`;

export const ButtomPayment = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  
  padding: 10px;
  background-color: ${colors.transparent};
`;



