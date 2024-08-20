import React from "react";
import { View,Text,SafeAreaView } from "react-native";
import styles from "./style";


const Txt = () => {
    
    return (
        <SafeAreaView>
            <Text style={styles.txt}>Hello World</Text>
        </SafeAreaView>
    );
}


export default Txt;