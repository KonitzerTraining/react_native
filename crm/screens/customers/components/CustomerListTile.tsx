import {View, Text} from "react-native";

function CustomerListTile({item: customer}: {item: Customer}) {
    console.log(customer);
    return (
        <View>
           <Text>{customer.id} {customer.name} {customer.credit}</Text>
        </View>
    )
}

export default CustomerListTile;