import { StyleSheet } from "react-native";
import { getFontFamily } from "../../assets/fonts/helper";
import { horizontalScale, scaleFontSize } from "../../assets/styles/scaling";


const styles = StyleSheet.create({

    container: {
        padding: horizontalScale(15)
    },

    titleFocused: {
        color: "#022150",
        fontFamily: getFontFamily("Inter" , "500"),
        fontSize: scaleFontSize(16)
    },

    titleNotFocused: {
        color: "#79869F",
        fontFamily: getFontFamily("Inter" , "400"),
        fontSize: scaleFontSize(16)
    }
});

export default styles;


