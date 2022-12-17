import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  image: {
    width: '100%',
    height: 220,
    borderRadius: 10,
  },
  bedroom: {
    fontSize: 19,
    color: '#5b5b5b',
    marginVertical: 7,
  },
  description: {
    fontSize: 21,
    color: 'black',
    lineHeight: 26,
  },
  price: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',

    marginVertical: 6,
  },
  oldPrice: {
    fontSize: 20,
    color: '#5b5b5b',
    marginVertical: 2,
    paddingRight: 9,
    // marginHorizontal: 10,
    textDecorationLine: 'line-through',
  },
  newPrice: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    marginVertical: 2,
    // marginHorizontal: 20,
  },
  totalPrice: {
    fontSize: 20,
    color: '#5b5b5b',
    marginVertical: 2,
    // marginHorizontal: 10,
    textDecorationLine: 'underline',
  },
});
export default styles;
