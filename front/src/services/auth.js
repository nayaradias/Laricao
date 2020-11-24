import AsyncStorage from '@react-native-async-storage/async-storage';

export const isAuthenticated = () => getData("@token") !== null;

export const logout = () => {
    removeData("@token");
    removeData("@user");
   // navigation.navigate('SignIn');
};

export const storeData = async (key, value) => {
    try {
        await AsyncStorage.setItem(`@${key}`, value);
    } catch (error) {
        console.log('storeData Erro:', error);
    }
};

export const getData = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
            console.log("getData success:", value);
        }
    } catch (error) {
        console.log("getData error:", error);
    }
};

export const removeData = async (key) => {
    try {
        const value = await AsyncStorage.removeItem(key);
        if (value !== null) {
            console.log("RemoveData success:", value);
        }
    } catch (error) {
        console.log("RemoveData error:", error);
    }
};