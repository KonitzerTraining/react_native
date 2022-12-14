import {View, Text, StyleSheet, Pressable} from "react-native";
import {useNavigation} from "@react-navigation/native";


function CustomerListTile({item: customer}: { item: Customer }) {


    const navigation = useNavigation<any>();

    function selectCustomerHandler() {
        console.log(customer);
        navigation.navigate('CustomerDetails', {
            customer
        });
    }


    return (
        <Pressable onPress={selectCustomerHandler}>
            <View style={styles.singleCustomer}>
                <Text>{customer.id} {customer.name} {customer.credit}</Text>
            </View>
        </Pressable>
    );
}

export default CustomerListTile;

const styles = StyleSheet.create({
    singleCustomer: {
        backgroundColor: 'white',
        marginBottom: 5,
        padding: 10
    }
});

