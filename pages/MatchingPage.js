import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, Pressable } from 'react-native';
import MultiSelectComponent from '../components/MultiSelect';
import CardFlip from '../components/CardFlip';
import { FIREBASE_USERINFO } from '../FirebaseConfig';
import {doc, arrayUnion} from "firebase/firestore";
import {UID} from '/LoginPage';

import { matchingPage } from '../styling';
import { getUserByID } from '../components/Requests';

function MatchingPage() {
    const userInfo = FIREBASE_USERINFO;
    const currUser = doc(userInfo, "UserInfo", UID);
    //need way to get user at top of collection (!= currUser)
    //const displayedUser
    const addApproved = async () => {
        await updateDoc(currUser, {
            want: arrayUnion("DISPLAY USER'S ID"), //need to access uid of user at top of collection
          });
        /*if(currUser UID is in displayedUser want field){
            await updateDoc(currUser, {
                matches: arrayUnion("DISPLAY USER'S ID"), //need to access uid of user at top of collection
             });
            alert("New match! Go to chat page to start connecting.");
        }
        */
    }

    return (
        <SafeAreaView style={styles.fullScreen}>
            <View style={styles.multiselect}>
                <MultiSelectComponent />
            </View>
            <View style={styles.card}>
                <CardFlip/>
            </View>

            <View style={styles.bottomButtons}>
                <Pressable
                    onPress = {() => console.log('Pass button pressed')} //need to move to next user
                    style={({ pressed }) => [{ backgroundColor: pressed ? '#9E122C' : 'none' }, matchingPage.passButton ]}>
                    {({ pressed }) => (
                        <Text style={[{ color: pressed ? 'white' : 'black' }, styles.buttonText]}>
                            Match
                        </Text>
                    )}
                </Pressable>

                <Pressable
                    onPress = {() => console.log('Match button pressed')} //need to add to collection, check if present in other collection array, & move to next one
                    style={({ pressed }) => [{ backgroundColor: pressed ? 'none' : '#9E122C' }, matchingPage.matchButton ]}>
                    {({ pressed }) => (
                        <Text style={[{ color: pressed ? 'white' : 'black' }, styles.buttonText]}>
                            Pass
                        </Text>
                    )}
                </Pressable>
            </View>
        </SafeAreaView>
    );
}

export default MatchingPage;

const styles = StyleSheet.create({
    fullScreen: {
        alignItems: 'center', justifyContent: 'top',
        height: '100%'
    },
    multiselect: {
        width: '90%',
        alignItems: 'center', justifyContent: 'left',
        marginBottom: 20,
        flexDirection: 'row'
    },
    icon: {

    },
    card: {
        width: '90%', height: '70%',
        flex: 1,
    },
    bottomButtons: {
        width: '90%',
        flexDirection: 'row', justifyContent: 'space-between',
    },
    button: {
        width: '45%',
        borderColor: 'black', borderWidth: '1',
        marginTop: 20, marginBottom: 10, padding: 10,
        alignContent: 'center', justifyContent: 'center'
    },
    buttonText: {
        textAlign: 'center',
    }
})