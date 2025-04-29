import { SafeAreaView, Text } from "react-native";

function Chat({ route }) {

    const { name } = route.params;

    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>
                Chat page with {name}
            </Text>
        </SafeAreaView>
    )
}

export default Chat;