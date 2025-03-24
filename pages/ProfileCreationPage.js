import * as React from 'react';
import { View, TextInput, SafeAreaView, KeyboardAvoidingView, Button, Text } from 'react-native';

import { profileCreationPage } from '../styling';

function ProfileCreationPage() {
    const [firstName, setFirstName] = React.useState('');
    const firstNameRef = React.useRef(null);
    const [lastName, setLastName] = React.useState('');
    const lastNameRef = React.useRef(null);
    const [age, setAge] = React.useState('');
    const ageRef = React.useRef(null);
    const [university, setUniversity] = React.useState('');
    const universityRef = React.useRef(null);
    const [course, setCourse] = React.useState('');
    const courseRef = React.useRef(null);
    const [year, setYear] = React.useState('');
    const yearRef = React.useRef(null);
    const [library, setLibrary] = React.useState('');
    const libraryRef = React.useRef(null);

    const temp = async () => {

    }

    return (
        <SafeAreaView style={profileCreationPage.fullScreen}>
            <View style={profileCreationPage.section}>               
            <KeyboardAvoidingView behavior='padding'>
                <View style={profileCreationPage.inputContainer}> 
                    <Text style={profileCreationPage.title}>Make Your Profile!</Text>
                    <TextInput
                        style={profileCreationPage.input}
                        onChangeText = {setFirstName}
                        placeholder='First Name'
                        placeholderTextColor='#F99D90'
                        value = {firstName}
                        ref={firstNameRef}
                        returnKeyType="next"
                        onSubmitEditing={() => lastNameRef.current.focus()}
                    />
                    <TextInput
                        style={profileCreationPage.input}
                        onChangeText = {setLastName}
                        placeholder='Last Name'
                        placeholderTextColor='#F99D90'
                        value = {lastName}
                        ref={lastNameRef}
                        returnKeyType="next"
                        onSubmitEditing={() => ageRef.current.focus()}
                    />
                    <TextInput
                        style={profileCreationPage.input}
                        onChangeText = {setAge}
                        placeholder='Age'
                        placeholderTextColor='#F99D90'
                        value = {age}
                        ref={ageRef}
                        returnKeyType="next"
                        onSubmitEditing={() => universityRef.current.focus()}
                    />
                    <TextInput
                        style={profileCreationPage.input}
                        onChangeText = {setUniversity}
                        placeholder='University'
                        placeholderTextColor='#F99D90'
                        value = {university}
                        ref={universityRef}    
                        returnKeyType="next"
                        onSubmitEditing={() => courseRef.current.focus()}
                    />
                    <TextInput
                        style={profileCreationPage.input}
                        onChangeText = {setCourse}
                        placeholder='Course'
                        placeholderTextColor='#F99D90'
                        value = {course}
                        ref={courseRef}
                        returnKeyType="next"
                        onSubmitEditing={() => yearRef.current.focus()}
                    />
                    <TextInput
                        style={profileCreationPage.input}
                        onChangeText = {setYear}
                        placeholder='Academic Year'
                        placeholderTextColor='#F99D90'
                        value = {year}
                        ref={yearRef}
                        returnKeyType="next"
                        onSubmitEditing={() => libraryRef.current.focus()}
                    />
                    <TextInput
                        style={profileCreationPage.input}
                        onChangeText = {setLibrary}
                        placeholder='Favorite Library'
                        placeholderTextColor='#F99D90'
                        value = {library}
                        ref={libraryRef}
                        returnKeyType="done"
                    />

                    <View style = {profileCreationPage.butn}>
                        <Button 
                            title='Create Profile'
                            color="white"
                            onPress = {temp}
                        />
                    </View>
                </View>
            </KeyboardAvoidingView>
            </View>  
        </SafeAreaView>
    )
}

export default ProfileCreationPage;