import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { View, Text, Button, TextInput, Image, BackHandler } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FIREBASE_AUTH } from '../FirebaseConfig';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth";

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
        <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View style={loginPage.upper}>
                <Image source={logo} style={loginPage.image} />
                <Text style={loginPage.title}>Matchbook</Text>
                <Text style={loginPage.subtitle}>FIND YOUR STUDY MATCH</Text>
            </View>

            <View style={loginPage.lower}>
                <Text style={loginPage.subtitle}> Welcome! </Text>
                <TextInput
                    style={loginPage.input}
                    onChangeText = {setEmail}
                    placeholder='Email'
                    value = {email}
                />
                <TextInput
                    secureTextEntry
                    style={loginPage.input}
                    onChangeText = {setPass}
                    placeholder='Password'
                    value = {password}
                />

                
                <View style = {loginPage.butnlog}>
                    <Button 
                        title='Login'
                        color="#FE8C46"
                        onPress = {signIn}
                    />
                </View>
                <View style = {loginPage.butnsign}>
                    <Button 
                        title='Sign Up'
                        color="#FE8C46"
                        onPress = {() => navigation.navigate('SignUp')}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}

export default LoginPage;