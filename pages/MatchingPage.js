import React, { useState } from 'react';
import { SafeAreaView, View, Text, Pressable } from 'react-native';
import MultiSelectComponent from '../components/MultiSelect';
import CardFlip from '../components/CardFlip';
import { FIREBASE_USERINFO } from '../FirebaseConfig';
import {doc, arrayUnion} from "firebase/firestore";
import {UID} from '../pages/LoginPage';

import { matchingPage } from '../styling';
import { getUserByID } from '../components/Requests';

function MatchingPage() {
    /*const userInfo = FIREBASE_USERINFO;
    const currUser = doc(userInfo, "UserInfo", UID);
    //need way to get user at top of collection (!= currUser)
    //const displayedUser
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
                    onPress = {() => console.log('Pass button pressed')} //need to move to next user
                    style={({ pressed }) => [{ backgroundColor: pressed ? '#9E122C' : 'none' }, matchingPage.passButton ]}>
                    {({ pressed }) => (
                        <Text style={[{ color: pressed ? 'white' : '#9E122C' }, matchingPage.buttonText]}>
                            Pass
                        </Text>
                    )}
                </Pressable>

                <Pressable
                    onPress = {() => console.log('Match button pressed')} //need to add to collection, check if present in other collection array, & move to next one
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