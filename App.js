import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import {
  HomeScreen,
  RestaurantScreen,
  BasketScreen,
  PreparingOrderScreen,
  DeliverScreen,
} from './screens';
import { store } from './store';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Restaurant" component={RestaurantScreen} />
          <Stack.Screen
            options={{
              headerShown: false,
              presentation: 'modal',
            }}
            name="Basket" component={BasketScreen} />
          <Stack.Screen
            options={{
              headerShown: false,
              presentation: 'fullScreenModal',
            }}
            name="Preparing" component={PreparingOrderScreen} />
          <Stack.Screen
            options={{
              headerShown: false,
              presentation: 'fullScreenModal',
            }}
            name="Deliver" component={DeliverScreen} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}

