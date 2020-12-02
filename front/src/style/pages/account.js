import styled from "styled-components/native";
import colors from "../global/colors";

export const Content = styled.View`
    background-color:${colors.white};
    box-shadow: 0px 2px 8px ${colors.darkgray};
    margin:32px;
    border-radius:10px;
    height:66%;
    padding: 16px;
`;

export const Background = styled.View`
    flex: 1;

    background-color:${colors.orange};
`;

export const ProfileContent = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 32px;
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

export const Avatar = styled.Image`
    width: 80px;
    height: 80px;
    border-radius:100%;
    background-color:${colors.transparent};
`;

export const ContentMenu = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    justify-content:space-between;

    margin:10px 0px;    
`;

export const ContentFooter = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    justify-content:flex-start;

    margin-top:${props => props.marginTop || 0}px;
`;

export const ContainerLanguage = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction:row;

  width: 100%;
  /* padding: 0px 5px 0px 5px; */
  background-color: ${colors.transparent};
`;

export const ButtomLanguage = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;

  background-color: ${colors.transparent};
`;
export const IconLanguage = styled.Image`
  justify-content: center;
  align-items: center;
  align-self:center;

  width:${props => props.width || 30}px;
  height:${props => props.height || 30}px;  
  background-color: ${colors.transparent};
`;


