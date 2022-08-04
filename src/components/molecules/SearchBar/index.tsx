import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput as TextInputRN,
  TouchableOpacity,
} from 'react-native';

const SearchBar: React.FC = ({label, placeholder, onPress, ...restProps}) => {
  return (
    <View style={styles.container}>
      <TextInputRN
        style={styles.input}
        placeholder={placeholder}
        {...restProps}
      />
      <TouchableOpacity style={styles.searchButton} onPress={onPress}>
        <Text style={styles.text}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 10,
  },
  searchButton: {
    minWidth: 100,
    borderRadius: 8,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#03B2E0'
  },
  input: {
    borderWidth: 1,
    borderColor: '#020202',
    borderRadius: 8,
    padding: 10,
    flex: 1,
  },
  text: {
    color: '#FFF'
  }
});
