import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import HomeScreen from './src/screen/Home/Home';
import Accommodation from './src/screen/Accommodation';
import feed from './assets/feed';
import SearchResult from './src/screen/SearchResult';
import LocationSearchBar from './src/screen/LocationSearchBar';
import GuestScreen from './src/screen/Guest/Index';

const App = props => {
  const Accommodation1 = feed[0];
  return (
    <SafeAreaView>
      {/* <HomeScreen />
       */}
      {/* <Accommodation Accommodation={Accommodation1} /> */}

      {/* <SearchResult /> */}
      {/* <LocationSearchBar /> */}
      <GuestScreen />
    </SafeAreaView>
  );
};

export default App;
