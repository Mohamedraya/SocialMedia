import { StyleSheet } from "react-native";
import { verticalScale,horizontalScale } from "../../assets/styles/scaling";


const styles = StyleSheet.create({

    theMain: {
        backgroundColor: "#FFFFFF"
    },

    switchContainer: {
        //flex: 1,
        flexDirection: "row",
        justifyContent: "flex-start"
    },

    usersStoryContainer: {
        marginTop: verticalScale(20),
        marginHorizontal: horizontalScale(20)
    },

    userPostContainer: {
        marginHorizontal: horizontalScale(24)
    }
});

export default styles;