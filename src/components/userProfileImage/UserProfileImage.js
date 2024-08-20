import React from "react";
import { View, Text, Image } from "react-native";
import PropTypes from "prop-types";
import styles from "./style";


const UserProfileImage = ({ profileImage , imageDimensions}) => {

    return (
        <View style={styles.userImageContainer(imageDimensions)}>
            <Image source={profileImage} style={{width: imageDimensions, height: imageDimensions, borderRadius: imageDimensions }} />
        </View>
    );
}


UserProfileImage.propTypes = {

    profileImage: PropTypes.any.isRequired,
    imageDimensions: PropTypes.number.isRequired
}

export default UserProfileImage;