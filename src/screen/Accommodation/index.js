import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Accommodation = () => {
  return (
    <View style={styles.container}>
      {/* Image */}
      {/* <Text>HEllo</Text> */}
      <Image
        style={styles.image}
        source={require('../../../assets/images/homeImage.jpg')}
      />

      {/* Bedrooms */}
      <Text style={styles.bedroom}>
        1bed <Entypo color={'grey'} size={19} name="dot-single" />
        1bedroom
      </Text>
      {/* Description */}
      <Text style={styles.description} numberOfLines={2}>
        Entire flat <Entypo color={'black'} size={19} name="dot-single" /> There
        are many variations of passages of Lorem Ipsum available.{' '}
      </Text>
      {/* Old price & new price */}
      <View style={styles.price}>
        <Text style={styles.oldPrice}>
          <FontAwesome5 name="rupee-sign" size={17} />
          2000
        </Text>
        <Text style={styles.newPrice}>
          <FontAwesome5 name="rupee-sign" size={17} />
          1499 / night
        </Text>

        {/* Total price */}
      </View>
      <Text style={styles.totalPrice}>
        <FontAwesome5 name="rupee-sign" size={17} /> 1799 Total
      </Text>
    </View>
  );
};
export default Accommodation;
