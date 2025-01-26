import { useState, useEffect } from 'react';
import * as React from 'react';
import { ScrollView, Image, View, Text, StyleSheet, SafeAreaView, Dimensions } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';




function MessagesPage() {
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

    function openChat(id){
        //navigate to chat between
    }

    function LoadChats(){
        //call firebase to get user's chats - getChats
        //create a div for each chat with:
            //reciever profile pic
            //arrow icon
            //onClick -> navigate to individual messaging
            //Nice to have: show reciept of last message sent         


        if(chats){
            return(
                <ScrollView style={styles.chats}>
                    {chats.map((chat, id)=> {
                        console.log(chat.name);
                        return(
                            <View key={id} style={styles.chat} onClick={openChat(id)}>
                                <View style={styles.user}>
                                    <FontAwesome6 name="user" size={25} color="black"/>
                                </View>
                                
                                <Text style={styles.name}>{chat.name}</Text>
                                <View style={styles.arrow}>
                                    <FontAwesome6 name="greater-than" size={25} color="black" style={styles.icon} />
                                </View>
                            </View>
                        )
                    })}
                </ScrollView>
            )
            
 
        }

        return (<Text>Loading...</Text>)
        
    }


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={{paddingTop:'8%', fontWeight:'700', color: 'white'}}>Chats</Text>
            </View>
            <LoadChats/>
        </View>
    );
}

//width, height

const dimScreen= Dimensions.get("screen");
const styles = StyleSheet.create({
    container : {
        alignItems: 'center', justifyContent: 'top',
        height: '100%',
        display: 'flex',
        flexDirection:'column',
    },
    header : {
        display: 'flex',
        alignItems: 'center', 
        justifyContent: 'center',
        height: '12%',
        width: '100%',
        backgroundColor: '#818589',
    },
    chats : {
        height: '88%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    chat : {
        width: '100%',
        flexShrink: 1,
        padding: 10,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderBlockColor:'black',
        borderTopWidth: 0,
        borderWidth: 0.5,
        alignItems: 'center',
    },
    user : {
        borderRadius: '50%',
        width: 50,
        height: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent:'center',
        paddingLeft: 1,
        backgroundColor: '#818589',
    },
    name : {
        paddingLeft: 10,
    },
    arrow: {
        paddingLeft: '68%',
    }
});

export default MessagesPage;