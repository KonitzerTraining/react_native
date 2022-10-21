import {SafeAreaProvider} from 'react-native-safe-area-context';
// import useCachedResources from './hooks/useCachedResources';
import {NavigationContainer} from "@react-navigation/native";
import StartPage from "./screens/StartPage";

import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomersPage from "./screens/customers/CustomersPage";
import AboutPage from "./screens/AboutPate";
import HelpPage from "./screens/HelpPage";
import {Provider} from "react-redux";
import {store} from "./store";

const Drawer = createDrawerNavigator();

export default function App() {
    // const isLoadingComplete = useCachedResources();


    return (
        <Provider store={store}>
            <SafeAreaProvider>
                {/*       <StartPage></StartPage>*/}
                <NavigationContainer>
                    <Drawer.Navigator>
                        <Drawer.Screen name="Home" component={StartPage}/>
                        <Drawer.Screen name="Customers" component={CustomersPage} options={{
                            headerShown: true,
                        }}/>
                        <Drawer.Screen name="About" component={AboutPage}/>
                        <Drawer.Screen name="Help" component={HelpPage}/>
                    </Drawer.Navigator>
                </NavigationContainer>
            </SafeAreaProvider>
        </Provider>
    );

}

