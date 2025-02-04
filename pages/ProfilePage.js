import * as React from 'react';
import {View, Text, Image, ImageBackground, ScrollView, StyleSheet} from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';

function ProfilePage() {

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <View style={{
                width: '100%',   
                height: 450, 
                backgroundColor: '#FBCB77',
                position: 'absolute',
                top: 0,    
                justifyContent: 'center',
                alignItems: 'center'      
            }} />

                <View style={{
                width: '90%',   
                height: 275, 
                backgroundColor: '#FFFFC5',
                position: 'absolute',
                borderRadius: 20, 
                top: 60,       
                }} />

                <Text style={{
                fontSize: 15,
                fontFamily: 'times new roman',
                top: 175, 
                position: 'absolute'
                }}>profile picture here</Text>
            
            <View style={{
                    backgroundColor: 'white' ,
                    width: '100%', 
                    bottom: 0, 
                    height: 425, 
                    position: 'absolute', 
                    borderRadius: 30
                }}>

            <Text style={{
                fontSize: 30, 
                fontFamily: 'times new roman', 
                color: '#9E122C', 
                position: 'absolute', 
                top: 10, 
                left: 20
            }}> Name, Age </Text>

            <Text style={{
                fontSize: 18,
                fontFamily: 'times new roman', 
                color: '#F99D90', 
                position: 'absolute', 
                top: 18, 
                right: 150
            }}> pronouns </Text>

            <SimpleLineIcons name="settings" size={22} color="#9E122C" 
                style={{
                    position: 'absolute', 
                    top: 18,
                    right: 20
                    }} />

            <Text style={{
                position: 'absolute', 
                fontFamily: 'times new roman', 
                fontSize: 18, 
                top: 50, 
                left: 20
                }}> Introduction or bio! </Text>
            
            <View style={[styles.courseContainer, {top: 75}]}>
                <View style={styles.container}>
                    <Text style={styles.text}>course name</Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.text}>course name</Text>
                </View>
            </View>

                <ScrollView> 
                <View style = {{top: 90, width: '100%', paddingLeft: 20}}>
                    <Text style={{marginBottom: 20, textAlign: "center", width: '100%'}}>More Profile Info</Text>
        
                    <Text>Education:</Text>
                        <Text style={{marginLeft: 20}}>School:</Text>
                        <Text style={{marginLeft: 20}}>Academic Year:</Text>
                        <Text style={{marginLeft: 20}}>Major:</Text>
                        <Text style={{marginLeft: 20}}>Minors:</Text>
                        <Text style={{marginLeft: 20, marginBottom: 20}}>Professors:</Text>

                    <Text>Preferences:</Text>
                        <Text style={{marginLeft: 20}}>Study Style:</Text>
                        <Text style={{marginLeft: 20}}>Favorite Library:</Text>
                </View>
                </ScrollView>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    courseContainer: {
        flexDirection: 'row',
    }, 
    container: {
      width: 97, 
      height: 30,
      borderRadius: 20,
      borderWidth: 2,
      borderColor: 'black',
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 20,  
    },
    text: {
      fontSize: 12,
      color: 'black',
    },
  });

export default ProfilePage;