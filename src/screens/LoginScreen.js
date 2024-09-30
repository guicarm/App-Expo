import { Button, View, Text} from "react-native"
import LoginForm from "../components/LoginForm"

const LoginScreen = ({navigation}) => {
    reutrn(
        <View>
            <LoginForm/>
            <Button title="Register" onPress={() => navigation.navigate("Register")}/>
        </View>
    )
}

export default LoginScreen