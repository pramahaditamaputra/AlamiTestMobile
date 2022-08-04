import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const EmptyState: React.FC = ({title}) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
    </View>
  );
};

export default EmptyState;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    marginTop: 24,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
});
