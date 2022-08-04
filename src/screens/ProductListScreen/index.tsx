import {StyleSheet, View, FlatList, Text, SafeAreaView} from 'react-native';
import React, {useEffect} from 'react';
import {
  EmptyState,
  Gap,
  Header,
  ProductCard,
  SearchBar,
} from '../../components';
import {useDispatch, useSelector} from 'react-redux';
import {
  getProductBySellerId,
  getAllProducts,
} from '../../redux/actions/product';
import {useForm} from '../../utils';

const ProductListScreen: React.FC = () => {
  const [form, setForm] = useForm({
    sellerId: '',
  });
  const products = useSelector(state => state.productReducer);
  const dispatch = useDispatch();

  const searchProductBySellerId = (sellerId: number) => {
    dispatch(getProductBySellerId(sellerId));
    setForm('reset');
  };

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <SafeAreaView style={styles.page}>
      <Header title="Products" subTitle="Search Product by Seller ID" />
      <View style={styles.container}>
        <SearchBar
          keyboardType="numeric"
          placeholder="Type sellerId"
          value={form.sellerId}
          onChangeText={value => setForm('sellerId', value)}
          onPress={() => searchProductBySellerId(form.sellerId)}
        />
        <Gap height={25} />
        <FlatList
          ListEmptyComponent={<EmptyState title="Empty" />}
          contentContainerStyle={{flexGrow: 1}}
          data={products.data}
          renderItem={({item, index, separators}) => (
            <ProductCard
              key={item.id}
              productName={item.nama}
              description={item.deskripsi}
              sellerId={item.sellerId}
              unit={item.satuan}
              pricePerUnit={item.hargaSatuan}
            />
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default ProductListScreen;

const styles = StyleSheet.create({
  page: {flex: 1},
  container: {
    flex: 1,
  },
});
