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
    const userInfo = FIREBASE_USERS;
    const currentUser = getAuth().currentUser;
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
    

    useEffect(() => { //add functionality to not show current user
        if (users.length > 0) {
            const listener = EventRegister.addEventListener("NextUser", () => {
                console.log("cardflip changed user");
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
                    {fireData ? fireData.bio : "bio failed"},
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
                                Senior
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
                            My least favorite study spot is
                        </Text>
                        <Text style={cardFlip.response}>
                            {fireData ? fireData.leastSpot : "fetch spot failed"}
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