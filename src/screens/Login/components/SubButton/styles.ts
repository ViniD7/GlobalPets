import { StyleSheet } from 'react-native';

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
        backgroundColor: 'rgb(11, 11, 22)',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 40
    },
    slogan: {
        color: 'rgb(190,190,190)',
        fontSize: 16,
        letterSpacing: 0.5,
        fontWeight: '700',
    },
    singUp: {
        flexDirection: 'row',
        marginTop: 30
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
        gap: 5
    }
});

export default styles;
