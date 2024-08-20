import React from "react";
import { Text, View } from "react-native";
import PropTypes from "prop-types";
import styles from "./style";



const ProfileTabTitle = ({ title, isFocused }) => {

    return (
        <View style={styles.container}>
            <Text style={isFocused ? styles.titleFocused : styles.titleNotFocused}>{title}</Text>
        </View>
    );
}


ProfileTabTitle.propTypes = {

    title: PropTypes.string.isRequired,
    isFocused: PropTypes.bool.isRequired
}

export default ProfileTabTitle;