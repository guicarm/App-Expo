import { createContext, useState, useEffect} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)

    useEffect( () => {

    }, [] )
}