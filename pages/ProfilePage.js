import React, { useState, useEffect } from "react";
import {View, Text, Image, ScrollView, StyleSheet} from 'react-native';
import { FIREBASE_AUTH, FIREBASE_DB } from '../FirebaseConfig';
import {collection, getDocs, orderBy, query, doc, setDoc, getDoc, where} from "firebase/firestore";
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import { FontAwesome6 } from "@expo/vector-icons";
import { profilePage, cardFlip } from '../styling';
import { getAuth } from "firebase/auth";

function ProfilePage() {
    const [user, setUser] = useState(null);

    const currentUID = getAuth().currentUser.uid;

    useEffect(() => {
        const fetchUser = async () => {
            const usersRef = collection(FIREBASE_DB, 'users');

            const q = query(usersRef, where('uid', '==', currentUID));

            const querySnapshot = await getDocs(q);

            if (!querySnapshot.empty) {
                querySnapshot.forEach(doc => {
                    const data = doc.data();
                    setUser(data);
                });
            }
            else {
                console.log('no user found');
            }
        };

        fetchUser();
    }, []);

    const prompt = user.prompt && typeof user.prompt === "object" ? user.prompt : {};

    return (
        <View style={profilePage.full}>
            <View style={profilePage.image}>
                <Text style={{ fontSize: 15, fontFamily: 'Karla-Bold', color: 'white' }}>
                    profile picture here
                </Text>
            </View>
            
            <View style={profilePage.profile}>
                <View style={profilePage.title}>
                    <View style={profilePage.intro}>
                        <Text style={profilePage.name}>
                            {user ? user.firstName : "fetch failed"},
                        </Text>
                        <Text style={profilePage.age}>
                            {user ? user.age : "fetch failed"}
                        </Text>
                        <Text style={profilePage.pronouns}>
                            {user ? user.pronouns : "fetch failed"}
                        </Text>
                    </View>

                    <FontAwesome6 name="arrow-right-from-bracket" size={22} color="#9E122C" />
                </View>
                
                <View style={profilePage.about}>
                    <View style={profilePage.aboutRow}>
                        <Text style={profilePage.rowL}>
                            University
                        </Text>
                        <Text style={profilePage.rowR}>
                            {user ? user.university : "fetch failed"}
                        </Text>
                    </View>
                    <View style={profilePage.aboutRow}>
                        <Text style={profilePage.rowL}>
                            Academic Year
                        </Text>
                        <Text style={profilePage.rowR}>
                            {user ? user.year : "fetch failed"}
                        </Text>
                    </View>
                    <View style={profilePage.aboutRow}>
                        <Text style={profilePage.rowL}>
                            Major
                        </Text>
                        <Text style={profilePage.rowR}>
                            {user ? user.major : "fetch failed"}
                        </Text>
                    </View>
                </View>

                <Text style={profilePage.bio}>
                    {user ? user.bio : "fetch failed"}
                </Text>

                <ScrollView horizontal = {true} showsHorizontalScrollIndicator={true} contentContainerStyle={profilePage.scrollView}> 
                    <View style={profilePage.prompts}>
                        <Text style={profilePage.prompt}>
                            {prompt ? prompt.prompt : "fetch failed"}
                        </Text>
                        <Text style={profilePage.response}>
                            {user ? user.response : "fetch failed"}
                        </Text>                         
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}

export default ProfilePage;