import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import HomeScreen from "../screens/Home/HomeScreen";
import ProfileScreen from "../screens/profile/ProfileScreen";
import Posts from "../screens/posts/Posts";
import Followers from "../screens/followers/Followers";
import Friends from "../screens/friends/Friends";
import ProfileTabTitle from "../components/profileTabTitle/ProfileTabTitle";
import { Routes } from "./Routes";



const Stack  = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tabs   = createMaterialTopTabNavigator();

/*const MainMenuNavigation = () => {

    return (
        <Drawer.Navigator screenOptions={{headerShown: false}} >
            <Drawer.Screen name={Routes.HomeScreen} component={HomeScreen}/>
            <Drawer.Screen name={Routes.ProfileScreen} component={ProfileScreen}/>
        </Drawer.Navigator>
    );
}
<Stack.Screen name="Drawer" component={MainMenuNavigation}/>
*/

export const ProfileTabsNavigation = () => {

    return (
        <Tabs.Navigator screenOptions={{tabBarIndicatorStyle: {backgroundColor: "transparent"},tabBarStyle: {zIndex:0}}}>

            <Tabs.Screen name="Posts" component={Posts} 
                         options={{tabBarLabel: ({focused}) => <ProfileTabTitle title={"Photos"} isFocused={focused}/>}}/>

            <Tabs.Screen name="Followers" component={Followers} 
                         options={{tabBarLabel: ({focused}) => <ProfileTabTitle title={"videos"} isFocused={focused}/>}}/>
                         
            <Tabs.Screen name="Friends" component={Friends} 
                         options={{tabBarLabel: ({focused}) => <ProfileTabTitle title={"Saved"} isFocused={focused}/>}}/>
        </Tabs.Navigator>
    );
}



const MainNavigation = () => {

    return (
        <Stack.Navigator initialRouteName={Routes.HomeScreen} screenOptions={{headerShown: false}}>           
            <Drawer.Screen name={Routes.HomeScreen} component={HomeScreen}/>
            <Drawer.Screen name={Routes.ProfileScreen} component={ProfileScreen}/>
        </Stack.Navigator>
    );
}

export default MainNavigation;
