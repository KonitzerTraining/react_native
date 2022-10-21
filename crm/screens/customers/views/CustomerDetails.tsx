import {View, Text, Button} from "react-native";
import {CustomerService} from "../services/CustomerService";


function CustomerDetails({route, navigation}: any) {
    const customer = route.params.customer;

    async function deleteHandler() {
        await CustomerService.deleteOne(customer.id)
        navigation.navigate('CustomerList');
    }

    return (
        <View>
            <Text>
                Name: {customer.name}
            </Text>
            <Text>
                Credit: {customer.credit.toLocaleString('de-DE')} €
            </Text>

            <Button
                onPress={deleteHandler}
                title="Delete"
                color="#841584"
            />
        </View>
    );
}

export default CustomerDetails;