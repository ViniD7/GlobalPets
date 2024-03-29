import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
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
    enter: {
        color: '#FFF',
        fontSize: 14,
        fontWeight: '600',
        marginLeft: 10
    },
    form: {
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 10,
        height: '70%'
    },
    textEduTech: {
        fontSize: 25,
        fontWeight: '600',
        color: '#FFF',
        textAlign: 'center'
    },
    container: {
        backgroundColor: 'rgb(11, 11, 22)',
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    slogan: {
        color: 'rgb(190,190,190)',
        fontSize: 16,
        letterSpacing: 0.5,
        fontWeight: '700',
    },
    singUp: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textSingUp: {
        color: 'rgb(190,190,190)',
        marginRight: 5
    },
    textButtonSingUp: {
        color: '#1c528c',
        fontWeight: '700'
    },
    title: {
        gap: 10
    }
});

export default styles;
