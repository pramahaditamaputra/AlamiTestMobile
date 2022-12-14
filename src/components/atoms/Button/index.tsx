import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Button: React.FC = ({
  text,
  color = '#03B2E0',
  textColor = '#FFF',
  onPress,
}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.container(color)}>
        <Text style={styles.text(textColor)}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: color => ({
    backgroundColor: color,
    padding: 12,
    borderRadius: 8,
  }),
  text: color => ({
    fontSize: 14,
    color: color,
    textAlign: 'center',
  }),
});
