import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import {Button, Gap, Header, TextInput} from '../../components';
import {useDispatch} from 'react-redux';
import {useForm} from '../../utils';
import {addSeller} from '../../redux/actions/seller';

const AddSellerScreen: React.FC = () => {
  const [form, setForm] = useForm({
    nama: '',
    kota: '',
  });

  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(addSeller(form));
    setForm('reset');
  };

  return (
    <SafeAreaView style={styles.page}>
      <ScrollView>
        <Header title="Seller" subTitle="Add New Seller" />
        <View style={styles.container}>
          <TextInput
            label="Name"
            placeholder="Type seller name"
            value={form.nama}
            onChangeText={value => setForm('nama', value)}
          />
          <Gap height={24} />
          <TextInput
            label="City"
            placeholder="Type seller city name"
            value={form.kota}
            onChangeText={value => setForm('kota', value)}
          />
          <Gap height={24} />
          <Button text="Submit" onPress={onSubmit} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddSellerScreen;

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
