import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import HomeScreen from './src/screen/Home/Home';
import Accommodation from './src/screen/Accommodation';
import feed from './assets/feed';

const App = props => {
  const Accommodation1 = feed[0];
  return (
    // <SafeAreaView>
    <ScrollView>
      {/* <HomeScreen />
       */}
      <Accommodation Accommodation={Accommodation1} />
    </ScrollView>
    // </SafeAreaView>
  );
};

export default App;
