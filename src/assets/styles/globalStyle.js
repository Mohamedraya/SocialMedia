import { StyleSheet } from "react-native";


const globalStyle = StyleSheet.create( {

    headerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems:"center",
        marginTop: 30,
        marginLeft: 27,
        marginRight: 17,
    },

    iconTouchAbleOpacity: {
        width: 50,
        height: 50,
        borderRadius: 100,
        //backgroundColor: "#F9FAFB",   
        backgroundColor: "yellow",
        padding: 14,
        
    },

    msgNumContainer: {
        //position: "absolute",
        backgroundColor: "#F35BAC",
        width: 16,
        height: 16,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
       
    },
});


export default globalStyle;