import React from 'react';
import {SafeAreaView, View} from 'react-native';
import HomeScreen from './src/screen/Home/Home';
import Accommodation from './src/screen/Accommodation';

const App = () => {
  return (
    <SafeAreaView>
      {/* <HomeScreen />
       */}
      <Accommodation />
    </SafeAreaView>
  );
};

export default App;
