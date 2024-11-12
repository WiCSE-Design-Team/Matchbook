import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { View, Text, Button, TextInput, StyleSheet, Image, BackHandler } from 'react-native';

// this is also the login page
function LandingPage() {
    const navigation = useNavigation();
    const [username, setUser] = React.useState('');
    const [password, setPass] = React.useState('');

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        
            <Text style={styles.title}>Matchbook</Text>
            <Text style={styles.subtitle}>Find your study match!</Text>
            <TextInput
                style={styles.input}
                onChangeText = {setUser}
                placeholder='Username'
                value = {username}
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
                    onPress={() => navigation.navigate('TabNav')}
                />
            </View>
            <View style = {styles.butnsign}>
                <Button 
                    title='Sign Up'
                    color="#FE8C46"
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
      color: '#FFFFFF',
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