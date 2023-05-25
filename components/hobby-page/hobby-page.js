import { ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import HobbyTitle from '../../components/hobby-page/hobby-title';
import HobbyImage from '../../components/hobby-page/hobby-image';
import HobbyDifficulty from '../../components/hobby-page/hobby-difficulty';
import HobbyDescription from '../../components/hobby-page/hobby-description';
import HobbyRequirements from '../../components/hobby-page/hobby-requirements';
import HobbyHealthAndSafety from './hobby-health-and-safety';
import HobbyTips from '../../components/hobby-page/hobby-tips';
import HobbyResources from '../../components/hobby-page/hobby-resources';

import { styles } from '../hobby-page/hobby-page-styles';
import { colors } from '../../constants/theme';

const HobbyPage = ( props ) => (
    <ScrollView 
        contentContainerStyle={styles.container}
        persistentScrollbar={true} >
        <HobbyTitle hobby={props.title} />
        <HobbyImage image={props.image} />
        <HobbyDifficulty rating={props.rating} />
        <HobbyDescription description={props.description}/>
        <HobbyRequirements requirements={props.requirements}/>
        <HobbyHealthAndSafety healthAndSafety={props.healthAndSafety}/>
        <HobbyTips tips={props.tips} />
        <HobbyResources hyperlinks={props.resources}/>
    <StatusBar backgroundColor={colors.tertiary} style='inverted'/>
    </ScrollView>
);

export default HobbyPage;