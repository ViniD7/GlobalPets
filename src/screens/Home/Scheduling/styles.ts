import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(11, 11, 22)',
        paddingTop: 30,
        paddingHorizontal: 20,
    },
    title: {
        color: 'white',
        fontSize: 18,
        fontWeight: '600',
        marginTop: 40,
        marginBottom: 20
    },
    card: {
        width: '100%',
        backgroundColor: '#004E75',
        borderRadius: 20,
        padding: 20,
        borderColor: 'rgb(137, 168, 211)',
        borderWidth: 1,
        gap: 5
    },
    text: {
        color: 'white',
        fontSize: 15,
        fontWeight: '600'
    }
});

export default styles;
