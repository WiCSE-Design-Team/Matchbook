import React, { useState } from 'react';
import { View, Button, Image, Text, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { StyleSheet, pressableView, Pressable } from 'react-native';

const UploadImage = (props) => {
  const [imageUri, setImageUri] = useState(null);

  // Request permissions (for iOS)
  const requestPermissions = async () => {
    if (Platform.OS !== 'web') {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  };

  // Launch image picker
  const chooseImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const uri = result.assets[0].uri;
      setImageUri(uri);
    }
  };

  return (
    <View style={styles.container}  >
      <Pressable style={styles.container} onPress={chooseImage}>
        {!imageUri && !props.url && <Button title="Choose an image!" onPress={chooseImage}></Button>}
        {imageUri && (
            <Image
            source={{ uri: imageUri }}
            style={styles.image}
            resizeMode="cover"
            
            />
        )}
        {!imageUri && props.url && (
            <Image
            source={{ url: props.url }}
            style={styles.image}
            resizeMode="cover"
            />
        )
        }
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1, // Fill the available space
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
        flex: 1,
        width: '100%', // Take up the full height of the container
    },
  });

export default UploadImage;
