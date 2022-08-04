import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import {Button, Gap, Header, TextInput} from '../../components';
import {useDispatch} from 'react-redux';
import {useForm} from '../../utils';
import {addProduct} from '../../redux/actions/product';

const ProductScreen: React.FC = () => {
  const [form, setForm] = useForm({
    sellerId: '',
    nama: '',
    satuan: '',
    hargaSatuan: '',
    deskripsi: '',
  });

  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(addProduct(form));
    setForm('reset');
  };

  return (
    <View style={styles.page}>
      <ScrollView>
        <Header title="Product" subTitle="Add New Product" />
        <View style={styles.container}>
          <TextInput
            label="Seller ID"
            keyboardType="numeric"
            placeholder="Type seller id"
            value={form.sellerId}
            onChangeText={value => setForm('sellerId', value)}
          />
          <Gap height={24} />
          <TextInput
            label="Product Name"
            placeholder="Type product name"
            value={form.nama}
            onChangeText={value => setForm('nama', value)}
          />
          <Gap height={24} />
          <TextInput
            label="Unit ( ex: kg )"
            placeholder="Type product unit"
            value={form.satuan}
            onChangeText={value => setForm('satuan', value)}
          />
          <Gap height={24} />
          <TextInput
            label="Price per unit"
            keyboardType="numeric"
            placeholder="Type product price per unit"
            value={form.hargaSatuan}
            onChangeText={value => setForm('hargaSatuan', value)}
          />
          <Gap height={24} />
          <TextInput
            label="Description"
            placeholder="Type product description"
            value={form.deskripsi}
            onChangeText={value => setForm('deskripsi', value)}
          />
          <Gap height={24} />

          <Button text="Submit" onPress={onSubmit} />
        </View>
      </ScrollView>
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  page: {flex: 1},
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 26,
    marginTop: 24,
    flex: 1,
  },
});
