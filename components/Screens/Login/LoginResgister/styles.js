import {StyleSheet} from 'react-native';

const bgColor5 = '#BF1A1A';

const styles = StyleSheet.create({
  bgImg: {
    flex: 1,
    justifyContent: 'center',
  },
  container0: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  container1: {
    alignItems: 'center',
  },
  inputsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  container2: {
    alignItems: 'center',
    margin: 20,
    marginBottom: 30,
  },
  title: {
    color: 'white',
    fontSize: 40,
    padding: 25,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  tx1: {
    color: 'white',
    fontSize: 20,
    marginBottom: 20,
  },
  tx2: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
  },
  input1: {
    backgroundColor: 'white',
    width: 140,
    borderRadius: 12,
    fontSize: 15,
    textAlign: 'center',
  },
  emailInputContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    display: 'flex',
  },
  emailInput: {
    backgroundColor: 'white',
    borderRadius: 12,
    width: 300,
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 35,
  },
  btns: {
    padding: 20,
    alignItems: 'center',
  },
  touchLoged: {
    backgroundColor: bgColor5,
    height: 50,
    width: 120,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  txTouch: {
    color: 'white',
    fontSize: 20,
  },
  inputPassWordView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 15,
    marginBottom: '10%',
  },
  showBtn: {
    marginLeft: '70%',
  },
});

export default styles;
