import {StyleSheet, View, FlatList} from 'react-native';
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
  getProductBySearch,
  getProductBySellerId,
} from '../../redux/actions/product';
import {useForm} from '../../utils';

const SearchProductScreen: React.FC = () => {
  const [form, setForm] = useForm({
    nama: '',
  });
  const products = useSelector(state => state.productReducer);
  const dispatch = useDispatch();

  const searchProductBySearch = (keyword: string) => {
    dispatch(getProductBySearch(keyword));
    setForm('reset');
  };

  return (
    <View style={styles.page}>
      <Header
        title="Products"
        subTitle="Search Product by Product Name Keyword"
      />
      <View style={styles.container}>
        <SearchBar
          placeholder="Type product name keyword"
          value={form.nama}
          onChangeText={value => setForm('nama', value)}
          onPress={() => searchProductBySearch(form.nama)}
        />
        <Gap height={25} />
        <FlatList
          ListEmptyComponent={<EmptyState title="Product Name Empty" />}
          contentContainerStyle={{flexGrow: 1}}
          data={products.data}
          renderItem={({item, index, separators}) => (
            <ProductCard
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
    </View>
  );
};

export default SearchProductScreen;

const styles = StyleSheet.create({
  page: {flex: 1},
  container: {
    paddingHorizontal: 10,
    marginTop: 24,
    flex: 1,
  },
});
