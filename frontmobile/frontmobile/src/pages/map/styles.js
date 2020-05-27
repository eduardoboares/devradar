import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    map: {
        flex: 1
    },
    avatar: {
        width: 29,
        height: 29,
        borderRadius: 14.5,
        borderWidth: 1,
        borderColor: '#7d40e7'
    },
    callout: {
        width: 260,
    },
    devName: {
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'justify'
    },
    devBio: {
        color: '#bbb',
        marginTop: 5,
        textAlign: 'justify'
    },
    devTechs: {
        marginTop: 5,
    },
    searchForm: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
        zIndex: 5,
        flexDirection: 'row'
    },
    searchInput: {
        flex: 1,
        height: 50,
        backgroundColor: '#FFF',
        color: '#333',
        borderRadius: 25,
        paddingHorizontal: 20,
        fontSize: 16,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: {
            width: 4,
            height: 4,
        },
        elevation: 2
    },
    loadButton: {
        width: 50,
        height: 50,
        backgroundColor: '#8E4DFF',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15
    }
});