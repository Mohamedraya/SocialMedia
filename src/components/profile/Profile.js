import React from "react";
import { SafeAreaView, View, Text, ScrollView, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ProfileTabsNavigation } from "../../navigation/MainNavigation";
import styles from "./style";


const Profile = () => {

    const navigation = useNavigation();

    return (

        <SafeAreaView style={styles.theMain}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

                <View style={styles.profileImgContainer}>
                    <Image source={require("../../assets/images/pexels-jopwell-2422290.jpg")} style={styles.profileImg} />
                </View>

                <Text style={styles.profileName}>Emmunal robertin</Text>

                <View style={styles.statisticContainer}>
                   <View>
                      <Text style={styles.statisNum}>45</Text>
                      <Text style={styles.statisTxt}>Following</Text>
                   </View>

                   <View style={styles.statisBorder}/>

                   <View>
                      <Text style={styles.statisNum}>30M</Text>
                      <Text style={styles.statisTxt}>Followers</Text>
                   </View>

                   <View style={styles.statisBorder}/>

                   <View>
                      <Text style={styles.statisNum}>100</Text>
                      <Text style={styles.statisTxt}>Posts</Text>
                   </View>
                </View>

                <View>
                   <ProfileTabsNavigation/>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}


export default Profile;