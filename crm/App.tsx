import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import {View, Text} from "react-native";

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
       <View>
         <Text>Hello</Text>
         <StatusBar></StatusBar>
       </View>
      </SafeAreaProvider>
    );
  }
}
