import {StyleSheet} from 'react-native';

import {bgColor1, bgColor3, bgColor5} from '../../../../utils/GlobalStyles';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
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
    height: '65%',
    width: '100%',
    margin: 20,
  },
  title: {
    color: bgColor3,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    position: 'absolute',
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
    fontSize: 20,
    margin: 10,
  },
  tx3: {
    color: 'white',
    fontSize: 13,
    marginTop: 5,
  },
  tx4: {
    color: bgColor3,
    fontSize: 15,
    fontWeight: 'bold',
  },
  title2: {
    fontSize: 13,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
    textAlign: 'center',
    width: '60%',
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
  container4: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  btn: {
    backgroundColor: bgColor5,
    height: 50,
    width: 50,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '80%',
  },
  trashIcon: {
    color: bgColor3,
  },
  container5: {
    height: 50,
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
  },
  container6: {
    width: '55%',
  },
  tx6: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  tx7: {
    color: bgColor3,
    fontSize: 20,
    textAlign: 'right',
    marginRight: 7,
    fontWeight: 'bold',
  },
  container7: {
    width: '45%',
    justifyContent: 'center',
  },
  tx8: {
    fontSize: 20,
    margin: 5,
    color: 'white',
  },
  deleteBtn: {
    marginRight: 10,
  },
});

export default styles;
