import { StyleSheet } from "react-native";
import { getFontFamily } from "../../assets/fonts/helper";
import { horizontalScale,scaleFontSize } from "../../assets/styles/scaling";


const styles = StyleSheet.create({

    storyContainer: {
        marginRight: horizontalScale(20)
    },


    nameStyle: {
        color: "#022150",
        fontFamily: getFontFamily("Inter","500"),
        fontSize: scaleFontSize(14),
        textAlign: "center",
        marginTop: 8
    }
});

export default styles;