import {View, Text, FlatList } from "react-native";
import CustomerListTile from "../components/CustomerListTile";
import config from "../../../config";
import { useEffect, useState} from "react";
import axios from "axios";
import {useIsFocused} from "@react-navigation/native";

/*function CustomerList({listData}: {listData: Customer[]}) {
    console.log(listData);*/
const url = config.api + 'customers/';

function CustomerList() {

    let [customers, setCustomers] = useState([] as Customer[]);

    const isFocused = useIsFocused();

    useEffect(() => {
        async function loadCustomersAsync() {
            let response =  await axios.get(url);
            console.log(response);
            setCustomers(response.data);
        }

        loadCustomersAsync();

    }, [isFocused]);

    return (
        <View>
            <Text>List</Text>

     {/*       <FlatList data={customers} renderItem={CustomerListTile}></FlatList>*/}
            <FlatList data={customers} renderItem={(props)=> <CustomerListTile{...props} />}></FlatList>

        </View>
    )
}

export default CustomerList;

