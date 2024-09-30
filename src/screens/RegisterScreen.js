import { Button, View, Text } from "react-native";

export default function RegisterScreen({navigation}) {
    return (
        <View>
            <Text>Register Here</Text>
            <Button title="Go Back to Login" onPress={navigation.navigate("Login")}/>
        </View>
    )
}