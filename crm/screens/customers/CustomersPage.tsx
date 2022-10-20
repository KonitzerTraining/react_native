import {View, Text} from "react-native";
import config from "../../config";
import axios from "axios";
import {useEffect, useState} from "react";
import CustomerList from "./views/CustomerList";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import CustomerDetails from "./views/CustomerDetails";
import CustomerNew from "./views/CustomerNew";
import CustomerEdit from "./views/CustomerEdit";

const Stack = createNativeStackNavigator();


function CustomersPage() {

    return (
        <View>
          {/*  <Text>Hello {customers[0]?.name}</Text>*/}
            <Text>Customer Dashboard</Text>
            <Stack.Navigator>
                <Stack.Screen name="CustomerList" component={CustomerList} options={{
                    headerShown: false
                }}></Stack.Screen>
                <Stack.Screen name="CustomerDetails" component={CustomerDetails} options={{
                    headerShown: false
                }}></Stack.Screen>
                <Stack.Screen name="CustomerNew" component={CustomerNew} options={{
                    headerShown: false
                }}></Stack.Screen>
                <Stack.Screen name="CustomerEdit" component={CustomerEdit} options={{
                    headerShown: false
                }}></Stack.Screen>
            </Stack.Navigator>
        </View>
    )
}
export default CustomersPage;