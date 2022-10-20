import {View, Text, Button} from "react-native";
import axios from "axios";
import config from "../../../config";

const url = config.api + 'customers/';

function CustomerDetails({route}: any) {
    const customer = route.params.customer;

    async function deleteHandler() {
        let response = await axios.delete(url + customer.id);
        console.log(response);
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