import React from 'react';
import { View, Text } from 'react-native';
import {
    Container,    
} from "../../style/global/general";
import {
Content, 
Background, 
Circle, 
Icon, 
ContentMenu, 
ArrowIcon, 
MenuTitle, 
MoreTitle,
ProfileContent,
Avatar,
UserName,
UserEmail
} 
from "../../style/pages/Account";
import colors from "../../style/global/colors";
import { TouchableOpacity } from 'react-native-gesture-handler';






const Account = ({navigation}) => {
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
                    <MenuTitle>Minha Conta</MenuTitle>
                    
                        
                        <ContentMenu>
                            <Icon name ='location-pin'/>
                            <TouchableOpacity onPress={() => navigation.navigate('Addres')}>Endereço</TouchableOpacity>
                            <ArrowIcon name ='keyboard-arrow-right'/>
                        </ContentMenu>

                        <ContentMenu>
                            <Icon name ='credit-card'/>
                            <Text>Pagamento</Text>
                            <ArrowIcon name ='keyboard-arrow-right'/>
                        </ContentMenu>

                        <ContentMenu>
                            <Icon name ='shopping-cart'/>
                            <Text>Pedidos</Text>
                            <ArrowIcon name ='keyboard-arrow-right'/>
                        </ContentMenu>

                        <ContentMenu>
                            <Icon name ='heart'/>
                            <Text>Favoritos</Text>
                            <ArrowIcon name ='keyboard-arrow-right'/>
                        </ContentMenu>

                        <ContentMenu>
                            <Icon name ='price-tag'/>
                            <Text>OFertas</Text>
                            <ArrowIcon name ='keyboard-arrow-right'/>
                        </ContentMenu>


                    <MoreTitle>Mais</MoreTitle>

                    <ContentMenu>
                            <Icon name ='info'/>
                            <Text>Informações</Text>
                    </ContentMenu>

                    <ContentMenu>
                            <Icon name ='log-out'/>
                            <Text>Sair</Text>
                    </ContentMenu>                    

                    
                </Content>
                

            </Background>

            
            
            
            
            
            
            
        </Container>


            

);
}
    

export default Account;