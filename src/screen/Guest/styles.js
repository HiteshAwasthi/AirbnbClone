import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  guestList: {
    position: 'relative',
  },
  row: {
    width: '100%',
    height: 80,
    margin: 5,
    borderBottomWidth: 1,

    borderColor: 'lightgrey',
    justifyContent: 'center',
    // position: 'absolute',
  },
  title: {
    marginLeft: 22,
    position: 'absolute',
  },
  title1: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#000',
  },
  description: {
    fontSize: 15,
    color: 'grey',
  },
  buttonCount: {
    marginLeft: '60%',
    flexDirection: 'row',
  },
  adultCount: {
    fontSize: 19,
    marginHorizontal: 10,
  },
});

export default styles;
