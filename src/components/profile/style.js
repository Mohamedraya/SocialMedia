import { StyleSheet } from "react-native";
import { horizontalScale,verticalScale,scaleFontSize } from "../../assets/styles/scaling";
import { getFontFamily } from "../../assets/fonts/helper";


const styles = StyleSheet.create({

    theMain: {
       flex: 1,
       backgroundColor: "#FFFFFF"
    },

    profileImgContainer: {
        alignSelf: 'center',
        borderColor: "#1500EC",
        borderWidth: 2,
        borderRadius: horizontalScale(110),
        padding: horizontalScale(3),
        marginTop: verticalScale(32)
    },

    profileImg: {
        width: horizontalScale(110),
        height: horizontalScale(110),
        borderRadius: horizontalScale(110),
        
    },

    profileName: {
        textAlign: "center",
        marginTop: verticalScale(20),
        color: "#022150",
        fontSize: scaleFontSize(20),
        fontFamily: getFontFamily("Inter","600")
    },

    statisticContainer: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center",
        margin: horizontalScale(30),         
        borderBottomWidth: 1,
        borderColor: "#E9EFF1",
        paddingVertical: verticalScale(30)
    },

    statisNum: {
        textAlign: "center",
        color: "#022150",
        fontFamily: getFontFamily("Inter" , "600"),
        fontSize: scaleFontSize(20)
    },

    statisTxt: {
        textAlign: "center",
        color: "#79869F",
        fontFamily: getFontFamily("Inter" , "400"),
        fontSize: scaleFontSize(16)
    },

    statisBorder: {
        borderWidth: 1,
        height: 33,
        borderColor: "#E9EFF1"
    }
});


export default styles;