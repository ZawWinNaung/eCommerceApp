import {Layout} from '../../components';
import {Text, Image, View, ScrollView, TouchableOpacity} from 'react-native';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import NumericInput from 'react-native-numeric-input';
import {COLORS} from '../../styles';
import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {addToCart} from '../../redux/slice/CartSlice';

export default function ProductDetailScreen({route, navigation}) {
  const {product} = route.params;
  const [count, setCount] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (count === 0) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [count]);

  return (
    <Layout>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity
          style={styles.backIcon}
          onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" size={30} color={'black'} />
        </TouchableOpacity>
        <Text style={styles.appBarTxt}>Product Detail</Text>
      </View>

      <Image style={styles.image} source={{uri: product.image}} />

      <View style={styles.productContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.titletxt}>{product.title}</Text>
          <View style={styles.ratingContainer}>
            <Text>Rating : {product.rating.rate}</Text>
            <Text>Review By - {product.rating.count}</Text>
          </View>

          <Text style={styles.txt}>{product.description}</Text>
          <Text>
            Price : <Text style={{color: 'green'}}>${product.price}</Text>
          </Text>
          <View style={styles.buyingContainer}>
            <NumericInput
              value={count}
              onChange={value => setCount(value)}
              onLimitReached={(isMax, msg) => console.log(isMax, msg)}
              totalWidth={120}
              totalHeight={40}
              iconSize={25}
              step={1}
              valueType="integer"
              rounded
              textColor={COLORS.textColor}
              iconStyle={{color: 'white'}}
              rightButtonBackgroundColor={COLORS.divider}
              leftButtonBackgroundColor={COLORS.divider}
            />
            <TouchableOpacity
              style={styles.button(disabled)}
              disabled={disabled}
              onPress={() => {
                dispatch(addToCart({itemcount: count, product: product}));
              }}>
              <Text style={styles.buttonTxt}>Add To Cart</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </Layout>
  );
}
