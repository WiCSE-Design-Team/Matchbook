import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { View, Text, Button, TextInput, StyleSheet, Image, BackHandler } from 'react-native';
import { FIREBASE_AUTH, FIREBASE_DB } from '../FirebaseConfig';
import {collection, getDocs, orderBy, query, doc, setDoc} from "firebase/firestore";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth";

// this is also the login page
function LandingPage() {
    const navigation = useNavigation();
    const [email, setEmail] = React.useState('');
    const [password, setPass] = React.useState('');
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
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        
            <Text style={styles.title}>Matchbook</Text>
            <Text style={styles.subtitle}>Find your study match!</Text>
            <TextInput
                style={styles.input}
                onChangeText = {setEmail}
                placeholder='Email'
                value = {email}
            />
            <TextInput
                secureTextEntry
                style={styles.input}
                onChangeText = {setPass}
                placeholder='Password'
                value = {password}
            />

            
            <View style = {styles.butnlog}>
                <Button 
                    title='Login'
                    color="#FE8C46"
                    onPress = {signIn}
                />
            </View>
            <View style = {styles.butnsign}>
                <Button 
                    title='Sign Up'
                    color="#FE8C46"
                    onPress = {signUp}
                /></View>

        </View>
    );
}

const styles = StyleSheet.create({

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
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#FE4D55',
        marginBottom: 10,

    },
    subtitle: {
        fontSize: 10,
        color: '#FE4D55',
        marginBottom: 20,
        fontWeight: 'bold',

    },
    butnlog: {
        borderRadius: 17,
        borderColor: '#C5C6C7',
        alignItems: 'center',
        width: 200,
        borderWidth: 1,
        marginTop: 20,
    
        
    },
    butnsign: {
        borderRadius: 17,
        borderColor: '#C5C6C7',
        alignItems: 'center',
        width: 200,
        borderWidth: 1,
        marginTop: 40,
        
    },

  });

export default LandingPage;