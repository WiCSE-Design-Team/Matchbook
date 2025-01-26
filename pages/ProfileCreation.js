import * as React from 'react';
import { View, TextInput, SafeAreaView, StyleSheet, KeyboardAvoidingView, Button } from 'react-native';

function ProfileCreation() {
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
        <SafeAreaView style={styles.fullScreen}>
            <KeyboardAvoidingView behavior='padding'>
                <View>
                    <TextInput
                        style={styles.input}
                        onChangeText = {setFirstName}
                        placeholder='First Name'
                        value = {firstName}
                        ref={firstNameRef}
                        returnKeyType="next"
                        onSubmitEditing={() => lastNameRef.current.focus()}
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText = {setLastName}
                        placeholder='Last Name'
                        value = {lastName}
                        ref={lastNameRef}
                        returnKeyType="next"
                        onSubmitEditing={() => ageRef.current.focus()}
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText = {setAge}
                        placeholder='Age'
                        value = {age}
                        ref={ageRef}
                        returnKeyType="next"
                        onSubmitEditing={() => universityRef.current.focus()}
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText = {setUniversity}
                        placeholder='University'
                        value = {university}
                        ref={universityRef}    
                        returnKeyType="next"
                        onSubmitEditing={() => courseRef.current.focus()}
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText = {setCourse}
                        placeholder='Course'
                        value = {course}
                        ref={courseRef}
                        returnKeyType="next"
                        onSubmitEditing={() => yearRef.current.focus()}
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText = {setYear}
                        placeholder='Academic Year'
                        value = {year}
                        ref={yearRef}
                        returnKeyType="next"
                        onSubmitEditing={() => libraryRef.current.focus()}
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText = {setLibrary}
                        placeholder='Favorite Library'
                        value = {library}
                        ref={libraryRef}
                        returnKeyType="done"
                    />

                    <View style = {styles.butn}>
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

export default ProfileCreation;

const styles = StyleSheet.create({
    fullScreen: {
        alignItems: 'center', justifyContent: 'center',
        height: '100%'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: 'FEBC46',
        color: '#000000',
        borderRadius: 20,
        borderColor: '#C5C6C7',
        width: 200,
    },
    butn: {
        borderRadius: 17,
        borderColor: '#C5C6C7',
        alignItems: 'center',
        width: 200,
        borderWidth: 1,
        marginTop: 20,
    },
})