import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, Pressable } from 'react-native';
import { EventRegister } from "react-native-event-listeners"; 
import MultiSelectComponent from '../components/MultiSelect';
import CardFlip from '../components/CardFlip';
import { FIREBASE_USERINFO, FIREBASE_USERS } from '../FirebaseConfig';
import { getAuth } from 'firebase/auth';
import {doc, arrayUnion, getDocs} from "firebase/firestore";
import { matchingPage } from '../styling';
import { getUserByID } from '../components/Requests';

function MatchingPage() {
    const currentUser = getAuth().currentUser;
    const userInfo = FIREBASE_USERS;
    const [users, setUsers] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const querySnapshot = await getDocs(userInfo);
                const usersList = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setUsers(usersList);
            } catch (error) {
                console.log("Error fetching users:", error);
            }
        };
        fetchUsers();
    }, []);
    

    useEffect(() => {
        if (users.length > 0) {
            const listener = EventRegister.addEventListener("NextUser", () => {
                console.log("matching page changed user");
                setCurrentIndex(prevIndex => (prevIndex + 1) % users.length);
                if(users[currentIndex].uid == currentUser.uid){
                    setCurrentIndex(prevIndex => (prevIndex + 1) % users.length);
                }
            });
    
            return () => EventRegister.removeEventListener(listener);
        }
    }, [users]);
    
    const fireData = users.length > 0 ? users[currentIndex] : null;
    
    console.log(fireData ? fireData.firstName : "null");
    

    /*
    //need way to get user at top of collection (!= currUser)
    //getAllUsers in Requests.js returns array of users
    //const displayedUser
    //const displayedUser = top user of collection
    const addApproved = async () => {
        await updateDoc(currUser, {
            want: arrayUnion("DISPLAY USER'S ID"), //need to access uid of user at top of collection
          });
        if(currUser UID is in displayedUser want field){
            await updateDoc(currUser, {
                matches: arrayUnion("DISPLAY USER'S ID"), //need to access uid of user at top of collection
             });
            alert("New match! Go to chat page to start connecting.");
        }
        
    }*/

    return (
        <SafeAreaView style={matchingPage.fullScreen}>
            <View style={matchingPage.multiselect}>
                <MultiSelectComponent />
            </View>
            <View style={matchingPage.card}>
                <CardFlip/>
            </View>

            <View style={matchingPage.bottomButtons}>
                <Pressable
                    onPress = {() => EventRegister.emit("NextUser")}
                    style={({ pressed }) => [{ backgroundColor: pressed ? '#9E122C' : 'none' }, matchingPage.passButton ]}>
                    {({ pressed }) => (
                        <Text style={[{ color: pressed ? 'white' : '#9E122C' }, matchingPage.buttonText]}>
                            Pass
                        </Text>
                    )}
                </Pressable>

                <Pressable
                    onPress = {() => {
                        EventRegister.emit("NextUser");

                    }} //need to add to collection, check if present in other collection array
                    style={({ pressed }) => [{ backgroundColor: pressed ? 'none' : '#9E122C' }, matchingPage.matchButton ]}>
                    {({ pressed }) => (
                        <Text style={[{ color: pressed ? '#9E122C' : 'white' }, matchingPage.buttonText]}>
                            Match
                        </Text>
                    )}
                </Pressable>
            </View>
        </SafeAreaView>
    );
}

export default MatchingPage;