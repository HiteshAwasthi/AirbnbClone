import {View, Text, Pressable} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const GuestScreen = () => {
  const [adultCount, setAdultCount] = useState(0);
  const [childrenCount, setChildrenCount] = useState(0);
  const [infantsCount, setInfantsCount] = useState(0);

  const adultHandleCounter = add => {
    if (add) {
      setAdultCount(adultCount - 1);
    } else {
      setAdultCount(adultCount + 1);
    }
  };

  const childrenHandleCounter = add => {
    if (add) {
      setChildrenCount(childrenCount - 1);
    } else {
      setChildrenCount(childrenCount + 1);
    }
  };

  const infantshandleCounter = add => {
    if (add) {
      setInfantsCount(infantsCount - 1);
    } else {
      setInfantsCount(infantsCount + 1);
    }
  };

  return (
    <View style={styles.guestList}>
      {/* Guest */}
      <View style={styles.row}>
        {/* Title */}
        <View style={styles.title}>
          <Text style={styles.title1}> Adults</Text>
          <Text style={styles.description}> Ages 14 and above</Text>
        </View>

        {/* Buttons with value */}
        <View style={styles.buttonCount}>
          {/* - Button */}
          <Pressable
            style={styles.minusButton}
            onPress={() => {
              if (adultCount >= 1) {
                adultHandleCounter(true);
              }
            }}>
            <EvilIcons name={'minus'} size={32} />
          </Pressable>

          {/* count */}
          <Text style={styles.adultCount}>{adultCount}</Text>
          {/* + Button */}

          <Pressable onPress={() => adultHandleCounter(false)}>
            <EvilIcons name={'plus'} size={32} />
          </Pressable>
        </View>
      </View>

      <View style={styles.row}>
        {/* Title */}
        <View style={styles.title}>
          <Text style={styles.title1}> Children</Text>
          <Text style={styles.description}> Ages 2-12</Text>
        </View>

        {/* Buttons with value */}
        <View style={styles.buttonCount}>
          {/* - Button */}
          <Pressable
            style={styles.minusButton}
            onPress={() => {
              if (childrenCount >= 1) {
                childrenHandleCounter(true);
              }
            }}>
            <EvilIcons name={'minus'} size={32} />
          </Pressable>

          {/* count */}
          <Text style={styles.adultCount}>{childrenCount}</Text>
          {/* + Button */}

          <Pressable onPress={() => childrenHandleCounter(false)}>
            <EvilIcons name={'plus'} size={32} />
          </Pressable>
        </View>
      </View>

      <View style={styles.row}>
        {/* Title */}
        <View style={styles.title}>
          <Text style={styles.title1}> Infants</Text>
          <Text style={styles.description}> Under 2</Text>
        </View>

        {/* Buttons with value */}
        <View style={styles.buttonCount}>
          {/* - Button */}
          <Pressable
            style={styles.minusButton}
            onPress={() => {
              if (infantsCount >= 1) {
                infantshandleCounter(true);
              }
            }}>
            <EvilIcons name={'minus'} size={32} />
          </Pressable>

          {/* count */}
          <Text style={styles.adultCount}>{infantsCount}</Text>
          {/* + Button */}

          <Pressable onPress={() => infantshandleCounter(false)}>
            <EvilIcons name={'plus'} size={32} />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default GuestScreen;
