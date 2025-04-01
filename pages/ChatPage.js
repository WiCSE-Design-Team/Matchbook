import { useState, useEffect } from 'react';
import * as React from 'react';
import { ScrollView, Image, View, Text, SafeAreaView, Dimensions, FlatList } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

import { chatPage } from '../styling';
import { useNavigation } from '@react-navigation/native';
import { getAuth } from 'firebase/auth';
import { addDoc, collection, getDocs, onSnapshot, query, where } from 'firebase/firestore';
import { FIREBASE_DB } from '../FirebaseConfig';
import { getAllUsers } from '../components/Requests';

function ChatPage() {
    const navigation = useNavigation();
    const [chats, setChats] = useState([]);
    const [users, setUsers] = useState([]);

    const currentUser = getAuth().currentUser;

    // fetches all users from UserInfo
        // to-do: only fetch users matched with and haven't messaged yet
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const querySnapshot = await getDocs(collection(FIREBASE_DB, 'UserInfo'));
                const usersList = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                setUsers(usersList);
            }
            catch (error) {
                console.log("error fetching users: ", error);
            }
        };

        fetchUsers();
    }, []);
    
    // fetches chats for list?
    useEffect(() => {
        const chatsRef = collection(FIREBASE_DB, 'chats');
        const q = query(chatsRef, where('users', 'array-contains', currentUser.uid));

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const chatList = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));

            setChats(chatList);
        });

        return unsubscribe;
    }, [currentUser]);

    // adds document to chats collection
    const createChat = async (currentUID, otherUID) => {
        const chatsCollectionRef = collection(FIREBASE_DB, 'chats');

        try {
            const newChat = await addDoc(chatsCollectionRef, {
                users: [currentUID, otherUID],
                name: `${otherUID}`,
                lastMessage: '',
            });

            console.log('new chat created with id: ', newChat.id);
        }
        catch (error) {
            console.log('error creating new chat: ', error);
            return null;
        }
    };

    // navigating to chat
    const openChat = (chatID) => {
        navigation.navigate('Chat', { chatID });
    };

    return (
        <SafeAreaView style={chatPage.container}>
            <View style={chatPage.header}>
                <Text style={chatPage.title}>Chats</Text>
            </View>

            <View style={chatPage.matchesContainer}>
                <Text style={chatPage.matchesTitle}>
                    All Users (temp)
                </Text>

                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {users.map((user, id)=> {
                        return (
                            <View key={id} style={chatPage.match} onTouchEnd={() => createChat(currentUser.uid, 'temp uid')}>
                                <View style={chatPage.matchIcon}>
                                    <FontAwesome6 name="user" size={20} color='#9E122C' />
                                </View>

                                <Text style={chatPage.matchName}>{user.first_name}</Text>
                            </View>
                        )
                    })}
                </ScrollView>

            </View>
            
            <ScrollView style={chatPage.chats}>
                {chats.map((chat, id)=> {
                    console.log(chat.name);
                    return(
                        <View key={id} style={chatPage.chat} onTouchEnd={openChat}>
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
            
        </SafeAreaView>
    );
};

export default ChatPage;