import {View, Text, TextInput} from 'react-native';
import React, {useState} from 'react';
import feed from '../../../assets/feed';
import Accommodation from '../Accommodation';
import styles from './styles';
import search from '../../../assets/Data/search';
import SearchResult from '../SearchResult';

const LocationSearchBar = () => {
  const [inputText, setInputText] = useState('');
  return (
    <View style={styles.container}>
      {/* Input field */}
      <TextInput
        style={styles.TextInput}
        placeholder="Where are going?"
        value={inputText}
        onChangeText={setInputText}
      />

      {/* suggestions */}
    </View>
  );
};

export default LocationSearchBar;
