import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  VirtualizedList,
} from 'react-native';
import React, {useState} from 'react';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';
import LinearGradient from 'react-native-linear-gradient';

const Home = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();
  const filterResults = price => {
    return results.filter(item => item.price === price);
  };

  return (
    <LinearGradient colors={['#2193b0', '#19547b']} style={styles.container}>
      <View style={styles.roundedStyle}>
      <SearchBar
        term={term}
        onTermChange={newTerm => {
          setTerm(newTerm);
        }}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text style={styles.lengthStyles}>
        We have found {results.length} results
      </Text>
      </View>
      <ScrollView>
        <ResultsList title="Cost Efficient" results={filterResults('$')} />
        <ResultsList title="Bit Pricer" results={filterResults('$$')} />
        <ResultsList title="Big spender" results={filterResults('$$$')} />
      </ScrollView>
    </LinearGradient>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  lengthStyles: {
    color: 'white',
    marginTop: 5,
    marginBottom: 5,
    marginHorizontal: 15,
  },
  roundedStyle:{
    backgroundColor: '#19547b',
    paddingBottom:20,
    marginBottom: 10,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
  },

});
