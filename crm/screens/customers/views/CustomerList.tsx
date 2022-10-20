import {View, Text, FlatList } from "react-native";
import CustomerListTile from "../components/CustomerListTile";
import config from "../../../config";
import {useEffect, useState} from "react";
import axios from "axios";

/*function CustomerList({listData}: {listData: Customer[]}) {
    console.log(listData);*/
const url = config.api + 'customers/';

function CustomerList() {

    let [customers, setCustomers] = useState([] as Customer[]);
    useEffect(() => {
        async function loadCustomersAsync() {

            let response =  await axios.get(url);
            setCustomers(response.data);
        }

        loadCustomersAsync();
    }, []);

    return (
        <View>
            <Text>List</Text>

     {/*       <FlatList data={customers} renderItem={CustomerListTile}></FlatList>*/}
            <FlatList data={customers} renderItem={(props)=> <CustomerListTile{...props} />}></FlatList>

        </View>
    )
}

export default CustomerList;

