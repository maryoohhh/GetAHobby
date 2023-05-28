import { View, StyleSheet } from 'react-native';

import GetAHobbyButton from '../components/home/get-a-hobby-button';

import Bored from '../components/home/bored';

const Home = ({ navigation }) => (
    <View style={styles.container}>
        <GetAHobbyButton navigation={navigation}/>  
        <Bored />
    </View>
);

import { colors } from '../constants/theme';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.gray
    }
});

export default Home; 