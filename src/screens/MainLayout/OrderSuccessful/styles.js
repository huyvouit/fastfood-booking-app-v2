import {StyleSheet, StatusBar} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
    },
    part1: {
        paddingTop: 150,
        justifyContent: 'center',
    },
    tick: {
        width: 200,
        height: 200,
        alignSelf: 'center',
    },
    inform: {
        marginTop: 20,
        color: '#000',
        fontFamily: 'Roboto-Bold',
        fontWeight: '700',
        fontSize: 30,
        textAlign: 'center',
    },
    part2: {
        paddingTop: 50,
        justifyContent: 'center',
    },
    button: {
        backgroundColor: '#FE724C',
        borderRadius: 30,
        height: 50,
        width: '60%',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
    },
}) 


export default styles;