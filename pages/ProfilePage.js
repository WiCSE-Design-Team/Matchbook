import React, { useRef } from 'react';
import {View, Text, Image, ImageBackground, ScrollView, StyleSheet} from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import { FontAwesome5 } from '@expo/vector-icons';
import { profilePage } from '../styling';

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

                <Text style={{
                fontSize: 15,
                fontFamily: 'Karla-Bold',
                top: 175, 
                position: 'absolute', 
                color: 'white'
                }}>profile picture here</Text>
            
            <View style={{
                    backgroundColor: 'white' ,
                    width: '100%', 
                    bottom: 0, 
                    height: 425, 
                    position: 'absolute', 
                    borderTopRightRadius: 35,
                    borderTopLeftRadius: 35
                }}>

            <Text style={{
                fontSize: 30, 
                fontFamily: 'Bakso Sapi', 
                color: '#9E122C', 
                position: 'absolute', 
                top: 15, 
                left: 10
            }}> Name, Age </Text>

            <Text style={{
                fontSize: 18,
                fontFamily: 'Karla-Bold', 
                color: '#F99D90', 
                position: 'absolute', 
                top: 22, 
                right: 120
            }}> pronouns </Text>

            <SimpleLineIcons name="settings" size={22} color="#9E122C" 
                style={{
                    position: 'absolute', 
                    top: 22,
                    right: 20
                }} />

            <Text style ={{
                fontFamily: 'Karla-Bold', 
                color: '#FBCB77', 
                fontSize: 15, 
                position: 'absolute', 
                top: 65, 
                left: 20
            }}>University </Text>

            <Text style ={{
                fontFamily: 'Karla-Bold', 
                fontSize: 15, 
                position: 'absolute', 
                top: 65, 
                right: 20
            }}>University of Florida</Text>

            <Text style ={{
                fontFamily: 'Karla-Bold', 
                color: '#FBCB77', 
                fontSize: 15, 
                position: 'absolute', 
                top: 90, 
                left: 20
            }}>Academic Year </Text>

            <Text style ={{
                fontFamily: 'Karla-Bold', 
                fontSize: 15, 
                position: 'absolute', 
                top: 90, 
                right: 20
            }}>Freshman</Text>

            <Text style ={{
                fontFamily: 'Karla-Bold', 
                color: '#FBCB77', 
                fontSize: 15, 
                position: 'absolute', 
                top: 115, 
                left: 20
            }}>Major </Text>

            <Text style ={{
                fontFamily: 'Karla-Bold', 
                fontSize: 15, 
                position: 'absolute', 
                top: 115, 
                right: 20
            }}>Computer Science</Text>

            <Text style={{
                position: 'absolute', 
                fontFamily: 'Karla', 
                fontSize: 18, 
                top: 145, 
                left: 15
                }}> Introduction or bio! </Text>
            
            <View style={[styles.courseContainer, {top: 375}]}>
                <View style={styles.container}>
                    <Text style={styles.text}>course name</Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.text}>course name</Text>
                </View>
            </View>
        
        <View style={styles.promptContainer}>
            <ScrollView
                horizontal = {true}
                contentContainerStyle={styles.scrollViewContent}
                showsHorizontalScrollIndicator={true}
            > 
                <View style={styles.prompt}>
                    <Text style={styles.promptText}>Prompt 1: </Text>
                </View>
                <View style={styles.prompt}>
                    <Text style={styles.promptText}>Prompt 2</Text>
                </View>
                <View style={styles.prompt}>
                    <Text style={styles.promptText}>Prompt 3</Text>
                </View>
            </ScrollView>
        </View>
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
      borderColor: '#9E122C',
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 15,  
    },

    text: {
      fontSize: 12,
      fontFamily: 'Karla', 
      color: '#9E122C',
    },

    promptContainer: {
       width: '100%', 
       height: 150, 
       top: 170, 
       flex: 1, 
       justifyContent: 'center', 
       alignItems: 'center', 
    }, 

    prompt: {
      width: 355, 
      height: 150,
      borderRadius: 20,
      borderWidth: 2,
      borderColor: '#FBCB77',
      alignItems: 'center',
      marginLeft: 20, 
    }, 

    promptText:  {
        fontFamily: 'Bakso Sapi', 
        fontSize: 20, 
        color: '#FBCB77'
    }, 

    scrollViewContent: {
        flexDirection: 'row'
    }, 

    scrollView: {
        width: '100%', 
        flex: 1,
        flexDirection: 'row'
    }
  });

export default ProfilePage;