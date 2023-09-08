import {StyleSheet} from 'react-native';

import {bgColor1, bgColor3} from '../../../../utils/GlobalStyles';

const styles = StyleSheet.create({
  view: {
    marginTop: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tittle: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  ButtonStyle: {
    backgroundColor: bgColor3,
    height: 60,
    width: 200,
    margin: 15,
  },
  TitleBtnStyle: {
    color: bgColor1,
    fontSize: 15,
  },
});

export default styles;
