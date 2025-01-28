import {React, useState, useEffect} from "react";
import { View, Text, Image, ImageBackground } from 'react-native';
import { FIREBASE_AUTH, FIREBASE_DB } from '../FirebaseConfig';
import {collection, getDocs, orderBy, query, doc, setDoc, getDoc} from "firebase/firestore";

function ProfilePage() {
    const [fireData, setFireData] = useState(null);

    useEffect (() => {
        let processing = true;
        firebaseData(processing);
        return () => {
          processing = false;
        }
      }, [])
    
    const firebaseData = async(processing) => {
        //this gets user by id
     
        const collectionRef = collection(FIREBASE_DB, 'UserInfo');

        //access user
        var user = FIREBASE_AUTH.currentUser;
        const docRef = doc(FIREBASE_DB, 'UserInfo', String(user.uid));
        
        //get user's info, getDoc = getRow in userInfo table
        const docSnap = await getDoc(docRef);

        if(docSnap.exists()){
            console.log(docSnap.data());
            //set the data
            setFireData(docSnap.data());

        } else{
            console.log("User with the id doesn't exist. Fetch failed.")
        }

    }

    console.log(fireData ? fireData.first_name : "null")


    return (
        <View style={{ flex: 1, alignItems: 'right', justifyContent: 'center'}}>
            <Image 
            source={{uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'}}
                style={{ width: 400, height:300,position: 'absolute', top: 50 }}
                />
            
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ marginLeft: 20, marginTop: 20, fontSize: 25}}>{fireData ? fireData.first_name : "fetch name failed"}</Text>
                    <Image 
                        source={{uri: 'https://cdn.iconscout.com/icon/free/png-256/free-edit-icon-download-in-svg-png-gif-file-formats--pen-write-pencil-ball-study-user-interface-vol-2-pack-icons-2202989.png?f=webp&w=256'}} 
                        style={{ width: 20, height: 20, marginLeft: 7, marginTop: 20 }} 
                    />
                    <Image 
                        source={{uri: 'https://e7.pngegg.com/pngimages/257/93/png-clipart-settings-gear-icon-gear-configuration-thumbnail.png'}} 
                        style={{ width: 20, height: 20, marginLeft: 240, marginTop: 20 }} 
                    />
            </View>
            <Text style={{marginLeft: 20, marginBottom: 10, marginTop: 5}}>bio</Text>
            <Text style={{marginLeft: 20,}}>course name    course name</Text>

            <ImageBackground
                source={{uri: 'https://preview.colorkit.co/color/d9d9d9.png?size=social&type=opengraph'}}
                style={{ width: 350, height: 300, position: 'absolute', top: 475, marginLeft: 22, alignItems: 'center', justifyContent: 'center'}}

            >
                <Text style={{top: -125}}> more profile info</Text>
            </ImageBackground>

            
        </View>
    );
}

export default ProfilePage;