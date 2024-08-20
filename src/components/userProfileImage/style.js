import { StyleSheet } from "react-native";
import { horizontalScale } from "../../assets/styles/scaling";


const styles = StyleSheet.create({

    userImageContainer : (borderRadius) => ({
        borderWidth: 2,
        borderColor: "#F35BAC",
        borderRadius: borderRadius,
        padding: horizontalScale(4)
    }),

    img:  {
        width: 70,
        height: 70,
        borderRadius: 50
    },
});


export default styles;