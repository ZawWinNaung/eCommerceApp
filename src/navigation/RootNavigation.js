import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useRef} from 'react';
import {
  CHECKOUT_SCREEN,
  PRODUCT_DETAIL_SCREEN,
  PRODUCT_LIST_SCREEN,
  SPLASH_SCREEN,
} from '../constant/RouteName';
import {
  CheckoutScreen,
  ProductDetailScreen,
  ProductListScreen,
  SplashScreen,
} from '../screens';
import {COLORS} from '../styles';

const Stack = createStackNavigator();
export default function RootNavigation() {
  const routeNameRef = useRef();
  const navigationRef = useRef();

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() =>
        (routeNameRef.current = navigationRef.current.getCurrentRoute().name)
      }
      onStateChange={() => {
        const currentRouteName = navigationRef.current.getCurrentRoute().name;
        routeNameRef.current = currentRouteName;
      }}>
      <Stack.Navigator
        initialRouteName={SPLASH_SCREEN}
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
          gestureDirection: 'horizontal',
          headerStyle: {backgroundColor: COLORS.primary},
          headerTintColor: COLORS.white,
        }}>
        <Stack.Screen name={SPLASH_SCREEN} component={SplashScreen} />
        <Stack.Screen
          name={PRODUCT_LIST_SCREEN}
          component={ProductListScreen}
        />
        <Stack.Screen
          name={PRODUCT_DETAIL_SCREEN}
          component={ProductDetailScreen}
        />
        <Stack.Screen name={CHECKOUT_SCREEN} component={CheckoutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
