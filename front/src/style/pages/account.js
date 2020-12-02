import styled from "styled-components/native";
import colors from "../global/colors";

export const Content = styled.View`
    background-color:${colors.white};
    box-shadow: 0px 2px 8px ${colors.darkgray};
    margin:32px;
    border-radius:10px;
    height:65%;
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

    margin-top:${props=>props.marginTop || 0}px;
`;

