import {CheckoutItem, Layout, ProductItem} from '../../components';
import {Text, FlatList, View, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';

export default function CheckoutScreen({navigation}) {
  const checkOutItem = useSelector(state => state.cart.productList);
  return (
    <Layout>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity
          style={styles.backIcon}
          onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" size={30} color={'black'} />
        </TouchableOpacity>
        <Text style={styles.appBarTxt}>Cart</Text>
      </View>
      <FlatList
        style={{width: '100%'}}
        data={checkOutItem}
        keyExtractor={item => item.product.id}
        renderItem={({item, index}) => (
          <CheckoutItem
            title={item.product.title}
            uri={item.product.image}
            price={item.product.price}
            count={item.itemcount}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </Layout>
  );
}
