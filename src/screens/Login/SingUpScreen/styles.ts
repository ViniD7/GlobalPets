import { StyleSheet } from 'react-native';
// import Colors from '../../../constants/Colors';

const styles = StyleSheet.create({
    content: {
        width: '100%',
        flexDirection: 'column',
        paddingTop: '20%',
        // backgroundColor: 'rgba(255, 255, 255, 0.776)',
        alignItems: 'center',
        // justifyContent: 'center'
    },
    user1: {
        // backgroundColor: 'rgb(110, 29, 216)',
        height: 170,
        width: 170,
        borderRadius: 100,
        marginBottom: '8%',
        marginLeft: '12%',
        marginTop: '3%',
    },
    user2: {
        // backgroundColor: 'rgb(24, 24, 110)',
        height: 170,
        width: 170,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 100,
        borderTopRightRadius: 100,
        borderTopLeftRadius: 100,
        marginBottom: '8%',
        marginLeft: '15%',
        marginTop: '3%',
    },
    user: {
        // backgroundColor: 'rgb(110, 29, 216)',
        height: 170,
        width: 170,
        borderRadius: 100,
        marginBottom: '12%',
        marginLeft: -7,
        marginTop: '3%',
    },
    user0: {
        // backgroundColor: 'rgb(24, 24, 110)',
        height: 170,
        width: 170,
        borderBottomLeftRadius: 100,
        borderBottomRightRadius: 0,
        borderTopRightRadius: 100,
        borderTopLeftRadius: 100,
        marginBottom: '12%',
        marginLeft: -7,
        marginTop: '3%',
    },
    poster: {
        flexDirection: 'row',
        marginTop: '3%',
        width: '100%',
        marginBottom: '17%',
    },
    card: {
        backgroundColor: 'rgba(0, 0, 0, 0.750)',
        height: 300,
        marginTop: -45,
        padding: '13%',
        paddingLeft: '15%',
        paddingTop: '9%',
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        width: '100%',
        textAlign: 'center',
    },
    text: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 23,
    },
    subText: {
        color: '#FFF',
        fontSize: 16,
        marginTop: '5%',
    },
    Button: {
        backgroundColor: 'rgba(139, 0, 0, 0.571)',
        height: 60,
        borderBottomLeftRadius: 100,
        borderBottomRightRadius: 100,
        borderTopRightRadius: 100,
        borderTopLeftRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 12,
            borderWidth: 10,
            borderColor: '#000',
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.0,

        elevation: 15,
        borderWidth: 3,
        borderColor: '#000',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },
    placeholder: {
        backgroundColor: 'rgba(255,255,255,0.1)',
        color: 'white',
        fontWeight: '600',
        borderRadius: 20,
        width: 290,
        marginTop: 15,
        paddingLeft: 15,
        fontSize: 16,
        height: 60
    },
    entrar: {
        backgroundColor: '#1c528c',
        color: '#000',
        fontWeight: '600',
        borderRadius: 20,
        width: 290,
        height: 60,
        marginBottom: 15,
        fontSize: 16,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#1c528c",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.58,
        shadowRadius: 4.65,

        elevation: 6,
    },
    google: {
        backgroundColor: 'white',
        color: '#000',
        fontWeight: '600',
        borderRadius: 20,
        width: 290,
        height: 60,
        marginBottom: 15,
        fontSize: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "white",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.58,
        shadowRadius: 4.65,

        elevation: 6,
    },
    facebook: {
        backgroundColor: '#1c528c',
        color: '#000',
        fontWeight: '600',
        borderRadius: 20,
        width: 290,
        height: 60,
        marginBottom: 10,
        fontSize: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#1c528c",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.58,
        shadowRadius: 4.65,

        elevation: 6,
    },
    shadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 15,
        height: 170,
        width: 170,
        borderRadius: 40,
    },
    img: {
        height: 170,
        width: 170,
        borderRadius: 40,
        borderColor: '#0693e3',
        borderWidth: 2,
    },
    img1: {
        height: 40,
        width: 40,
        borderRadius: 10,
        borderColor: '#FFF',
        borderWidth: 2,
        tintColor: '#FFF',
    },
    googleIcon: {
        height: 24,
        width: 23.52,
    },
    facebookIcon: {
        height: 24,
        width: 12.12
    },
    enter: {
        color: '#FFF',
        fontSize: 14,
        fontWeight: '600',
        marginLeft: 10
    },
    eduTech: {
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textEduTech: { fontSize: 25, fontWeight: '600', color: '#FFF' },
    hide: { position: 'absolute', bottom: 18, right: 15 },
    container: {
        backgroundColor: 'rgb(11, 11, 22)',
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    textForget: {
        color: 'rgb(110,110,110)',
        position: 'absolute',
        left: 25,
        top: 15
    },
    slogan: {
        color: 'rgb(190,190,190)',
        fontSize: 16,
        letterSpacing: 0.5,
        fontWeight: '700',
        marginTop: 15,
        marginBottom: 30
    },
    singUp: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 40
    },
    textSingUp: {
        color: 'rgb(190,190,190)',
        marginRight: 5
    },
    textButtonSingUp: {
        color: '#1c528c',
        fontWeight: '700'
    }
});

export default styles;
