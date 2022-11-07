import {StyleSheet} from 'react-native';

const bgColor1 = '#000000c0';

const styles = StyleSheet.create({
  bgImg: {
    flex: 1,
    justifyContent: 'center',
  },
  container1: {
    flex: 1,
    marginTop: 180,
  },
  title: {
    color: 'white',
    fontSize: 45,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container2: {
    flex: 2,
    alignItems: 'center',
  },
  touchables: {
    backgroundColor: bgColor1,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 12,
    marginBottom: 50,
  },
  touchableText: {
    color: 'white',
    fontSize: 20,
  },
  container3: {
    alignItems: 'center',
    padding: 20,
  },
  footer: {
    color: 'white',
  },
});

export default styles;
