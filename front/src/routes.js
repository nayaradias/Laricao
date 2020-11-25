import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';

import Account from './pages/Account/Account';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Bag from './pages/Bag/Bag';
import Favorites from './pages/Favorites/Favorites';
import Home from './pages/Home/Home';
import Menu from './pages/Home/Menu';
import SplashScreen from './pages/Home/SplashScreen';
import Requests from './pages/Requests/Requests';
import RequestsDetails from './pages/Requests/RequestsDetails';
import colors from '../src/style/global/colors';
import { IconTabBar } from './style/global/general';
import { isAuthenticated } from './services/auth';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const TabBarScreenOptions = ({ route }) => ({
    tabBarIcon: ({ color, size }) => {
        let iconName;
        if (route.name === 'Menu') { iconName = 'home'; }
        else if (route.name === 'Account') { iconName = 'user-circle'; }
        else if (route.name === 'Bag') { iconName = 'shopping-bag'; }
        else if (route.name === 'Favorites') { iconName = 'heart'; }
        else if (route.name === 'Requests') { iconName = 'list' }
        else { return; }
        return (<FontAwesome name={iconName} size={size} color={color} style={{ borderRadius: 30 }} />);
    },
});
const StackBarScreenOptions = {
    title: <IconTabBar source={require('./assets/icons/LogoIcon.svg')} />,
    headerStyle: {
        shadowColor: colors.transparent,
        elevation: 0
    },
    headerTintColor: colors.gray,
    headerTitleStyle: {
        alignSelf: 'end',
    },
};

function LaricaoTabScreen() {
    return (
        <Tab.Navigator initialRouteName="Menu"
            screenOptions={TabBarScreenOptions}
            tabBarOptions={{
                activeTintColor: colors.orange,
                inactiveTintColor: colors.lightgray,
                activeBackgroundColor: colors.white,
                style: {
                    borderTopLeftRadius: 15,
                    borderTopRightRadius: 15,
                }
            }}

        >
            <Tab.Screen name="Menu" component={Menu} />
            <Tab.Screen name="Favorites" component={Favorites} />
            <Tab.Screen name="Bag" component={Bag} />
            <Tab.Screen name="Requests" component={Requests} />
            <Tab.Screen name="Account" component={Account} />

        </Tab.Navigator>
    );
}

const StackOptions = {
    headerTintColor: colors.orange,
    headerTitleStyle: {
        fontFamily: "roboto-regular",
        fontWeight: "bold"
    },
};
const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={isAuthenticated ? 'Laricao' : 'SignIn'}>
                <Stack.Screen options={{ headerShown: false }} name="SplashScreen" component={SplashScreen} />
                <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
                <Stack.Screen name="Laricao" component={LaricaoTabScreen} options={StackBarScreenOptions} />
                <Stack.Screen name="SignUp" component={SignUp} options={StackOptions} />
                <Stack.Screen name="SignIn" component={SignIn} options={StackOptions} />
                <Stack.Screen name="RequestsDetails" component={RequestsDetails} options={StackOptions} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;
