import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';

export default function ProductItem({title, uri, price, onItemPress}) {
  return (
    <TouchableOpacity style={styles.itemContainer} onPress={onItemPress}>
      <Image style={styles.image} source={{uri: uri}} />
      <View style={styles.textContainer}>
        <Text numberOfLines={1}>{title}</Text>
        <Text>Price : ${price}</Text>
      </View>
    </TouchableOpacity>
  );
}
