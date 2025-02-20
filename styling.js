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
        alignItems: 'center', justifyContent: 'top',
        height: '100%',
        display: 'flex',
        flexDirection:'column',
    },
    header : {
        display: 'flex',
        alignItems: 'center', 
        justifyContent: 'center',
        height: '12%',
        width: '100%',
        backgroundColor: '#818589',
    },
    chats : {
        height: '88%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    chat : {
        width: '100%',
        flexShrink: 1,
        padding: 10,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderBlockColor:'black',
        borderTopWidth: 0,
        borderWidth: 0.5,
        alignItems: 'center',
    },
    user : {
        borderRadius: '50%',
        width: 50,
        height: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent:'center',
        paddingLeft: 1,
        backgroundColor: '#818589',
    },
    name : {
        paddingLeft: 10,
    },
    arrow: {
        paddingLeft: '68%',
    }
});

export const profileCreationPage = StyleSheet.create({
    fullScreen: {
        alignItems: 'center', justifyContent: 'center',
        height: '100%'
    },
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
    butn: {
        borderRadius: 17,
        borderColor: '#C5C6C7',
        alignItems: 'center',
        width: 200,
        borderWidth: 1,
        marginTop: 20,
    },
})

export const profilePage = StyleSheet.create({

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

