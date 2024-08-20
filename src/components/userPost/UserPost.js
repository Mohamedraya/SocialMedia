import React from "react";
import { View, Text, Image } from "react-native";
import PropTypes from "prop-types";
import styles from "./style";
import UserProfileImage from "../userProfileImage/UserProfileImage";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { faHeart ,faMessage,faBookmark} from "@fortawesome/free-regular-svg-icons";
import { horizontalScale, scaleFontSize } from "../../assets/styles/scaling";


const UserPost = props => {

    return (
        <View style={styles.mainContainer}>
            <View style={styles.userPostHeader}>
                <View style={styles.imgAndNameContainer}>
                    <UserProfileImage profileImage={props.profileImage} imageDimensions={horizontalScale(48)} />
                    <View style={styles.nameContainer}>
                        <Text style={styles.userNameTxt}>{props.firstName} {props.lastName}</Text>
                        {props.location && <Text style={styles.locationTxt}>{props.location}</Text>}
                    </View>
                </View>
                <FontAwesomeIcon icon={faEllipsis} color="#79869F" size={scaleFontSize(24)} />
            </View>

            <View style={styles.postImgContainer}>
                <Image source={props.image} style={styles.postImg} />
            </View>

            <View style={styles.commentMainContainer}>
                <View style={styles.firstSmallView}>
                    <FontAwesomeIcon icon={faHeart} />
                    <Text style={styles.likesTxt}>{props.likes}</Text>
                </View>
                <View style={styles.secondSmallView}>
                    <FontAwesomeIcon icon={faMessage} />
                    <Text style={styles.likesTxt}>{props.comments}</Text>
                </View>
                <View style={styles.secondSmallView}>
                    <FontAwesomeIcon icon={faBookmark} />
                    <Text style={styles.likesTxt}>{props.bookmarks}</Text>
                </View>
            </View>

        </View>
    );
}


UserPost.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    profileImage: PropTypes.any.isRequired,
    location: PropTypes.string,
    image: PropTypes.any.isRequired,
    likes: PropTypes.number.isRequired,
    comments: PropTypes.number.isRequired,
    bookmarks: PropTypes.number.isRequired,
}

export default UserPost;