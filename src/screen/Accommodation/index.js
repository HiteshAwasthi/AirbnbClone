import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Accommodation = props => {
  const Accommodation = props.Accommodation;
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
        {Accommodation.bed}bed{' '}
        <Entypo color={'grey'} size={19} name="dot-single" />
        {Accommodation.bedroom}bedroom
      </Text>
      {/* Description */}
      <Text style={styles.description} numberOfLines={2}>
        {Accommodation.type}
        <Entypo color={'black'} size={19} name="dot-single" /> There are many
        variations of passages of Lorem Ipsum available.{' '}
      </Text>
      {/* Old price & new price */}
      <View style={styles.price}>
        <Text style={styles.oldPrice}>
          <FontAwesome5 name="rupee-sign" size={17} />
          {Accommodation.oldPrice}
        </Text>
        <Text style={styles.newPrice}>
          <FontAwesome5 name="rupee-sign" size={17} />
          {Accommodation.newPrice}
        </Text>
        <Text
          style={{
            fontSize: 20,
            color: 'black',
          }}>
          /night
        </Text>

        {/* Total price */}
      </View>
      <Text style={styles.totalPrice}>
        <FontAwesome5 name="rupee-sign" size={17} /> {Accommodation.totalPrice}
      </Text>
    </View>
  );
};
export default Accommodation;
