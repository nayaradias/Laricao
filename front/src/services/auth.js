import AsyncStorage from '@react-native-community/async-storage';
export const isAuthenticated = () => AsyncStorage.getItem("token") !== null;
export const getToken = () => AsyncStorage.getItem("token");
export const logout = () => {
    AsyncStorage.removeItem("token");
    AsyncStorage.removeItem("user");
};