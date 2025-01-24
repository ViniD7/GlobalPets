import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    globalPet: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
        gap: 10
    },
    text: { fontSize: 30, fontWeight: '600' },
    slogan: {
        color: 'rgb(190,190,190)',
        fontSize: 16,
        letterSpacing: 0.5,
        fontWeight: '700',
    },
    logo: {
        height: 40,
        width: 40,
        borderRadius: 10,
        borderColor: '#FFF',
        borderWidth: 2,
        tintColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoClient: {
        backgroundColor: 'transparent',
    },
    logoEmployee: {
        backgroundColor: '#1c528c',
        borderColor: 'rgb(84, 144, 228)',
    },
});

export default styles;
