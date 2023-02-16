import React from "react";
import { Header } from "react-native-elements";



export default function AppHeader() {
    return <Header
        backgroundColor="#03c4a1"
        centerComponent={{
            text: "Photo Gallery",
            style: {
                color: '#fff',
                fontWeight: 'bold',
                fontSize: 25
            }
        }}
    />
}