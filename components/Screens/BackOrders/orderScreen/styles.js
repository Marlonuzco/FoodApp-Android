import {StyleSheet} from 'react-native';

const bgColor1 = '#000000c0';
const bgColor3 = '#FFA200';
const bgColor5 = '#BF1A1A';

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  photo: {
    height: '75%',
    width: '100%',
  },
  container1: {
    borderRadius: 20,
    width: '90%',
    height: 120,
    backgroundColor: bgColor1,
    margin: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  container0: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollview: {
    height: '68%',
    width: '100%',
  },
  title: {
    color: bgColor3,
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 10,
  },
  container2: {
    flex: 1,
    height: '100%',
    width: '35%',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  tx2: {
    color: bgColor3,
    fontWeight: 'bold',
    fontSize: 25,
    margin: 10,
  },
  tx3: {
    color: 'white',
  },
  tx4: {
    color: bgColor3,
    fontSize: 22,
  },
  title2: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
    textAlign: 'center',
  },
  container3: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tx5: {
    color: 'white',
    fontSize: 20,
  },
});

export default styles;
