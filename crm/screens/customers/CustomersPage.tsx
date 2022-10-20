import {View, Text} from "react-native";
import config from "../../config";
import axios from "axios";
import {useEffect, useState} from "react";

const url = config.api + 'customers/';

function CustomersPage() {

    // let customers: any = [];

    // Array Deconstructor
    let [customers, setCustomers] = useState([] as Customer[]);
    console.log(customers);

    useEffect(() => {
        async function loadCustomersAsync() {

        let response =  await axios.get(url);
            setCustomers(response.data);
        }

        loadCustomersAsync();
    }, []);


/*    useEffect(() => {
        axios.get(url).then((response) => {
            console.log(response.data);
            setCustomers(response.data);
        })
    }, []);*/

    return (
        <View>
            <Text>Hello {customers[0]?.name}</Text>

        </View>
    )
}
export default CustomersPage;