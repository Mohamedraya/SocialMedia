import React from "react";
import {View,Text,TouchableOpacity} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import PropTypes from "prop-types";
import styles from "./style";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { scaleFontSize } from "../../assets/styles/scaling";
import { useNavigation } from "@react-navigation/native";
import { Routes } from "../../navigation/Routes";



const Title = ({title}) => {

    const navigation = useNavigation();

    return (
        <View style={styles.headerContainer}>
           <Text style={styles.title}>{title}</Text>
           <TouchableOpacity style={styles.iconTouchAbleOpacity} onPress={() => {navigation.navigate(Routes.ProfileScreen)}}>
              <FontAwesomeIcon icon={faEnvelope} size={scaleFontSize(24)} color="#898DAE"/>
              <View style={styles.msgNumContainer}>
                <Text style={styles.notifyTxt}>12</Text>
              </View>
           </TouchableOpacity>
        </View>
    );
}


Title.propTypes = {
    
    title: PropTypes.string.isRequired, 
}


export default Title;