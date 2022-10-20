import { SafeAreaProvider } from 'react-native-safe-area-context';
import useCachedResources from './hooks/useCachedResources';
import {NavigationContainer} from "@react-navigation/native";
import StartPage from "./screens/StartPage";

import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
   {/*       <StartPage></StartPage>*/}
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Home" component={StartPage}  />
            </Drawer.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    );
  }
}

