import React, { useState, useEffect } from "react";
import { View, Image, Text } from 'react-native';
import FlipCard from 'react-native-flip-card';
import { EventRegister } from "react-native-event-listeners"; 

import { FIREBASE_AUTH, FIREBASE_DB } from '../FirebaseConfig';
import { FIREBASE_USERINFO , FIREBASE_USERS} from '../FirebaseConfig';
import { getAuth } from 'firebase/auth';
import {collection, getDocs, orderBy, query, doc, setDoc, getDoc} from "firebase/firestore";

import { cardFlip } from '../styling'
import { FontAwesome6 } from "@expo/vector-icons";

function CardFlip() {
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

    return (
        <FlipCard 
            friction={100}
            flipHorizontal={true}
            flipVertical={false}
            flip={false}
            clickable={true}
            onFlipEnd={() => {}}
        >
            {/* Front Side */}
            <View style={cardFlip.front}>
                
                <View style={cardFlip.image}>
                    
                </View>

                <View style={cardFlip.profile}>
                    <View style={cardFlip.intro}>
                        <Text style={cardFlip.name}>
                            {fireData ? fireData.firstName : "fetch name failed"},
                        </Text>
                        <Text style={cardFlip.age}>
                            {fireData ? fireData.age : "fetch age failed"}
                        </Text>
                        <Text style={cardFlip.pronouns}>
                            {fireData ? fireData.pronouns : "fetch pronouns failed"}
                        </Text>
                    </View>

                    <View style={cardFlip.university}>
                        <FontAwesome6 name="graduation-cap" size={20} color="#FBCB77" />
                        <Text style={cardFlip.universityText}>
                            {fireData ? fireData.school : "fetch school failed"}
                        </Text>
                    </View>
                    

                    <Text style={cardFlip.bio}>
                    {fireData ? fireData.bio : "bio failed"}
                    </Text>

                    <View style={cardFlip.tags}>
                        <View style={cardFlip.tag}>
                            <Text style={cardFlip.tagText}> course name </Text>
                        </View>
                        <View style={cardFlip.tag}>
                            <Text style={cardFlip.tagText}> course name </Text>
                        </View>
                    </View>
                </View>
            </View>

            {/* Back Side */}
            <View style={cardFlip.back}>
                <View style={cardFlip.profile}>
                    <View style={cardFlip.intro}>
                        <Text style={cardFlip.name}>
                            {fireData ? fireData.firstName : "fetch name failed"},
                        </Text>
                        <Text style={cardFlip.age}>
                            {fireData ? fireData.age : "fetch age failed"}
                        </Text>
                        <Text style={cardFlip.pronouns}>
                            {fireData ? fireData.pronouns : "fetch pronouns failed"}
                        </Text>
                    </View>

                    <View style={cardFlip.about}>
                        <View style={cardFlip.aboutRow}>
                            <Text style={cardFlip.rowL}>
                                University
                            </Text>
                            <Text style={cardFlip.rowR}>
                                {fireData ? fireData.university : "fetch school failed"}
                            </Text>
                        </View>
                        <View style={cardFlip.aboutRow}>
                            <Text style={cardFlip.rowL}>
                                Academic Year
                            </Text>
                            <Text style={cardFlip.rowR}>
                                {fireData ? fireData.year : "fetch year failed"}
                            </Text>
                        </View>
                        <View style={cardFlip.aboutRow}>
                            <Text style={cardFlip.rowL}>
                                Major
                            </Text>
                            <Text style={cardFlip.rowR}>
                                {fireData ? fireData.major : "fetch major failed"}
                            </Text>
                        </View>
                    </View>

                    <View style={cardFlip.prompts}>
                        <Text style={cardFlip.prompt}>
                            {/* placeholder prompt - will be dynamic */}
                                {fireData ? fireData.prompt.prompt : "fetch prompt failed"}
                            </Text>
                        <Text style={cardFlip.response}>
                            {fireData ? fireData.response : "fetch response failed"}
                        </Text>                         
                    </View>
                    <View style={cardFlip.prompts}>
                        <Text style={cardFlip.prompt}>
                            {/* placeholder prompt - will be dynamic */}
                            My study style is
                        </Text>
                        <Text style={cardFlip.response}>
                            {fireData ? fireData.study_style : "fetch style failed"}
                        </Text>                         
                    </View>
                </View>
            </View>
        </FlipCard>
    );
};

export default CardFlip;