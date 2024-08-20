import React from "react";
import { View ,ScrollView, Image} from "react-native";
import styles from "./style";


const ProfileTabContent = () => {

    return (
        <ScrollView style={styles.profileTabCotentContainer}>
           <View style={styles.imgContainer}> 
              <Image source={require("../../assets/images/pexels-jopwell-2422290.jpg")} style={styles.img}/>
              <Image source={require("../../assets/images/pexels-jopwell-2422290.jpg")} style={styles.img}/>
              <Image source={require("../../assets/images/pexels-jopwell-2422290.jpg")} style={styles.img}/>
              <Image source={require("../../assets/images/pexels-jopwell-2422290.jpg")} style={styles.img}/>
              <Image source={require("../../assets/images/pexels-jopwell-2422290.jpg")} style={styles.img}/>
              <Image source={require("../../assets/images/pexels-jopwell-2422290.jpg")} style={styles.img}/>
           </View>
        </ScrollView>
    );
}

export default ProfileTabContent;