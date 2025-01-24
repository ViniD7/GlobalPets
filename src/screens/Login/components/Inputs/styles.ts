import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    input: {
        backgroundColor: 'rgba(255,255,255,0.1)',
        borderRadius: 20,
        width: 290,
        marginTop: 15,
        paddingHorizontal: 15,
        height: 60,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },
    placeholder: {
        color: 'white',
        fontWeight: '600',
        fontSize: 16,
        width: '90%'
    },
    inputClient: {
        backgroundColor: 'rgba(255, 255, 255, 0.04)',
    },
    inputEmployee: {
        backgroundColor: 'rgba(0, 60, 255, 0.11)', 
    },
    logoClient: {
        backgroundColor: '#1c528c',
    },
    logoEmployee: {
        backgroundColor: 'orange',
    },
    
});

export default styles;
