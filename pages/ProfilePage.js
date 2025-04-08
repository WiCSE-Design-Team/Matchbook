import React, { useState, useEffect } from "react";
import {View, Text, Image, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import { FIREBASE_AUTH, FIREBASE_DB } from '../FirebaseConfig';
import {collection, getDocs, orderBy, query, doc, setDoc, getDoc} from "firebase/firestore";
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import { FontAwesome6 } from "@expo/vector-icons";
import { profilePage, cardFlip } from '../styling';
import { useNavigation } from '@react-navigation/native';
import { signOut } from 'firebase/auth';

function ProfilePage() {
    const [fireData, setFireData] = useState(null);
    const navigation = useNavigation();
    
    useEffect(() => {
        let processing = true;
        firebaseData(processing);

        return () => {
            processing = false;
        }
    }, [])

    const firebaseData = async(processing) => {
        //this gets user by id
        
        const collectionRef = collection(FIREBASE_DB, 'UserInfo');
        //access user
        var user = FIREBASE_AUTH.currentUser;
        const docRef = doc(FIREBASE_DB, 'UserInfo', String(user.uid));
        
        //get user's info, getDoc = getRow in userInfo table
        if (user) {
            const docRef = doc(FIREBASE_DB, 'UserInfo', String(user.uid));
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                console.log(docSnap.data());
                setFireData(docSnap.data());
            } else {
                console.log("User with the id doesn't exist. Fetch failed.")
            }
        } else {
            console.log("No user currently logged in.");
            navigation.reset({
                index: 0,
                routes: [{ name: 'Login' }],
            });
        }
    }

    const handleLogout = async () => {
        try {
            await signOut(FIREBASE_AUTH);
            console.log("User logged out!");
            navigation.reset({
                index: 0,
                routes: [{ name: 'Login' }],
            });
        } catch (error) {
            console.error("Error signing out: ", error);
        }
    };

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
                            {fireData ? fireData.first_name : "fetch name failed"},
                        </Text>
                        <Text style={profilePage.age}>
                            {fireData ? fireData.age : "fetch age failed"}
                        </Text>
                        <Text style={profilePage.pronouns}>
                            {fireData ? fireData.pronouns : "fetch pronouns failed"}
                        </Text>
                    </View>

                    <TouchableOpacity onPress={handleLogout}>
                        <FontAwesome6 name="arrow-right-from-bracket" size={22} color="#9E122C" />
                    </TouchableOpacity>

                </View>
                
                <View style={profilePage.about}>
                    <View style={profilePage.aboutRow}>
                        <Text style={profilePage.rowL}>
                            University
                        </Text>
                        <Text style={profilePage.rowR}>
                            {fireData ? fireData.school : "fetch school failed"}
                        </Text>
                    </View>
                    <View style={profilePage.aboutRow}>
                        <Text style={profilePage.rowL}>
                            Academic Year
                        </Text>
                        <Text style={profilePage.rowR}>
                            Senior
                        </Text>
                    </View>
                    <View style={profilePage.aboutRow}>
                        <Text style={profilePage.rowL}>
                            Major
                        </Text>
                        <Text style={profilePage.rowR}>
                            {fireData ? fireData.major : "fetch major failed"}
                        </Text>
                    </View>
                </View>

                <Text style={profilePage.bio}>
                    Introduction or little bio!
                </Text>

                <ScrollView horizontal = {true} showsHorizontalScrollIndicator={true} contentContainerStyle={profilePage.scrollView}> 
                    <View style={profilePage.prompts}>
                        <Text style={profilePage.prompt}>
                            {/* placeholder prompt - will be dynamic */}
                            My least favorite study spot is
                        </Text>
                        <Text style={profilePage.response}>
                            {fireData ? fireData.leastSpot : "fetch spot failed"}
                        </Text>                         
                    </View>
                    <View style={profilePage.prompts}>
                        <Text style={profilePage.prompt}>
                            {/* placeholder prompt - will be dynamic */}
                            My study style is
                        </Text>
                        <Text style={profilePage.response}>
                            {fireData ? fireData.study_style : "fetch style failed"}
                        </Text>                         
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}

export default ProfilePage;