import React, { useState, useEffect } from "react";
import { View, Image, Text } from 'react-native';
import FlipCard from 'react-native-flip-card';

import { FIREBASE_AUTH, FIREBASE_DB } from '../FirebaseConfig';
import {collection, getDocs, orderBy, query, doc, setDoc, getDoc} from "firebase/firestore";

import { cardFlip } from '../styling'
import { FontAwesome6 } from "@expo/vector-icons";

function CardFlip() {
    const [fireData, setFireData] = useState(null);

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
        const docSnap = await getDoc(docRef);
        if(docSnap.exists()){
            console.log(docSnap.data());
            //set the data
            setFireData(docSnap.data());
        } else{
            console.log("User with the id doesn't exist. Fetch failed.")
        }
    }

    console.log(fireData ? fireData.first_name : "null")

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
                            {fireData ? fireData.first_name : "fetch name failed"},
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
                        Introduction or little bio!
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
                            {fireData ? fireData.first_name : "fetch name failed"},
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
                                {fireData ? fireData.school : "fetch school failed"}
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