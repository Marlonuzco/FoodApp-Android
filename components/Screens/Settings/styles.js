import {StyleSheet} from 'react-native';
const bgGray = 'rgba(218, 218, 218, 0.8)';

const styles = StyleSheet.create({
  firstView: {
    flex: 1,
    padding: 15,
  },
  renderItem: {
    paddingLeft: 10,
    marginBottom: 15,
    width: '100%',
    height: 40,
    justifyContent: 'center',
    backgroundColor: bgGray,
    borderRadius: 2,
  },
  renderItemText: {
    color: 'black',
    fontSize: 15,
    letterSpacing: 1,
  },
});

export default styles;
