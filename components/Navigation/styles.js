import {StyleSheet} from 'react-native';

const bgColor1 = 'rgba(0, 0, 0, 0.8)';

const styles = StyleSheet.create({
  NavigatorStyle: {
    backgroundColor: 'black',
  },
  tabbar: {
    marginBottom: 10,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 12,
    position: 'absolute',
    padding: 5,
    backgroundColor: bgColor1,
  },
});

export default styles;
