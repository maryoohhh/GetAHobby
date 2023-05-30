import Intro from '../components/home/intro';
import Bored from '../components/home/bored';
import FollowUp from '../components/home/follow-up';

import { styles } from '../components/home/home-styles';

import { shadows, colors } from '../constants/theme';

import { LinearGradient  } from 'expo-linear-gradient';

export const HomeGradient = (props) => (
    <LinearGradient 
    colors={[ colors.white, colors.gray ]}
    style={styles.container}>{props.children}
    </LinearGradient>
);

const Home = ({ }) => (
    <HomeGradient>
        <Intro />
        <Bored />
        <FollowUp />
    </HomeGradient>
);

export default Home; 