import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AuthContext, AuthProvider } from './src/context/AuthContext';
import DashBoardScreen from './src/screens/DashBoardScreen';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createNativeStackNavigator()

const AppStack = () => {
  const {user} = useContext(AuthContext)
  return(
    <Stack.Navigator>
      {user ? (
        <Stack.Screen name='Dashboard' component={DashBoardScreen}/>
      ) : (
        <>
          <Stack.Screen name='Login' component={LoginScreen}/>
          <Stack.Screen name='Register' component={RegisterScreen}/>
        </>
      )}
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <AppStack/>
      </NavigationContainer>
    </AuthProvider>
  );
}
