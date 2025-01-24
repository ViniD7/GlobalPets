import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    input: {
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
        shadowColor: "rgb(16, 70, 145)",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.58,
        shadowRadius: 4.65,
        elevation: 6,
    },
    enter: {
        color: '#FFF',
        fontSize: 14,
        fontWeight: '600',
        marginLeft: 10
    },
    hide: { position: 'absolute', bottom: 18, right: 15 },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 40
    },
    clientMode: {
        backgroundColor: 'rgb(11, 11, 22)',
    },
    employeeMode: {
        backgroundColor: 'rgb(223, 222, 222)',
    },
    slogan: {
        color: '#1c528c',
        fontSize: 16,
        letterSpacing: 0.5,
        fontWeight: '700',
    },
    singUp: {
        marginTop: 30,
        alignItems: 'center',
        gap: 10
    },
    textSingUp: {
        color: 'rgb(190,190,190)',
        marginRight: 5,
    },
    textButtonSingUp: {
        color: '#1c528c',
        fontWeight: '700'
    },
    form: {
        alignItems: 'center',
        gap: 40,
        height: '70%',
        justifyContent: 'space-between',
    },
    brand: {
        gap: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    toggleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // width: '100%',
        marginBottom: 20,
    },
    toggleLabel: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: '600',
    },
    clientText: {
        color: '#FFF'
    },
    employeeText: {
        color:"#1c528c"
    },
    switchButton: {
        flexDirection: 'row',
        backgroundColor: "#1c528c",
        borderColor: "rgb(84, 144, 228)",
        borderWidth: 0.2,
        height: 35,
        width: 75,
        borderRadius: 20,
        alignItems: 'center',
        paddingRight: 7,
        paddingLeft: 10,
        justifyContent: 'space-between',
        shadowColor: "rgb(16, 70, 145)",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.58,
        shadowRadius: 4.65,

        elevation: 6,
    },
    ballButton: {
        height: 25,
        width: 25,
        backgroundColor: "white",
        borderRadius: 90,
        position: 'absolute'
    }
});

export default styles;
