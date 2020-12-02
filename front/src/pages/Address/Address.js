import React, {useState, useEffect } from 'react';


import { View, Text, CheckBox} from 'react-native';
import {
    Container,    
} from "../../style/global/general";
import {
Content, 
Background, 
Circle, 
Input,
InputText,
MenuTitle,
ProfileContent,
Avatar,
UserName,
UserEmail,
IconCheck,
ContainerCheckBox,
ContainerPagamentos,
Column
} 
from "../../style/pages/Address";
import colors from "../../style/global/colors";
import { storeData, getData } from '../../services/auth';











const Address = () => {

    const [isSelected, setSelection] = useState(false);
    const [isSelected2, setSelection2] = useState(false);

    
    const [address, setAddress] = useState({
        state: '',
        city: '',
        neighborhood: '',
        number: ''
    });

    const storeAddress = async() => {
        try{
            await getData('user').then((res) => {
                setAddress({state: res.Address.State});
                setAddress({city: res.Address.City});
                setAddress({neighborhood: res.Address.Neighborhood});
                setAddress({number: res.Address.Number});
            });

            
        }catch(erro){
            console.log(erro);
        };
    }
    useEffect(() => {
        storeAddress();
      }, []);

    
    return (
        <Container >
            <Background>
                <Circle/>

                <ProfileContent>
                    <Avatar/>
                    <UserName>UserMaster</UserName>
                    <UserEmail>usermaster@gmail.com</UserEmail>                    
                </ProfileContent>             
                
                <Content>
                    <MenuTitle>Meu endereço</MenuTitle>

                    <InputText>Estado</InputText>
                    <Input value={address.state}/>

                    <InputText>Bairro</InputText>
                    <Input value={address.neighborhood}/>

                    <InputText>Número</InputText>
                    <Input value={address.number}/>


                    <MenuTitle>Pagamentos</MenuTitle>
                    <ContainerPagamentos>
                        <Column>
                    <ContainerCheckBox onPress={() => setSelection(!isSelected)}><IconCheck name="check" size={20} color={isSelected && colors.orange} /></ContainerCheckBox>
                    <InputText marginTop={5}>Cartão</InputText>
                        </Column>

                        <Column>

                    <ContainerCheckBox onPress={() => setSelection2(!isSelected2)}><IconCheck name="check" size={20} color={isSelected2 && colors.orange} /></ContainerCheckBox>
                    <InputText marginTop={5}>Dinheiro</InputText>
                        </Column>
                    </ContainerPagamentos>


                    

                                 
                </Content>
                

            </Background>         
            
            
            
            
            
            
        </Container>


            

);
}
    

export default Address;