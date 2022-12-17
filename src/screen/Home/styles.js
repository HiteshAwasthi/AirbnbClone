import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 500,
    resizeMode: 'cover',
    justifyContent: 'center',
    position: 'absolute',
  },
  title: {
    fontSize: 80,
    fontWeight: 'bold',
    width: '70%',
    marginLeft: 25,
    color: 'white',
    marginTop: 120,
  },
  homeBtn: {
    width: 200,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    marginLeft: 25,
    marginTop: 25,
  },
  homeBtnText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  searchBar: {
    width: '80%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 21,
    borderColor: 'black',
    flexDirection: 'row',
    position: 'absolute',
    top: 10,
    left: '12%',
    // zIndex: 100,
  },
  searchBarText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
});
export default styles;
