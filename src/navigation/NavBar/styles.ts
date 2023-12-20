import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    notificationTextActive: { fontSize: 12, color: 'white' },
    notificationText: { fontSize: 8, color: 'white' },
    notificationContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 16,
        width: 16,
        borderRadius: 10,
        backgroundColor: 'red',
        position: 'absolute',
        paddingRight: 0.7,
        paddingBottom: 0.7,
        zIndex: 10,
        right: -2.5,
        top: -2.5,
    },
    notificationContainerActive: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 20,
        width: 20,
        borderRadius: 20,
        backgroundColor: 'red',
        position: 'absolute',
        paddingRight: 0.7,
        paddingBottom: 0.7,
        zIndex: 10,
        right: -5,
        top: 5,
    },
    pictureSize: {
        height: 40,
        width: 40,
        borderRadius: 20,
    },
    pictureBorderContainer: {
        height: 40,
        width: 40,
        backgroundColor: '#FFF',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    pictureContainer: {
        height: 40,
        width: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    pictureSizeActive: {
        height: 52,
        width: 52,
        borderRadius: 40,
    },
    pictureBorderContainerActive: {
        height: 52,
        width: 52,
        backgroundColor: '#FFF',
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    pictureContainerActive: {
        height: 52,
        width: 52,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabTitle: { color: '#FFF', fontSize: 10, marginTop: 5 },
    tabContainer: {
        height: 55,
        width: 55,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 90
    },
    shadow: {
        shadowColor: '#000',
        shadowOffset: {
            height: 10,
            width: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    },
    image: {
        height: 35,
        width: 35
    },
    imageSmall: {
        height: 50,
        width: 50,
    },

});

export default styles;
