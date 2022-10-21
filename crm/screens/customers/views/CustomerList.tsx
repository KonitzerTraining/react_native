import {View, Text, FlatList, Button} from "react-native";
import CustomerListTile from "../components/CustomerListTile";
import { useEffect, useState} from "react";
import {useIsFocused} from "@react-navigation/native";
import {useSelector} from "react-redux";
import {RootState} from "../../../store";
import {CustomerService} from "../services/CustomerService";

function CustomerList({navigation}: any) {

    let [customers, setCustomers] = useState([] as Customer[]);

    const isFocused = useIsFocused();

    useEffect(() => {
        async function loadCustomersAsync() {
            setCustomers(await CustomerService.getAll());
        }

        loadCustomersAsync();

    }, [isFocused]);

    const newHandler = () => {
        navigation.navigate('CustomerNew')
    };

    return (
        <View>
            <Text>List</Text>

            <Button
                onPress={newHandler}
                title="New"
                color="#841584"
            />

     {/*       <FlatList data={customers} renderItem={CustomerListTile}></FlatList>*/}
            <FlatList data={customers} renderItem={(props)=> <CustomerListTile{...props} />}></FlatList>

            <CustomerListRedux></CustomerListRedux>
        </View>
    )
}

export default CustomerList;


function CustomerListRedux() {

    const customers = useSelector((state: RootState) => {
        return state.customer.customers
    })

    //let [customers, setCustomers] = useState([] as Customer[]);

    return (
        <View>
            <Text>{customers.length} customer(s) found</Text>
            <FlatList data={customers} renderItem={(props)=> <CustomerListTile{...props} />}></FlatList>
        </View>
    )
}


