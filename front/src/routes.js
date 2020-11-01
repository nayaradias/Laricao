import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Account from './pages/Account/Account';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Bag from './pages/Bag/Bag';
import Favorites from './pages/Favorites/Favorites';
import Home from './pages/Home/Home';
import Menu from './pages/Home/Menu';
import SplashScreen from './pages/Home/SplashScreen';
import Requests from './pages/Requests/Requests';

import colors from '../src/style/global/colors';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


function LaricaoTabScreen({ navigation, route }) {
    console.log("Navigation", navigation);
    console.log("Route", route);
    return (
        <Tab.Navigator initialRouteName="Menu">
            <Tab.Screen name="Account" component={Account} />
            <Tab.Screen name="Bag" component={Bag} />
            <Tab.Screen name="Menu" component={Menu} />
            <Tab.Screen name="Favorites" component={Favorites} />
            <Tab.Screen name="Requests" component={Requests} />
        </Tab.Navigator>
    );
}

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        if (route.name === 'Home') {
                            iconName = focused
                                ? 'ios-information-circle'
                                : 'ios-information-circle-outline';
                        } else if (route.name === 'Account') {
                            iconName = focused
                                ? 'ios-list-box'
                                : 'ios-list';
                        }

                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                })} tabBarOptions={{
                    activeTintColor: colors.orange,
                    inactiveTintColor: colors.lightgray,
                }}>

                {/* <Stack.Screen name="SplashScreen" component={SplashScreen} />
                <Stack.Screen name="Home" component={Home} />  */}


                {/* <Stack.Screen options={{ headerShown: false }} name="SignUp" component={SignUp} /> */}
                <Stack.Screen options={{ headerShown: false }} name="SignIn" component={SignIn} />
                <Stack.Screen name="Laricao" component={LaricaoTabScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;
