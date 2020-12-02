import styled from "styled-components/native";
import colors from "../global/colors";

export const Row = styled.View`
    flex-direction: row;
    padding: ${(props) => props.paddingTop || 0}px
    ${(props) => props.paddingRight || 0}px
    ${(props) => props.paddingBottom || 0}px
    ${(props) => props.paddingLeft || 0}px;
`;

export const Column = styled.View`
    flex-direction: column;
`;
export const Scroll = styled.ScrollView`
    padding:5px 0px;
`;

export const Content = styled.View`
    flex: 1;
    justify-content: top;
    align-items: top;
    align-self: top;

`;

export const Card = styled.View`
    border-radius: 10px;
    background-color: ${colors.white};
    border: none;
    padding: 15px;
    box-shadow: 1px 1px 14px ${colors.lightgray};
    margin: 15px 10px 5px 40px;
`;

export const ContentText = styled.View`
    //flex-direction: row; 
    justify-content: space-between;
    margin: 10px 0px;
`;

export const ContentTitle = styled.View`
    flex-direction: row; 
    justify-content: space-between;
    margin: 10px 0px;
    margin-top: -40px;
    margin-left: -30px;
`;

export const ContentSubTitle1 = styled.View`
    flex-direction: row;      
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
    margin-left: -30px;
`;

export const ContentSubTitle2 = styled.View`
    flex-direction: row;      
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
    margin-left: 188px;
`;

export const ContentSubTitle3 = styled.View`
    flex-direction: row;      
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
    margin-left: 141px;
`;

export const ContentSubTitle4 = styled.View`
    flex-direction: row;      
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
    margin-left: 216px;
`;


export const ContainerButton = styled.View`
    flex-direction: row; 
    align-items: center;
    justify-content: flex-end;
    margin: -5px 0px;
    margin-left: 155px; 
    margin-top: -25px;   
`;

export const ContainerText = styled.View`
    flex-direction: row; 
    align-items: center;
    justify-content: space-between;
    margin: 5px 0px;
    margin-top: 10px;
`;

export const ButtonLess = styled.TouchableOpacity`
    align-items:center;
    justify-content:center;

    background-color:${colors.lightgray};
    border-radius:100px;
    width:30px;
    height:30px;
`;
export const ButtonMore = styled.TouchableOpacity`
    align-items:center;
    justify-content:center;

    background-color:${colors.orange};
    border-radius:100px;
    width:30px;
    height:30px;
`;
export const ViewTransaparent = styled.View`
  padding: 0 3px;
`;

export const ButtonPedido = styled.TouchableOpacity`
    border-radius: 25px;
    background-image: linear-gradient(to right, #ff9b00, #fba900, #f7b600, #f1c300, #ebcf12);
    width: 100%;
    /* margin-left: -37px; */
    margin-top: 20px;
    align-items: center;
    justify-content:center;
    align-self:center;
    color: ${colors.white};
    padding: 18px;
    font-weight: bold;
`;

export const Banner = styled.Image`
    width: 90px;
    height: 90px;
    border-radius: 10px;
    margin-left: -50px;
    margin-top: 5px;
`;

export const CardBottom = styled.View` 
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    background-color: ${colors.white};
    border: none;
    padding: 50px 20px;
    box-shadow: 1px 1px 14px ${colors.lightgray};
    position: absolute;
    bottom: 0;
    width: 100%;
`;

export const Line = styled.View`
    border-bottom-color: ${colors.black};
    border-bottom-width: 1px;
    width: 330px;
    margin-left: -33px;
    margin-top: -10px;
`;

export const ButtonTrash = styled.TouchableOpacity`
    
`;

export const Swipe = styled.View`
    background-color: ${colors.orange};
`;
export const Button = styled.TouchableOpacity`
    align-items: center;
    justify-content:center;

    padding: 15px;
    border-radius: 25px;
    background-color: ${colors.orange};
    margin-top:20px;
    width: 100%;
`;
export const ContainerButtonBack = styled.View`
    padding: 50px 20px;
    margin:40px 0px;
`;
