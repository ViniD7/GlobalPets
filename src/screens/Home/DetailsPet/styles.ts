import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(11, 11, 22)',
        paddingTop: 30,
        paddingHorizontal: 20,
        gap: 50
    },

    card: {
        height: 140,
        width: '100%',
        backgroundColor: '#004E75',
        borderRadius: 20,
        justifyContent: 'flex-start',
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
        marginBottom: 20,
    },
    imageCard: {
        height: 95,
        width: 95,
        backgroundColor: 'rgba(137, 168, 211, 0.6)',
        borderRadius: 90,
        borderColor: 'rgb(137, 168, 211)',
        borderWidth: 3
    },
    name: {
        color: 'white',
        fontSize: 18,
        fontWeight: '500'
    },
    info: {
        color: 'white',
        fontSize: 14,
        fontWeight: '500'
    },
    dataPet: {
        gap: 8
    },
    data: {
        flexDirection: 'row',
        gap: 6,
        alignItems: 'center'
    },
    logo: {
        position: 'absolute',
        top: 15,
        right: 20
    },
});

export default styles;
