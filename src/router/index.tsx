import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  AddProductScreen,
  AddSellerScreen,
  ProductListScreen,
  SearchProductScreen,
} from '../screens';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Tambah Penjual') {
            iconName = focused ? 'ios-person-add' : 'ios-person-add-outline';
          } else if (route.name === 'Tambah Produk') {
            iconName = focused ? 'ios-add-circle' : 'ios-add-circle-outline';
          } else if (route.name === 'Daftar Produk') {
            iconName = focused ? 'list' : 'list-outline';
          } else if (route.name === 'Cari Produk') {
            iconName = focused ? 'ios-search' : 'ios-search-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#03B2E0',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Tambah Penjual" component={AddSellerScreen} />
      <Tab.Screen name="Tambah Produk" component={AddProductScreen} />
      <Tab.Screen name="Daftar Produk" component={ProductListScreen} />
      <Tab.Screen name="Cari Produk" component={SearchProductScreen} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
