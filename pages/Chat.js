import { View, SafeAreaView, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput, KeyboardAvoidingView, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { individualChat } from "../styling";
import React, { useState} from 'react';


<KeyboardAvoidingView
  behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
  style={{ flex: 1 }}
>
  
</KeyboardAvoidingView>

function Chat({ route }) {

    const { name } = route.params;
    const navigation = useNavigation();
    const [messages, setMessages] = useState([]);
    const [messageText, setMessageText] = useState('');

    const sendMessage = () => {
        if (messageText.trim() === '') return;
    
        const newMessage = {
          id: Date.now().toString(),
          text: messageText,
        };
    
        setMessages([...messages, newMessage]);
        setMessageText('');
      };


    return (
        <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
        <SafeAreaView style={individualChat.fullscreen}>

        
            <View style={individualChat.navBar}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="chevron-back-outline" size={24} color="#9E122C" />
                </TouchableOpacity>

                <Text style={individualChat.header}>
                    Name
                </Text>

                <Ionicons name="person-circle" size={45} color="#9E122C" />
            </View>




            <ScrollView style={individualChat.body} contentContainerStyle={{ paddingBottom: 20 }}>
            {messages.map((msg) => (
                <View key={msg.id} style={individualChat.message}>
                    <Text style={individualChat.messageText}>{msg.text}</Text>
                </View>
            ))}
            </ScrollView>



            <View style={individualChat.inputBar}>
                <TextInput
                style={individualChat.inputText}
                placeholder="Message"
                placeholderTextColor="#F99D90"
                value={messageText}
                onChangeText={setMessageText}
                />

                <TouchableOpacity onPress={sendMessage} style={individualChat.sendButton}>
                    <Ionicons name="paper-plane" size={30} color="white" />
                </TouchableOpacity>

            </View>
        </SafeAreaView>
        </KeyboardAvoidingView>
    );
}

export default Chat;