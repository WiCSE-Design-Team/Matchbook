import * as React from 'react';
import { View, Text, Image } from 'react-native';

function ProfilePage() {
    return (
        <View style={{ flex: 1, alignItems: 'right', justifyContent: 'center'}}>
            <Image 
                source={require('../assets/icon.png')}
                style={{ width: 400, height: 300,position: 'absolute', top: 50 }}/>
            
            <Text style={{marginLeft: 20, marginTop: 20, marginBottom: 10, fontSize: 25}}>Name</Text>
            <Text style={{marginLeft: 20, marginBottom: 10}}>bio</Text>
            <Text style={{marginLeft: 20,}}>course name, course name</Text>

            <Image 
                source={require('../assets/icon.png')}
                style={{ width: 350, height: 300, position: 'absolute', top: 475,marginLeft: 22 }}/>

            
        </View>
    );
}

export default ProfilePage;