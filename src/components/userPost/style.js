import { StyleSheet } from "react-native";
import { getFontFamily } from "../../assets/fonts/helper";
import { horizontalScale ,scaleFontSize,verticalScale} from "../../assets/styles/scaling";


const styles = StyleSheet.create({

    mainContainer: {
        borderBottomWidth: 1,
        paddingVertical: verticalScale(20)
    },

    userPostHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },

    imgAndNameContainer: {
        flexDirection: "row",
        alignItems: "center"
    },


    nameContainer: {
       marginLeft: horizontalScale(10),
    },

    userNameTxt: {
        color: "#000",
        fontFamily: getFontFamily("Inter" , "500"),
        fontSize: scaleFontSize(16)
    },

    locationTxt: {
        color: "#79869F",
        fontFamily: getFontFamily("Inter" , "600"),
        fontSize: scaleFontSize(12),
        marginTop: verticalScale(5)
    },

    postImgContainer: {
        marginVertical: verticalScale(10),
        
    },

    postImg: {
        width: 400,
        height: 300,
        resizeMode: "contain"
    },

    commentMainContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: horizontalScale(5)
    },

    firstSmallView: {
        flexDirection: "row",
        alignItems: "center"
    },

    secondSmallView: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: horizontalScale(27)
    },

    likesTxt: {
        marginLeft: horizontalScale(4),
        color: "#79869F"
    }

});


export default styles;