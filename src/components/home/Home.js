import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, View, StatusBar } from "react-native";
import Title from "../title/Title";
import UserStory from "../userStory/UserStory";
import UserPost from "../userPost/UserPost";
import styles from "./style";


const usersStories = [
    {
        id: 1,
        name: "Mohamed",
        image: require("../../assets/images/pexels-jopwell-2422290.jpg")
    },//0
    {
        id: 2,
        name: "Mohamed",
        image: require("../../assets/images/pexels-jopwell-2422290.jpg")
    },
    {
        id: 3,
        name: "Mohamed",
        image: require("../../assets/images/pexels-jopwell-2422290.jpg")
    },
    {
        id: 4,
        name: "Mohamed",
        image: require("../../assets/images/pexels-jopwell-2422290.jpg")
    },
    {
        id: 5,
        name: "Mohamed",
        image: require("../../assets/images/pexels-jopwell-2422290.jpg")
    },//4
    {
        id: 6,
        name: "Mohamed",
        image: require("../../assets/images/pexels-jopwell-2422290.jpg")
    },
    {
        id: 7,
        name: "Mohamed",
        image: require("../../assets/images/pexels-jopwell-2422290.jpg")
    },
    {
        id: 8,
        name: "Mohamed",
        image: require("../../assets/images/pexels-jopwell-2422290.jpg")
    },
    {
        id: 9,
        name: "Mohamed",
        image: require("../../assets/images/pexels-jopwell-2422290.jpg")
    },//8
];

const userPosts = [
    {
        id: 1,
        firstName: "Allison",
        lastName: "Becker",
        profileImage: require("../../assets/images/pexels-jopwell-2422290.jpg"),
        location: "Boston, MA",
        image: require("../../assets/images/pexels-jopwell-2422290.jpg"),
        likes: 102,
        comments: 24,
        bookmarks: 55
    },

    {
        id: 2,
        firstName: "Jennifer",
        lastName: "Wilkson",
        profileImage: require("../../assets/images/pexels-jopwell-2422290.jpg"),
        location: "Worcestor, MA",
        image: require("../../assets/images/pexels-jopwell-2422290.jpg"),
        likes: 95,
        comments: 25,
        bookmarks: 70
    },

    {
        id: 3,
        firstName: "Adam",
        lastName: "spera",
        profileImage: require("../../assets/images/pexels-jopwell-2422290.jpg"),
        location: "Worcester, MA",
        image: require("../../assets/images/pexels-jopwell-2422290.jpg"),
        likes: 100,
        comments: 8,
        bookmarks: 14
    },

    {
        id: 4,
        firstName: "Nata",
        lastName: "Vacheisili",
        profileImage: require("../../assets/images/pexels-jopwell-2422290.jpg"),
        location: "New York, MA",
        image: require("../../assets/images/pexels-jopwell-2422290.jpg"),
        likes: 47,
        comments: 16,
        bookmarks: 6
    },

    {
        id: 5,
        firstName: "Nicolas",
        lastName: "Namoradze",
        profileImage: require("../../assets/images/pexels-jopwell-2422290.jpg"),
        location: "Berlin, Germany",
        image: require("../../assets/images/pexels-jopwell-2422290.jpg"),
        likes: 800,
        comments: 32,
        bookmarks: 12
    },
];

const Home = () => {

    const [isOn , setIsOn] = useState(false);
    
    const userStoriesPageSize = 4;
    const [userStoriesCurrentPage, setUserStoriesCurrentPage] = useState(1);
    const [userStoriesRenderedData, setUserStoriesRenderedData] = useState([]);
    const [isLoadingUserStories, setIsLoadingUserStories] = useState(false);

    const userPostsPageSize = 2;
    const [userPostsCurrentPage, setUserPostsCurrentPage] = useState(1);
    const [userPostsRenderedData, setUserPostsRenderedData] = useState([]);
    const [isLoadingUserPosts, setIsLoadingUserPosts] = useState(false);


    const pagination = (database, currentPage, pageSize) => {

        startIndex = (currentPage - 1) * pageSize; //0
        endIndex = startIndex + pageSize;

        if (startIndex >= database.length) {
            return [];
        }

        return database.slice(startIndex, endIndex);
    }

    useEffect(() => {
        setIsLoadingUserStories(true);
        const getInitialData = pagination(usersStories, 1, userStoriesPageSize);
        setUserStoriesRenderedData(getInitialData);
        setIsLoadingUserStories(false);

        setIsLoadingUserPosts(true);
        const getInitialDataPosts = pagination(userPosts, 1, userPostsPageSize);
        setUserPostsRenderedData(getInitialDataPosts);
        setIsLoadingUserPosts(false);

    }, []);

    return (
        <SafeAreaView style={styles.theMain}>

            <StatusBar backgroundColor={"green"} barStyle={"light-content"}/>
            <Title title="Let’s Explore" />
            
            <View style={styles.usersStoryContainer}>
                <FlatList data={userPostsRenderedData} renderItem={({ item }) => <UserPost firstName={item.firstName} lastName={item.lastName}
                    location={item.location} image={item.image}
                    likes={item.likes} comments={item.comments}
                    bookmarks={item.bookmarks} profileImage={item.profileImage} />} showsVerticalScrollIndicator={false}

                    onEndReachedThreshold={0.5} onEndReached={() => {
                        if (isLoadingUserPosts) {
                            return;
                        }
                        setIsLoadingUserPosts(true);
                        const contentToAppend = pagination(userPosts, userPostsCurrentPage + 1, userPostsPageSize);
                        if (contentToAppend.length > 0) {
                            setUserPostsCurrentPage(userPostsCurrentPage + 1);
                            setUserPostsRenderedData(prev => [...prev, ...contentToAppend]);
                        }

                        setIsLoadingUserPosts(false);
                    }}
                    ListHeaderComponent={<>
                        <View style={styles.usersStoryContainer}>
                            <FlatList data={userStoriesRenderedData} renderItem={({ item }) => <UserStory profileImage={item.image} firstName={item.name} />}
                                horizontal showsHorizontalScrollIndicator={false} onEndReachedThreshold={0.5}
                                onEndReached={() => {
                                    if (isLoadingUserStories) {
                                        return;
                                    }
                                    setIsLoadingUserStories(true);
                                    const contentToAppend = pagination(usersStories, userStoriesCurrentPage + 1, userStoriesPageSize);
                                    if (contentToAppend.length > 0) {
                                        setUserStoriesCurrentPage(userStoriesCurrentPage + 1);
                                        setUserStoriesRenderedData(prev => [...prev, ...contentToAppend]);
                                    }
                                    setIsLoadingUserStories(false);
                                }} />
                        </View>
                    </>} />
            </View>

        </SafeAreaView>

    );
}


export default Home;

/*
<View style={styles.switchContainer}>
                <Switch value={isOn} onValueChange={value => setIsOn(value)} ios_backgroundColor={'#000'}
                        style={Platform.OS === 'android' && {
                            transform: [{scaleX: 1.5},{scaleY: 1.5}],
                        }} trackColor={Platform.OS === 'android' && {false: "gray", true: "green"}}/>
            </View>
*/