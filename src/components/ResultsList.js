import {StyleSheet, Text, ScrollView, FlatList, View, TouchableOpacity} from 'react-native';
import React from 'react';
import ResultDetails from './ResultDetails';
import { useNavigation } from '@react-navigation/native';


const ResultsList = ({title, results}) => {

    const navigation = useNavigation()

    return (
    <View style={styles.container}>
      <Text style={styles.titleStyles}>{title}</Text>
      <Text style={styles.lengthStyles}>{results.length} results found</Text>
      <FlatList
        horizontal
        keyExtractor={result => result.id}
        data={results}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => {
          return (           
            <TouchableOpacity onPress={()=>navigation.navigate('Details', {id : item.id})}>
                <ResultDetails result={item}/>
                </TouchableOpacity>
          )
        }}
      />
    </View>
  );
};

export default ResultsList;

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
    marginTop: 5,
    marginBottom:10
  },
  titleStyles: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  lengthStyles:{
    color: 'white',
    fontSize: 16
  }
});
