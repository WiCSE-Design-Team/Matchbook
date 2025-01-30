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
})

export const matchingPage = StyleSheet.create({
    fullScreen: {
        alignItems: 'center', justifyContent: 'top',
        height: '100%'
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
    button: {
        width: '45%',
        borderColor: 'black', borderWidth: '1',
        marginTop: 20, marginBottom: 10, padding: 10,
        alignContent: 'center', justifyContent: 'center'
    },
    buttonText: {
        textAlign: 'center',
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
        borderColor: 'black', borderWidth: '1', borderRadius: '10',
        backgroundColor: 'white'
    },
    back: {
        height: '100%',
        borderColor: 'black', borderWidth: '1', borderRadius: '10',
        backgroundColor: 'white'
    },
    cardImage: { 
        width: '100%', height: '50%',
        borderTopLeftRadius: '10', borderTopRightRadius: '10'
    },
    cardText: { 
        width: '100%', height: '35%',
        padding: 20,
        alignContent: 'left'
    },
    name: { 
        fontSize: '24',
        fontWeight: 'bold',
        marginBottom: 5
    },
    bio: { 
        fontSize: '18'

    },
    moreInfo: {
        height: '50%',
        padding: 20,
        alignItems: 'center', justifyContent: 'left',
    },
    cardTags: {
        width: '100%', height: '15%',
        alignItems: 'center', justifyContent: 'left',
        marginBottom: 20, padding: 20,
        flexDirection: 'row', gap: 15
    },
    tag: {
        borderColor: 'black', borderWidth: '1',
        padding: 10,
        justifyContent: 'center', alignContent: 'center'
    },
})

export const multiselect = StyleSheet.create({
    dropdown: {
        height: 50, width: 200,
        backgroundColor: 'transparent',
        borderColor: 'black', borderWidth: '1',
        padding: 10
    },

    placeholderStyle: {
        fontSize: 12,
    },
    selectedTextStyle: {
        fontSize: 12,
    },
    itemTextStyle:{
        fontSize: 12,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 30,
        fontSize: 12,
    },
    icon: {
        marginRight: 10,
    },
    selectedStyle: {
        borderRadius: 12,
    },
});

