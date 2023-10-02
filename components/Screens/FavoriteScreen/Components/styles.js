import {StyleSheet} from 'react-native';

import {bgColor1, bgColor3} from '../../../../utils/GlobalStyles';

const styles = StyleSheet.create({
  container1: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: bgColor1,
    marginBottom: 20,
    height: 110,
    borderRadius: 20,
    margin: '5%',
  },
  renderItem: {
    height: 110,
    width: '100%',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    flexDirection: 'row',
  },
  container2: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '31%',
    marginLeft: '2%',
  },
  photo: {
    height: '70%',
    width: '75%',
  },
  title2: {
    fontSize: 15,
    width: '80%',
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  tx3: {
    color: 'white',
    fontSize: 13,
  },
  tx4: {
    color: bgColor3,
    fontSize: 20,
    fontWeight: 'bold',
  },
  title3: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'gray',
  },
  RenderEmptyComp: {
    marginTop: '60%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
