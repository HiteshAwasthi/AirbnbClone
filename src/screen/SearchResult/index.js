import {View, Text, FlatList} from 'react-native';
import React from 'react';
import feed from '../../../assets/feed';
import Accommodation from '../Accommodation';

const SearchResult = () => {
  return (
    <FlatList
      data={feed}
      renderItem={({item}) => <Accommodation Accommodation={item} />}
    />
  );
};

export default SearchResult;
