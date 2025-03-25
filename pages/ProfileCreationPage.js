import React, { useState } from 'react';
import { View, TextInput, SafeAreaView, KeyboardAvoidingView, TouchableOpacity, Text, ScrollView } from 'react-native';

import { profileCreationPage } from '../styling';
import { Dropdown } from 'react-native-element-dropdown';
import { FIREBASE_DB } from '../FirebaseConfig';
import { getAuth } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';
import { useNavigation } from '@react-navigation/native';

function ProfileCreationPage() {
    const navigation = useNavigation();
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [pronouns, setPronouns] = React.useState('');
    const [age, setAge] = React.useState('');
    const [university, setUniversity] = React.useState('');
    const [year, setYear] = React.useState('');
    const [major, setMajor] = React.useState('');
    const [bio, setBio] = React.useState('');
    const [prompt, setPrompt] = React.useState('');
    const [response, setResponse] = React.useState('');
    
    const prompts = [
        {
            prompt: 'What is your study style?'
        },
        {
            prompt: 'What is your favorite study spot?'
        },
        {
            prompt: 'What is your personality type?'
        },
        {
            prompt: 'What is your preferred study group size?'
        },
        {
            prompt: 'What is your least favorite study spot?'
        },
        {
            prompt: 'What is a study spot you’ve been wanting to try?'
        },
        {
            prompt: 'Favorite coffee shop?'
        },
    ]

    const currentUser = getAuth().currentUser;

    const createProfile = async (uid, firstName, lastName, pronouns, age, university, year, major, bio, prompt, response) => {
        const usersCollectionRef = collection(FIREBASE_DB, 'users');

        try {
            const newUser = await addDoc(usersCollectionRef, {
                uid: uid,
                firstName: firstName,
                lastName: lastName,
                pronouns: pronouns,
                age: age,
                university: university,
                year: year,
                major: major,
                bio: bio,
                prompt: prompt,
                response: response,
            });

            console.log('new chat created with id: ', newUser.id);
            navigation.navigate('TabNav');
        }
        catch (error) {
            console.log('error creating new profile: ', error);
            return null;
        }
    };

    return (
        <SafeAreaView style={profileCreationPage.fullScreen}> 
            <View style={profileCreationPage.title}>
                <Text style={profileCreationPage.titleText}>Create Your Profile!</Text>
            </View>

            <KeyboardAvoidingView behavior='padding' style={{ width: '100%'}}>
                <ScrollView style={profileCreationPage.inputs}> 
                    <TextInput
                        style={profileCreationPage.input}
                        onChangeText = {setFirstName}
                        placeholder='First Name'
                        placeholderTextColor='#F99D90'
                        value = {firstName}
                    />
                    <TextInput
                        style={profileCreationPage.input}
                        onChangeText = {setLastName}
                        placeholder='Last Name'
                        placeholderTextColor='#F99D90'
                        value = {lastName}
                    />
                    <TextInput
                        style={profileCreationPage.input}
                        onChangeText = {setPronouns}
                        placeholder='Pronouns'
                        placeholderTextColor='#F99D90'
                        value = {pronouns}
                    />
                    <TextInput
                        style={profileCreationPage.input}
                        onChangeText = {setAge}
                        keyboardType='numeric'
                        placeholder='Age'
                        placeholderTextColor='#F99D90'
                        value = {age}
                    />
                    <TextInput
                        style={profileCreationPage.input}
                        onChangeText = {setUniversity}
                        placeholder='University'
                        placeholderTextColor='#F99D90'
                        value = {university}
                    />
                    <TextInput
                        style={profileCreationPage.input}
                        onChangeText = {setYear}
                        placeholder='Academic Year'
                        placeholderTextColor='#F99D90'
                        value = {year}
                    />
                    <TextInput
                        style={profileCreationPage.input}
                        onChangeText = {setMajor}
                        placeholder='Major'
                        placeholderTextColor='#F99D90'
                        value = {major}
                    />
                    <TextInput
                        style={profileCreationPage.input}
                        onChangeText = {setBio}
                        placeholder='Type a short introduction or bio'
                        placeholderTextColor='#F99D90'
                        value = {bio}
                        multiline
                        numberOfLines={4}
                        textAlignVertical='top'
                    />
                    <Dropdown
                        style={profileCreationPage.dropdown}
                        placeholderStyle={profileCreationPage.placeholder}
                        selectedTextStyle={profileCreationPage.selectedText}
                        itemTextStyle={profileCreationPage.itemText}
                        containerStyle={profileCreationPage.list}
                        data={prompts}
                        labelField="prompt"
                        valueField="prompt"
                        placeholder="Select Prompt"
                        value={prompt}
                        onChange={item => {
                            setPrompt(item);
                          }}
                    />
                    <TextInput
                        style={profileCreationPage.input}
                        onChangeText = {setResponse}
                        placeholder='Prompt Response'
                        placeholderTextColor='#F99D90'
                        value = {response}
                    />

                    <TouchableOpacity style={profileCreationPage.button} onPress={() => createProfile(currentUser.uid, firstName, lastName, pronouns, age, university, year, major, bio, prompt, response)}>
                        <Text style={profileCreationPage.buttonText}>Create Profile</Text>
                    </TouchableOpacity>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default ProfileCreationPage;