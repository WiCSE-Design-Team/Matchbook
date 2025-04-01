import { StyleSheet } from "react-native";

export const loginPage = StyleSheet.create({
    upper: {
        alignItems: 'center', 
        justifyContent: 'center', 
        height: '40%',
        margin: 20,
    },
    image: {
        width: 200,
        height: 200,
        margin: 10,
    },
    title: {
        fontFamily: 'BaksoSapi',
        fontSize: 42,
        color: '#9E122C',
        margin: 5
    },
    subtitle: {
        fontFamily: 'Karla-Bold',
        fontSize: 16,
        color: '#9E122C'
    },
    lower: {
        alignItems: 'center', 
        justifyContent: 'center', 
        width: '100%',
        height: '60%',
        backgroundColor: '#FDE6E3',
        borderTopLeftRadius: 100,
        borderTopRightRadius: 100,
    },
    welcome: {
        fontSize: 15,
        color: '#9E122C',
        marginTop: 20,
        marginBottom: 30,
        fontWeight: 'bold',
        fontFamily: 'Karla',
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
    input: {
        flex: 1,
        fontFamily: 'Karla',
        color: '#9E122C',
        height: '100%',
        fontSize: 13,
    },
    iconStyle: {
        marginRight: 10, 
        marginTop: 14,
    },
    button: {
        borderRadius: 35,
        backgroundColor: '#9E122C',
        alignItems: 'center',
        width: 300,
        padding: 15,
        margin: 10,
    },
    buttonText: {
        fontSize: 13,
        fontFamily: 'Karla',
        fontWeight: 'bold',
        color: 'white',
    },
    orText: {
        fontSize: 15,
        color: '#9E122C',
        marginTop: 10,
        marginBottom: 10,
        fontWeight: 'bold',
        fontFamily: 'Karla',
    }

})

export const matchingPage = StyleSheet.create({
    fullScreen: {
        flex: 1,
        alignItems: 'center', justifyContent: 'top',
        height: '100%',
        backgroundColor: '#FDE6E3',        
    },
    multiselect: {
        width: '90%',
        alignItems: 'center', justifyContent: 'left',
        marginBottom: 20,
        flexDirection: 'row'
    },
    icon: {

    },
    card: {
        width: '90%', height: '70%',
        flex: 1,
    },
    bottomButtons: {
        width: '90%',
        flexDirection: 'row', justifyContent: 'space-between',
    },
    passButton: {
        width: '45%',
        borderColor: '#9E122C', borderWidth: '2', borderRadius: 50,
        marginTop: 20, marginBottom: 10, padding: 10,
        alignContent: 'center', justifyContent: 'center',
    },
    matchButton: {
        width: '45%',
        borderColor: '#9E122C', borderWidth: '2', borderRadius: 50,
        marginTop: 20, marginBottom: 10, padding: 10,
        alignContent: 'center', justifyContent: 'center',
    },
    buttonText: {
        textAlign: 'center',
        fontFamily: 'Karla-Bold', fontSize: 18,
    }
})

export const chatPage = StyleSheet.create({
    container : {
        flex: 1,
        alignItems: 'center',
        flexDirection:'column',
        backgroundColor: '#FDE6E3'
    },
    header : {
        justifyContent: 'center',
        width: '100%',
        paddingTop: 20, paddingBottom: 20, paddingLeft: 30, paddingRight: 30,
        borderBottomColor: '#9E122C', borderBottomWidth: 1,
    },
    title: {
        fontFamily: 'BaksoSapi',
        fontSize: 30,
        color: '#9E122C',
    },
    chats: {
        flex: 1,
        width: '100%',
        flexDirection: 'column',
        backgroundColor: 'white',
    },
    chat: {
        width: '100%',
        paddingTop: 15, paddingBottom: 15, paddingLeft: 30, paddingRight: 30,
        flexDirection: 'row',
        borderBlockColor:'#FDE6E3', borderBottomWidth: 1,
        alignItems: 'center', justifyContent: 'space-between',
    },
    user: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        borderRadius: '50%',
        width: 50, height: 50,
        alignItems: 'center', justifyContent:'center',
        backgroundColor: '#FBCB77',
    },
    name: {
        paddingLeft: 20,
        fontFamily: 'Karla-Bold', fontSize: 18, color: '#9E122C',
    },
    matchesContainer: {
        width: '100%',
        paddingTop: 20, paddingBottom: 20, paddingLeft: 30, paddingRight: 30,
        backgroundColor: 'white',
        borderBottomColor: '#9E122C', borderBottomWidth: 1,
    },
    matches: {
        gap: 25,
    },
    matchesTitle: {
        fontFamily: 'Karla-Bold', fontSize: 20, color: '#9E122C',
        paddingBottom: 20,
    },
    match: {
        flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', gap: 5
        
    },
    matchName: {
        fontFamily: 'Karla', fontSize: 12, color: '#9E122C',
    },
    matchIcon: {
        borderRadius: '50%', borderColor: '#9E122C', borderWidth: 1,
        width: 60, height: 60,
        alignItems: 'center', justifyContent:'center',
        backgroundColor: '#FDE6E3',
    },
    messageContainer: {
        padding: 8,
        backgroundColor: '#f1f1f1',
        marginVertical: 5,
        borderRadius: 8,
      },
      input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 12,
        paddingLeft: 8,
      },
});

export const individualChat = StyleSheet.create({
    fullscreen: {
        flex: 1,
        backgroundColor: 'white',
    },

    navBar: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        borderBottomWidth: 1.5,
        borderColor: '#FDE6E3',
    },

    header:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#9E122C',
        marginLeft: 10,
        textAlign: "center",
        flex: 1,
    },

    body: {
        flex: 1,
        padding: 16,
    },

    message: {
        backgroundColor: '#9E122C',
        borderRadius: 20,
        padding: 13,
        marginBottom: 5,
        marginTop: 10,
        alignSelf: 'flex-end',  
        maxWidth: '80%',

    },

    messageText: {
        fontSize: 15,
        color: 'white',
    },

    inputBar: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#FDE6E3',
        backgroundColor: 'white',
        margin: 10,
        
    },

    inputText: {
        fontSize: 15,
        fontFamily: 'Karla-Bold',
        color: '#F99D90',
        backgroundColor: '#FDE6E3',
        flex: 1,
        padding: 15,
        borderRadius: 30,
    },

    sendButton: {
        backgroundColor: '#9E122C',
        padding: 10,
        borderRadius: 25,
        marginLeft: 10,
    }

})

export const profileCreationPage = StyleSheet.create({
    fullScreen: {
        alignItems: 'center',
        width: '100%', height: '100%',
        backgroundColor: 'white'
    },

    title: {
        width: '100%',
        paddingTop: 30, paddingBottom: 30, paddingLeft: 20, paddingRight: 20,
        borderBottomWidth: 1, borderColor: '#9E122C',
    }, 

    titleText: {
        fontSize: 22,
        color: '#9E122C',
        fontWeight: 'bold',
        fontFamily: 'BaksoSapi',
    }, 

    inputs: {
        marginTop: 20,
        width: '100%',
    },

    input: {
        marginBottom: 20, marginLeft: 20, marginRight: 20,
        paddingLeft: 20, paddingTop: 12, paddingBottom: 12,
        borderRadius: 100,
        backgroundColor: '#FDE6E3',
        fontFamily: 'Karla', color: '#9E122C', fontSize: 14
    },
    button: {
        marginLeft: 20, marginRight: 20,
        padding: 10,
        borderWidth: 1, borderRadius: 100, borderColor: '#9E122C',
        backgroundColor: '#9E122C',
    },
    buttonText: {
        fontFamily: 'Karla', color: 'white', fontSize: 18,
        textAlign: 'center'
    },
    dropdown: {
        marginBottom: 20, marginLeft: 20, marginRight: 20,
        paddingLeft: 20, paddingTop: 12, paddingBottom: 12,
        borderRadius: 100,
        backgroundColor: '#FDE6E3',
    },
    placeholder: {
        fontFamily: 'Karla', fontSize: 14, color: '#F99D90'
    },
    selectedText: {
        fontFamily: 'Karla', fontSize: 14, color: '#9E122C'
    },
    itemText:{
        fontSize: 12,
    },
    list: {
        borderRadius: 15
    }
})

export const profilePage = StyleSheet.create({
    full: {
        flex: 1,
        backgroundColor: '#FBCB77'
    },
    image: {
        flex: 1,
        width: '100%',
        backgroundColor: '#FBCB77',
        justifyContent: 'center',
        alignItems: 'center'  
    },
    profile: {
        backgroundColor: 'white' ,
        width: '100%',
        flex: 1,
        borderTopRightRadius: 35,
        borderTopLeftRadius: 35,
        padding: 30,
    },
    title: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    intro: {
        flexDirection: 'row',
    },
    name: {
        fontFamily: 'BaksoSapi', fontSize: 24, color: '#9E122C',
    },
    age: { 
        fontFamily: 'BaksoSapi', fontSize: 24, color: '#9E122C',
        marginLeft: 5, 
    },
    pronouns: {
        fontFamily: 'Karla', fontSize: 14, color: '#F99D90',
        marginLeft: 10,
    },
    about: {
        marginBottom: 20,
    },
    aboutRow: {
        flexDirection:'row', justifyContent: "space-between"
    },
    rowL: {
        textAlign: 'left',
        fontFamily: 'Karla', fontSize: 14, color: '#FBCB77',
        paddingBottom: 10
    },
    rowR: {
        textAlign: 'right',
        fontFamily: 'Karla', fontSize: 14,
        paddingBottom: 10
    },
    bio: {
        flex: 1,
        marginBottom: 20,
        fontFamily: 'Karla', fontSize: 14,
    },
    tags: {
        width: '100%',
        alignItems: 'center', justifyContent: 'left',
        flexDirection: 'row', gap: 15
    },
    scrollView: {
        gap: 25,
    },
    prompts: {
        borderRadius: 20, borderColor: '#FBCB77', borderWidth: 1,
        padding: 20, paddingRight: 50,
    },
    prompt: {
        fontFamily: 'BaksoSapi', fontSize: 12, color: '#FBCB77',
        paddingBottom: 10
    },
    response: {
        fontFamily: 'Karla', fontSize: 20
    },
    tag: {
        borderRadius: 50, borderColor: '#9E122C', borderWidth: 1,
        padding: 10,
        justifyContent: 'center', alignContent: 'center',
    },
    tagText: {
        fontFamily: 'Karla', fontSize: 14, color: '#9E122C',
    },
})

export const cardFlip = StyleSheet.create ({
    front: {
        height: '100%',
        borderRadius: 20,
        backgroundColor: '#FBCB77'
    },
    back: {
        height: '100%',
        borderRadius: 20,
        backgroundColor: 'white'
    },
    image: { 
        width: '100%', height: '50%',
        borderTopLeftRadius: '10', borderTopRightRadius: '10'
    },
    profile: { 
        width: '100%', height: '50%',
        padding: 20,
        alignContent: 'left',
        borderRadius: 20,
        backgroundColor: 'white'
    },
    intro: {
        flexDirection: 'row',
        marginBottom: 10, paddingTop: 5, paddingBottom: 5,
    },
    name: {
        fontFamily: 'BaksoSapi', fontSize: 24, color: '#9E122C',
    },
    age: { 
        fontFamily: 'BaksoSapi', fontSize: 24, color: '#9E122C',
        marginLeft: 5, 
    },
    pronouns: {
        fontFamily: 'Karla', fontSize: 14, color: '#F99D90',
        marginLeft: 10,
    },
    university: {
        flexDirection: "row", alignContent: "center", gap: 10,
        marginBottom: 30,
    },
    universityText: {
        fontFamily: 'Karla', fontSize: 14,
    },
    bio: { 
        flex: 1,
        fontFamily: 'Karla', fontSize: 14,
    },
    tags: {
        width: '100%',
        alignItems: 'center', justifyContent: 'left',
        flexDirection: 'row', gap: 15
    },
    tag: {
        borderRadius: 50, borderColor: '#9E122C', borderWidth: 1,
        padding: 10,
        justifyContent: 'center', alignContent: 'center',
    },
    tagText: {
        fontFamily: 'Karla', fontSize: 14, color: '#9E122C',
    },
    about: {
        height: '50%',
        paddingTop: 20, paddingBottom: 20,
    },
    aboutRow: {
        flexDirection:'row', justifyContent: "space-between"
    },
    rowL: {
        textAlign: 'left',
        fontFamily: 'Karla', fontSize: 14, color: '#FBCB77',
        paddingBottom: 10
    },
    rowR: {
        textAlign: 'right',
        fontFamily: 'Karla', fontSize: 14,
        paddingBottom: 10
    },
    prompts: {
        borderRadius: 20, borderColor: '#FBCB77', borderWidth: 1,
        marginTop: 10, marginBottom: 10, padding: 20,
    },
    prompt: {
        fontFamily: 'BaksoSapi', fontSize: 12, color: '#FBCB77',
        paddingBottom: 10
    },
    response: {
        fontFamily: 'Karla', fontSize: 20
    }
})

export const multiselect = StyleSheet.create({
    dropdown: {
        height: 50, width: 200,
        backgroundColor: '#9E122C',
        borderRadius: 30,
        padding: 15, marginTop: 10, marginBottom: 10
    },

    placeholder: {
        fontFamily: 'Karla', fontSize: 12, color: 'white'
    },
    selectedText: {
        fontFamily: 'Karla', fontSize: 12, color: '#9E122C'
    },
    itemText:{
        fontSize: 12,
    },
    icon: {
        width: 20,
        height: 20,
    },
    inputSearch: {
        height: 30,
        borderRadius: 50,
        fontFamily: 'Karla', fontSize: 12,
    },
    icon: {
        marginRight: 10,
    },
    selected: {
        borderRadius: 50, borderColor: '#9E122C',
        gap: 10,
    },
    list: {
        borderRadius: 15
    }
});

