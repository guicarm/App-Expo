import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { View, Text} from "react-native"

const DashBoardScreen = () => {
    const {user, logout} = useContext(AuthContext)

    return(
        <View>
            <Text>Welcome, {user?.email}</Text>
            <Button title="Logout" onPress={logout} />
        </View>
    )
}

export default DashBoardScreen