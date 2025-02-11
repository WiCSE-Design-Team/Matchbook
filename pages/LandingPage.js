import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { View, Text, Button, TextInput, StyleSheet, Image, BackHandler, TouchableOpacity } from 'react-native';
import { FIREBASE_AUTH } from '../FirebaseConfig';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth";
import { useFonts } from "expo-font"; 
import { Ionicons } from "@expo/vector-icons";



// this is also the login page
function LandingPage() {
    const navigation = useNavigation();
    const [email, setEmail] = React.useState('');
    const [password, setPass] = React.useState('');
    const auth = FIREBASE_AUTH;

    const [fontsLoaded] = useFonts({
        "BaksoSapi": require("../assets/fonts/BaksoSapi.otf"),
        "Karla": require("../assets/fonts/Karla-VariableFont_wght.ttf")
      });

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
        <View style={styles.container}>
        
        <View style={styles.pinkBackground} />  // pink background
        
        <Image source={require("../assets/Logo.png")} style={styles.icon} />    // logo
        <Text style={styles.title}>Matchbook</Text>
        <Text style={styles.subtitle}>FIND YOUR STUDY MATCH</Text>
        <Text style={styles.welcome}>Welcome! Sign In Here</Text>


        
        <View style={styles.inputContainer}>
        <Ionicons name="mail" size={20} color="#9E5A57" style={styles.iconStyle} />
            <TextInput
                style={styles.input}
                onChangeText = {setEmail}
                placeholder='Email'
                placeholderTextColor='#F99D90'
                value = {email}
            />
            </View>
        
            <View style={styles.inputContainer}>
            <Ionicons name="lock-closed" size={20} color="#9E5A57" style={styles.iconStyle} />
            <TextInput
                secureTextEntry
                style={styles.input}
                onChangeText = {setPass}
                placeholder='Password'
                placeholderTextColor='#F99D90'
                value = {password}
            />
            </View>

            
            // changed buttons to Opacity 
            <TouchableOpacity style={styles.butnlog} onPress={signIn}>
                <Text style={styles.butnText}>Login</Text>
            </TouchableOpacity>

            <Text style={styles.orText}>or</Text>

            <TouchableOpacity style={styles.butnsign} onPress={signUp}>
                <Text style={styles.butnText}>Sign Up</Text>
            </TouchableOpacity>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,  
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: "white",  
        position: "relative",  
    },
    icon: {
        width: 180, 
        height: 200,
        marginBottom: 10,
        resizeMode: "contain",
    },

    input: {
      flex: 1,
      color: '#9E122C',
      height: '100%',
      fontSize: 13,
    },

    pinkBackground: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 460,
        backgroundColor: '#FCE8E5',
        borderTopLeftRadius: 120,
        borderTopRightRadius: 120,
        
    },
    inputContainer: {
        flexDirection: "row",
        backgroundColor: 'white',
        borderRadius: 25,
        paddingHorizontal: 15,
        width: 300,
        height: 50,
        marginBottom: 30,
    },
    iconStyle: {
        marginRight: 10, 
        marginTop: 14,
    },
    title: {
        fontSize: 39,
        fontWeight: 'bold',
        color: '#9E122C',
        marginBottom: 5,
        fontFamily: 'BaksoSapi',

    },
    subtitle: {
        fontSize: 15,
        color: '#9E122C',
        marginBottom: 60,
        marginTop: 10,
        fontWeight: 'bold',
        fontFamily: 'Karla',

    },

    welcome: {
        fontSize: 15,
        color: '#9E122C',
        marginTop: 20,
        marginBottom: 30,
        fontWeight: 'bold',
        fontFamily: 'Karla',
    },
    butnlog: {
        borderRadius: 35,
        backgroundColor: '#9E122C',
        alignItems: 'center',
        width: 300,
        padding: 15,
        marginTop: 10,
    
        
    },
    butnsign: {
        borderRadius: 35,
        backgroundColor: '#9E122C',
        alignItems: 'center',
        width: 300,
        padding: 15,
        marginTop: 20,
    },
    butnText: {
        fontSize: 13,
        fontFamily: 'Karla',
        fontWeight: 'bold',
        color: 'white',
    },
    orText: {
        fontSize: 15,
        color: '#9E122C',
        marginTop: 18,
        marginBottom: 0,
        fontWeight: 'bold',
        fontFamily: 'Karla',
    }
    

  });

export default LandingPage;