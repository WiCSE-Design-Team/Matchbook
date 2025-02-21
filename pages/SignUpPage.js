import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { View, Text, Button, TextInput, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FIREBASE_AUTH, FIREBASE_DB } from '../FirebaseConfig';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth";
import { Ionicons } from "@expo/vector-icons";

import logo from '../assets/images/logo.png';
import { loginPage } from '../styling';

function SignUpPage() {
    const navigation = useNavigation();
    const [email, setEmail] = React.useState('');
    const [password, setPass] = React.useState('');
    const [confirmPassword, setConfirmPass] = React.useState('');

    const auth = FIREBASE_AUTH;

    const addUserDB = async(response)=>{
        //add user to db
        try{

            //create document (basically row in db table/collection) reference
            const docRef = doc(FIREBASE_DB, "UserInfo", response.user.uid);

            //set the details of the doc - these are just standins for actual data!
            const docRes = await setDoc(docRef, {
                first_name: 'test-first-name', 
                last_name: 'test-last-name',
                pronouns: 'she/her',
                age: '21',
                school: 'University of Florida',
                pronouns: 'she/her',
                major: 'Computer Science',
                study_style: 'Solitary', 
                favSpot: 'Library West', 
                leastSpot: 'Marston', 
                imgUrl: 'url',
                want: [],
                matches: [],
            });

            console.log(docRes);

        } catch(e){
            console.log(e);
        }
        
    }

    const signIn = async () => {
        try{
            const response = await signInWithEmailAndPassword(auth, email, password);
            console.log(response.user.uid);

            addUserDB(response);

            alert("Sign in successful.");
            navigation.navigate('TabNav');
        } catch (error) {
            console.log(error);
            alert("Sign in failed." + error);
        }
        
    }

    const signUp = async () => {
        try{
            const response = await createUserWithEmailAndPassword(auth, email, password);

            //add user to db if not in it
            addUserDB(response);
            
            alert("Sign up successful.");
            navigation.navigate('TabNav');
        } catch (error) {
            console.log(error);
            alert("Sign up failed.");
        }
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingTop: 20, backgroundColor: 'white' }}>
            <View style={loginPage.upper}>
                <Image source={logo} style={loginPage.image} />
                <Text style={loginPage.title}>Matchbook</Text>
                <Text style={loginPage.subtitle}>FIND YOUR STUDY MATCH</Text>
            </View>

            <View style={loginPage.lower}>
                <Text style={loginPage.welcome}> Welcome! Sign Up Here</Text>

                <View style={loginPage.inputContainer}>
                    <Ionicons name="mail" size={20} color="#9E122C" style={loginPage.iconStyle} />
                    <TextInput
                        style={loginPage.input}
                        onChangeText = {setEmail}
                        placeholder='Email'
                        placeholderTextColor='#F99D90'
                        value = {email}
                    />
                </View>

                <View style={loginPage.inputContainer}>
                    <Ionicons name="lock-closed" size={20} color="#9E122C" style={loginPage.iconStyle} />
                    <TextInput
                        secureTextEntry
                        style={loginPage.input}
                        onChangeText = {setPass}
                        placeholder='Password'
                        placeholderTextColor='#F99D90'
                        value = {password}
                    />
                </View>

                {/* feel free to delete the confirm password, just thought it would be a cool feature if possible */}
                <View style={loginPage.inputContainer}>
                    <Ionicons name="lock-closed" size={20} color="#9E122C" style={loginPage.iconStyle} />
                    <TextInput
                        secureTextEntry
                        style={loginPage.input}
                        onChangeText = {setConfirmPass}
                        placeholder='Confirm Password'
                        placeholderTextColor='#F99D90'
                        value = {confirmPassword}
                    />
                </View>

                <TouchableOpacity style={loginPage.button} onPress = {signUp}>
                    <Text style={loginPage.buttonText}>Sign Up</Text>
                </TouchableOpacity>

                <Text style={loginPage.orText} onPress={() => navigation.navigate('Login')}>
                    Back to Login
                </Text>
            </View>
        </View>
    );
}

export default SignUpPage;