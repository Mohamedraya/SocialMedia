import { StyleSheet } from "react-native";
import { horizontalScale } from "../../assets/styles/scaling";



const styles = StyleSheet.create({
    
    profileTabCotentContainer: {
        backgroundColor: "#FFFFFF"
    },

    imgContainer: {
        marginHorizontal: horizontalScale(21),
        
        flexDirection: "row",
        justifyContent: "space-between",
        //flexWrap: "wrap"
    },

    img: {
        width: horizontalScale(150),
        height: horizontalScale(90),
        marginRight: horizontalScale(20)
    }
});


export default styles;