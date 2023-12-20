import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(11, 11, 22)',
        paddingTop: 30,
        paddingHorizontal: 35,
    },
    endScreen: {
        height: 120
    },
    input: {
        width: '100%',
        height: 48,
        padding: 12,
        marginBottom: 30,
        color: 'white',
        backgroundColor: 'rgba(255,255,255,0.1)',
        borderRadius: 8,
        fontWeight: '600',
        marginTop: 20
    },
    card: {
        width: '100%',
        backgroundColor: '#004E75',
        padding: 20,
        borderRadius: 20,
        marginTop: 30,
        marginBottom: 30,
        shadowColor: "rgb(16, 70, 145)",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.58,
        shadowRadius: 4.65,

        elevation: 6,
    },
    button: {
        height: 50,
        width: 100,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'white'
    },
    organizeButton: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between'
    },
    text: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600'
    },
    name: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center'
    },
    imageCard: {
        height: 100,
        width: 100,
        backgroundColor: 'rgba(137, 168, 211, 0.6)',
        borderRadius: 90,
        borderColor: 'rgb(137, 168, 211)',
        borderWidth: 4,
        alignSelf: 'center'
    },
    availableTimes: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 30,
        gap: 30
    },
    hour: {
        color: 'white',
        fontSize: 16,
        fontWeight: '500'
    },
    veterinarian: {
        gap: 15
    },
    organizeData: {
        paddingTop: 20,
        gap: 10,

    },
    data: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
    },
    queryButton: {
        backgroundColor: '#004E75',
        color: '#000',
        fontWeight: '600',
        borderRadius: 15,
        width: '100%',
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
    textButton: {
        color: '#FFF',
        fontSize: 14,
        fontWeight: '600',
        letterSpacing: 0.7
    }
});

export default styles;
