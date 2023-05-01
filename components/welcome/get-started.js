import { View, Pressable, Text, StyleSheet } from 'react-native';

//button to go from welcome --> home screen labeled Get Started!
const GetStarted = ({ navigation }) => (
    <View style={styles.buttonContainer}>
        <Pressable 
            style={({ pressed }) => [
                styles.button,
                pressed ? styles.pressed : styles.default ]}
            onPress={() => navigation.navigate('Home')} >
            <Text style={styles.buttonText}>Get Started!</Text>
        </Pressable>
    </View>
);

//get-started button styles
const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    button: {
        height: 50,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 3,
        borderRadius: 100,
        borderColor: '#FFF',
        elevation: 10
    },
    pressed: {
        backgroundColor: '#999'
    },
    default: {
        backgroundColor: '#555'
    },
    buttonText: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold'
    }
});

export default GetStarted;