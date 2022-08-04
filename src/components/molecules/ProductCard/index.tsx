import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Gap} from '../../atoms';

const ProductCard: React.FC = ({
  sellerId,
  productName,
  description,
  unit,
  pricePerUnit,
  onPress,
}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.text}>Seller ID : {sellerId}</Text>
          <Text style={styles.text}>Product Name: {productName}</Text>
          <Text style={styles.text}>Product Unit: {unit}</Text>
          <Text style={styles.text}>Product Price Unit: {pricePerUnit}</Text>
          <Text style={styles.text}>Product Description: {description}</Text>
        </View>
      </View>
      <Gap height={5} />
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    minHeight: 100,
    backgroundColor: 'white',
    borderRadius: 8,
  },
  content: {padding: 10},
  text: {fontSize: 16, color: '#020202'},
});
