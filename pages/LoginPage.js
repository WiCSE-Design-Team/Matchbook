import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { View, Text, Button, TextInput, StyleSheet, Image, BackHandler, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FIREBASE_AUTH } from '../FirebaseConfig';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";
import { Ionicons } from "@expo/vector-icons";

import logo from '../assets/images/logo.png';
import { loginPage } from '../styling';

// this is also the landing page
function LoginPage() {
    const navigation = useNavigation();
    const [email, setEmail] = React.useState('');
    const [password, setPass] = React.useState('');
    const auth = FIREBASE_AUTH;

    const signIn = async () => {
        try{
            const response = await signInWithEmailAndPassword(auth, email, password);
            console.log(response);
            alert("Sign in successful.");
            onAuthStateChanged(auth, (user) => {
                if (user) {
                  const uid = user.uid;
                } else {
                  console.log("No user is currently signed in.");
                }
              });
            navigation.navigate('TabNav');
        } catch (error) {
            console.log(error);
            alert("Sign in failed." + error);
        }
        
    }
    const signUp = async () => {
        try{
            const response = await createUserWithEmailAndPassword(auth, email, password);
            console.log(response);
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
                <Text style={loginPage.welcome}>Welcome! Login In Here</Text>
                
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

                <TouchableOpacity style={loginPage.button} onPress={signIn}>
                    <Text style={loginPage.buttonText}>Login</Text>
                </TouchableOpacity>
    
                <Text style={loginPage.orText}>or</Text>
    
                <TouchableOpacity style={loginPage.button} onPress = {() => navigation.navigate('SignUp')}>
                    <Text style={loginPage.buttonText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default LoginPage;
export const UID = uid;