import { useContext, useState } from "react"
import { AuthContext } from "../context/AuthContext"
import { Button, TextInput, View } from "react-native"

const LoginForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {login} = useContext(AuthContext)
    const [error, setError] = useState(null)


    const handleLogin = async () => {
        try {
            setError(null)
            await login(email, password)
        } catch (error) {
            setError("Invalid email and/or password")
        }
    }

    return (
        <View style={styles.container}>
            {error && <Text style={styles.errorText}> {error} </Text>}

            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />

            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
            />

            <Button title="Login" onPress={handleLogin}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    input: {
        marginVertical: 10,
        borderWidth: 1,
        padding: 8,
        borderRadius: 4
    },
    errorText: {
        color: 'red',
        marginBottom: 10
    }
})

export default LoginForm