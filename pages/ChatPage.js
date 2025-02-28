import { useState, useEffect } from 'react';
import * as React from 'react';
import { ScrollView, Image, View, Text, SafeAreaView, Dimensions } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

import { chatPage } from '../styling';

function openChat(id){
    //navigate to chat between
}

function LoadChats(){
    const [chats, setChats] = useState([
        {
            name : "Paige",
            photo_url : "fakepath/photo1.jpg",
            chatid : 1234
        },
        {
            name : "Mary",
            photo_url: "fakepath/photo2.jpg",
            chatid : 1234
        }
    ]);

    //call firebase to get user's chats - getChats
    //create a div for each chat with:
        //reciever profile pic
        //arrow icon
        //onClick -> navigate to individual messaging
        //Nice to have: show reciept of last message sent         


    if(chats){
        return(
            <ScrollView style={chatPage.chats}>
                {chats.map((chat, id)=> {
                    console.log(chat.name);
                    return(
                        <View key={id} style={chatPage.chat} onClick={openChat(id)}>
                            <View style={chatPage.user}>
                                <View style={chatPage.icon}>
                                    <FontAwesome6 name="user" size={20} color='white' />
                                </View>

                                <Text style={chatPage.name}>{chat.name}</Text>
                            </View>
                            
                            <View style={chatPage.arrow}>
                                <FontAwesome6 name="chevron-right" size={25} color="#9E122C" />
                            </View>
                        </View>
                    )
                })}
            </ScrollView>
        )
    }

    return (<Text>Loading...</Text>)
}

function ChatPage() {
    const [chats, setChats] = useState([
        {
            name : "Paige",
            photo_url : "fakepath/photo1.jpg",
            chatid : 1234
        },
        {
            name : "Mary",
            photo_url: "fakepath/photo2.jpg",
            chatid : 1234
        },
        {
            name : "Robin",
            photo_url: "fakepath/photo2.jpg",
            chatid : 1234
        },
        {
            name : "Alexa",
            photo_url: "fakepath/photo2.jpg",
            chatid : 1234
        },
        {
            name : "Anna",
            photo_url: "fakepath/photo2.jpg",
            chatid : 1234
        },
    ]);

    return (
        <SafeAreaView style={chatPage.container}>
            <View style={chatPage.header}>
                <Text style={chatPage.title}>Chats</Text>
            </View>

            <View style={chatPage.matchesContainer}>
                <Text style={chatPage.matchesTitle}>
                    Message your matches!
                </Text>

                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={chatPage.matches}>
                    {chats.map((chat, id) => {
                        return (
                            <View style={chatPage.match}>
                                <View style={chatPage.matchIcon}>
                                    <FontAwesome6 name="user" size={20} color='#9E122C' />
                                </View>

                                <Text style={chatPage.matchName}>{chat.name}</Text>
                            </View>
                        )
                    })}
                </ScrollView>
            </View>

            <LoadChats/>
        </SafeAreaView>
    );
}

//width, height

const dimScreen= Dimensions.get("screen");

export default ChatPage;