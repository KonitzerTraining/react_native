import {View, Text} from "react-native";
import config from "../config";
import axios from "axios";

const url = config.api + 'customers/';

function CustomersPage() {

    axios.get(url).then((response) => {
        console.log(response.data);
    })

    return (
        <View>
            <Text>Hello world</Text>
        </View>
    )
}
export default CustomersPage;