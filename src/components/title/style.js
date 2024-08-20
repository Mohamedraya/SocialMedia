import { StyleSheet } from "react-native";
import { getFontFamily } from "../../assets/fonts/helper";
import { scaleFontSize ,horizontalScale,verticalScale} from "../../assets/styles/scaling";


const styles = StyleSheet.create({

    headerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems:"center",
        marginTop: verticalScale(30),
        marginLeft: horizontalScale(27),
        marginRight: horizontalScale(17),
    },

    title: {
        color: "#022150",
        fontFamily: getFontFamily("Inter" , "700"),
        fontSize: scaleFontSize(23)
    },

    iconTouchAbleOpacity: {
        
        borderRadius: horizontalScale(25),
        backgroundColor: "#F9FAFB",     
        padding: horizontalScale(14),
        
    },

    msgNumContainer: {
        position: "absolute",       
        width: horizontalScale(20),
        height: horizontalScale(20),
        borderRadius: horizontalScale(10),
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F35BAC",
        right: horizontalScale(8),
        top: horizontalScale(8)
    },

    notifyTxt: {
        color: "#FFFFFF",
        fontFamily: getFontFamily("Inter" , "600"),
        
    }
});


export default styles;