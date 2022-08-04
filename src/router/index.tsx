import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
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
    <Tab.Navigator>
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
