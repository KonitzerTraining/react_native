import {View, Text, Button} from "react-native";
import {CustomerService} from "../services/CustomerService";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../../store";
import {deleteCustomer, loadCustomers} from "../store/customerSlice";
import {NavigationProp, RouteProp, StackActions} from "@react-navigation/native";


function CustomerDetails({route, navigation}: any) {
    const customer = route.params.customer;
    const dispatch = useDispatch<AppDispatch>()

    function deleteHandler() {
        dispatch(deleteCustomer(customer.id));
        //navigation.navigate('CustomerList');

     /*   navigation.dispatch(
            StackActions.replace('CustomerList')
        );*/
    }

    function editHandlder() {
        navigation.dispatch(
            StackActions.replace('CustomerEdit', {
                customer
            })
        );
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
                onPress={editHandlder}
                title="Edit"
                color="blue"
            />
            <Button
                onPress={deleteHandler}
                title="Delete"
                color="#841584"
            />
        </View>
    );
}

export default CustomerDetails;