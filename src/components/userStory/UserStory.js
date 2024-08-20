import React from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";
import UserProfileImage from "../userProfileImage/UserProfileImage";
import styles from "./style";
import { horizontalScale } from "../../assets/styles/scaling";


const UserStory = ({ firstName, profileImage }) => {

    return (
        <View style={styles.storyContainer}>

            <UserProfileImage profileImage={profileImage} imageDimensions={horizontalScale(65)}/>
            <Text style={styles.nameStyle}>{firstName}</Text>
        </View>
    );
}

UserStory.propTypes = {

    firstName: PropTypes.string.isRequired,
    profileImage: PropTypes.any.isRequired
}


export default UserStory;