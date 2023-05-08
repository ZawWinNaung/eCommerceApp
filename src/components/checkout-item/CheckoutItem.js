import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import NumericInput from 'react-native-numeric-input';
import React, {useState} from 'react';
import {COLORS} from '../../styles';

export default function CheckoutItem({title, uri, price, count}) {
  const [itemCount, setItemCount] = useState(count);
  return (
    <View
      style={{
        alignItems: 'center',
      }}>
      <View style={styles.itemContainer}>
        <Image style={styles.image} source={{uri: uri}} />
        <View style={styles.textContainer}>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={{flexWrap: 'wrap'}}>
            {title}
          </Text>
          <Text>Price : ${price}</Text>
          <NumericInput
            value={itemCount}
            onChange={value => setCount(setItemCount)}
            onLimitReached={(isMax, msg) => console.log(isMax, msg)}
            totalWidth={120}
            totalHeight={40}
            iconSize={25}
            step={1}
            valueType="integer"
            rounded
            textColor={COLORS.textColor}
            iconStyle={{color: 'white'}}
            containerStyle={{backgroundColor: 'white', margin: 8}}
            rightButtonBackgroundColor={COLORS.secondary}
            leftButtonBackgroundColor={COLORS.secondary}
          />
        </View>
      </View>
    </View>
  );
}
