import {SafeAreaView} from 'react-native';
import styles from './styles';

export default function Layout(props) {
  return (
    <SafeAreaView style={styles.mainContainer}>{props.children}</SafeAreaView>
  );
}
