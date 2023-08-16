import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
  return (
    <View style={styles.container} >
      <TextInput
        style={styles.textStyle}
        placeholder="Search"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
        value={term}
/>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#c4e0e5',
    opacity: 10,
    marginHorizontal: 15,
    marginTop:15,
    paddingHorizontal:12,
    borderRadius:10
  },
  textStyle: {
    fontSize:18,
    color: 'black'
  }
});

export default SearchBar;

