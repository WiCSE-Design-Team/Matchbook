import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, Pressable } from 'react-native';
import { EventRegister } from "react-native-event-listeners"; 
import MultiSelectComponent from '../components/MultiSelect';
import CardFlip from '../components/CardFlip';
import { FIREBASE_USERS } from '../FirebaseConfig';
import { getAuth } from 'firebase/auth';
import {doc, getDoc, arrayUnion, getDocs, updateDoc} from "firebase/firestore";
import { matchingPage } from '../styling';

function MatchingPage() {
    const [users, setUsers] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const fetchUserById = async (userId) => {
        if (!userId) return null;
        try {
            const userRef = doc(FIREBASE_USERS, userId);
            const userSnap = await getDoc(userRef);
            if (userSnap.exists()) {
                return { id: userSnap.id, ...userSnap.data() };
            } else {
                console.log("No such user!");
                return null;
            }
        } catch (error) {
            console.log("Error fetching user:", error);
            return null;
        }
    };

    useEffect(() => {
        const loadUser = async () => {
            const user = getAuth().currentUser;
            if (user) {
                const userData = await fetchUserById(user.uid);
                setCurrentUser(userData);
            } else {
                console.log('No user signed in');
            }
        };
        loadUser();
    }, []);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const querySnapshot = await getDocs(FIREBASE_USERS);
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
        if (users.length > 0 && currentUser) {
            const listener = EventRegister.addEventListener("NextUser", () => {
                let nextIndex = (currentIndex + 1) % users.length;
    
                // Keep skipping until we find a user who is not the currentUser
                while (users[nextIndex].uid === currentUser.uid && users.length > 1) {
                    nextIndex = (nextIndex + 1) % users.length;
                }
    
                setCurrentIndex(nextIndex);
            });
    
            return () => EventRegister.removeEventListener(listener);
        }
    }, [users, currentIndex, currentUser]);

    const fireData = users.length > 0 ? users[currentIndex] : null;

    const addApproved = async () => {
        if (!fireData || !currentUser || fireData.uid === currentUser.uid) return;
        try {
            const currentRef = doc(FIREBASE_USERS, currentUser.uid);
            const fireRef = doc(FIREBASE_USERS, fireData.uid);

            await updateDoc(currentRef, {
                want: arrayUnion(fireData.uid),
            });

            if (fireData.want && fireData.want.includes(currentUser.uid)) {
                alert("New match! Go to chat page to start connecting.");
                await updateDoc(currentRef, {
                    match: arrayUnion(fireData.uid),
                });
                await updateDoc(fireRef, {
                    match: arrayUnion(currentUser.uid),
                });
            }
        } catch (error) {
            console.log("Error updating matches:", error);
        }
    };

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
                        addApproved();
                    }}
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