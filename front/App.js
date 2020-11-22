import React ,{useState}from "react";
import Routes from "./src/routes";

import * as Font from 'expo-font';
import { AppLoading } from 'expo';
const fetchFonts = () => {

  return Font.loadAsync({
  'Lobster': require('./src/assets/fonts/Lobster-Regular.ttf'),
  'roboto-regular': require('./src/assets/fonts/Roboto-Regular.ttf')
  });
  };
export default function App() {

  const [dataLoaded, setDataLoaded] = useState(false);

  if(!dataLoaded){
    return  <AppLoading  startAsync={fetchFonts} onFinish={() =>setDataLoaded(true)}/>;
  }
  return <Routes />;
}
