import {View, Text} from "react-native";
function CustomerDetails({route}: any) {
    const customer = route.params.customer;

    return (
        <View>
            <Text>
              Name:  {customer.name}
            </Text>
            <Text>
              Credit:  {customer.credit.toLocaleString('de-DE')} €
            </Text>
        </View>
    );
}

export default CustomerDetails;