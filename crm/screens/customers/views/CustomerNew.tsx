import {View, Text, TextInput, StyleSheet, Button} from "react-native";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../../store";
import {loadCustomers, postCustomer} from "../store/customerSlice";
import {useNavigation} from "@react-navigation/native";
function CustomerNew() {

    const [name, setName] = useState('test');
    const [credit, setCredit] = useState(123);
    const dispatch = useDispatch<AppDispatch>()
    const navigation = useNavigation<any>()

    const submitHandler = () => {
        console.log(name, credit);
        dispatch(postCustomer({
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
            title="New"
            color="#841584"
            />
        </View>
    );
}

export default CustomerNew;

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