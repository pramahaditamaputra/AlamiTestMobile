import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Header: React.FC = ({title, subTitle}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingTop: 30,
    paddingBottom: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {fontSize: 22, color: '#020202'},
  subTitle: {fontSize: 14, color: '#8D92A3'},
  back: {
    padding: 16,
    marginRight: 16,
    marginLeft: -10,
  },
});
