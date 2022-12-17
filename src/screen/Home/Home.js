import {View, Text, ImageBackground, Pressable} from 'react-native';
import React from 'react';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';

const HomeScreen = () => {
  return (
    <View>
      <ImageBackground
        source={require('../../../assets/images/wallpaper.jpg')}
        style={styles.image}
      />
      <Text style={styles.title}>Go Near</Text>

      <Pressable style={styles.searchBar}>
        <Fontisto name={'search'} size={18} style={{color: '#ff4d4d'}} />
        <Text style={styles.searchBarText}> Where are you going?</Text>
      </Pressable>
      <Pressable style={styles.homeBtn}>
        <Text style={styles.homeBtnText}> Explore nearby places</Text>
      </Pressable>
    </View>
  );
};

export default HomeScreen;
