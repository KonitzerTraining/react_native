import {View, Text, TextInput, Button, StyleSheet} from "react-native";
import {RouteProp} from "@react-navigation/native";
import {useState} from "react";
import {postCustomer, putCustomer} from "../store/customerSlice";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../../store";


function CustomerEdit({route, navigation}: any) {

    const customer = route.params.customer;
    const dispatch = useDispatch<AppDispatch>();
    const [name, setName] = useState(customer.name);
    const [credit, setCredit] = useState(customer.credit);

    const submitHandler = () => {
       console.log(name, credit);
       dispatch(putCustomer({
            ...customer,
            name, credit
        }));

       navigation.navigate('CustomerList')

    }
    return (
        <View style={styles.view}>
            <Text>
                New
            </Text>
            <TextInput style={styles.input} placeholder="Name" keyboardType="default" defaultValue={name} onChangeText={(name) => {
                setName(name);
            }}></TextInput>
            <TextInput style={styles.input} placeholder="Credit" keyboardType="numeric" defaultValue={credit} onChangeText={(credit) => {
                setCredit(+credit);
            }}></TextInput>

            <Button
                onPress={submitHandler}
                title="Update"
                color="#841584"
            />
        </View>
    );
}

export default CustomerEdit;

const styles = StyleSheet.create({
    input : {
        borderWidth: 1,
        padding: 5,
        margin: 3,
        marginBottom: 10,
    },
    view: {
        backgroundColor: 'white'
    }
});