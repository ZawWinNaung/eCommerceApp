import React, {useEffect, useState, useLayoutEffect} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {Layout, ProductItem} from '../../components';
import axios from 'axios';
import {COLORS} from '../../styles';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {CHECKOUT_SCREEN, PRODUCT_DETAIL_SCREEN} from '../../constant/RouteName';
import filter from 'lodash.filter';

export default function ProductListScreen({navigation}) {
  const [products, setProducts] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get('https://fakestoreapi.com/products')
      .then(response => {
        setData(response.data);
        setProducts(response.data);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleSearch = input => {
    let filteredData = filter(products, item => {
      return item.title.toLowerCase().includes(input.toLowerCase());
    });
    setData(filteredData);
  };

  return (
    <Layout>
      <View style={styles.titleContainer}>
        <Text style={styles.titleTxt}>Products</Text>
        <TouchableOpacity onPress={() => navigation.navigate(CHECKOUT_SCREEN)}>
          <Ionicons name="cart-outline" size={30} style={styles.cart} />
        </TouchableOpacity>
      </View>
      <View style={styles.searchBarContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="search products"
            style={styles.textInput}
            onChangeText={input => handleSearch(input)}
          />
        </View>
      </View>
      {loading ? (
        <ActivityIndicator
          size={30}
          color={COLORS.primary}
          style={{
            alignSelf: 'center',
          }}
        />
      ) : null}

      <FlatList
        style={styles.list}
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => (
          <ProductItem
            title={item.title}
            uri={item.image}
            price={item.price}
            onItemPress={() => {
              navigation.navigate(PRODUCT_DETAIL_SCREEN, {product: item});
            }}
          />
        )}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
    </Layout>
  );
}
