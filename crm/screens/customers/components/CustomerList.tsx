import {View, Text} from "react-native";

function CustomerList({listData}: {listData: Customer[]}) {
    console.log(listData);
    return (
        <View>
            <Text>List {listData.length}</Text>
        </View>
    )
}

export default CustomerList;