import * as React from 'react';
import { View, TextInput, SafeAreaView, KeyboardAvoidingView, Button } from 'react-native';

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
            <KeyboardAvoidingView behavior='padding'>
                <View>
                    <TextInput
                        style={profileCreationPage.input}
                        onChangeText = {setFirstName}
                        placeholder='First Name'
                        value = {firstName}
                        ref={firstNameRef}
                        returnKeyType="next"
                        onSubmitEditing={() => lastNameRef.current.focus()}
                    />
                    <TextInput
                        style={profileCreationPage.input}
                        onChangeText = {setLastName}
                        placeholder='Last Name'
                        value = {lastName}
                        ref={lastNameRef}
                        returnKeyType="next"
                        onSubmitEditing={() => ageRef.current.focus()}
                    />
                    <TextInput
                        style={profileCreationPage.input}
                        onChangeText = {setAge}
                        placeholder='Age'
                        value = {age}
                        ref={ageRef}
                        returnKeyType="next"
                        onSubmitEditing={() => universityRef.current.focus()}
                    />
                    <TextInput
                        style={profileCreationPage.input}
                        onChangeText = {setUniversity}
                        placeholder='University'
                        value = {university}
                        ref={universityRef}    
                        returnKeyType="next"
                        onSubmitEditing={() => courseRef.current.focus()}
                    />
                    <TextInput
                        style={profileCreationPage.input}
                        onChangeText = {setCourse}
                        placeholder='Course'
                        value = {course}
                        ref={courseRef}
                        returnKeyType="next"
                        onSubmitEditing={() => yearRef.current.focus()}
                    />
                    <TextInput
                        style={profileCreationPage.input}
                        onChangeText = {setYear}
                        placeholder='Academic Year'
                        value = {year}
                        ref={yearRef}
                        returnKeyType="next"
                        onSubmitEditing={() => libraryRef.current.focus()}
                    />
                    <TextInput
                        style={profileCreationPage.input}
                        onChangeText = {setLibrary}
                        placeholder='Favorite Library'
                        value = {library}
                        ref={libraryRef}
                        returnKeyType="done"
                    />

                    <View style = {profileCreationPage.butn}>
                        <Button 
                            title='Create Profile'
                            color="#FE8C46"
                            onPress = {temp}
                        />
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default ProfileCreationPage;