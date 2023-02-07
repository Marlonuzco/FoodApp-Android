import {StyleSheet} from 'react-native';

const bgColor1 = '#000000c0';
const bgColor3 = '#FFA200';
const bgColor4 = '#EEEEEE';
const bgColor5 = '#BF1A1A';

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  input: {
    backgroundColor: bgColor4,
    padding: 5,
    borderRadius: 12,
    fontSize: 20,
    textAlign: 'center',
    justifyContent: 'center',
    width: '95%',
    margin: 5,
    height: 40,
    color: 'black',
  },
  title: {
    textAlign: 'left',
    fontSize: 30,
    fontWeight: 'bold',
    color: bgColor3,
  },
  title2: {
    fontSize: 20,
    margin: 5,
    marginLeft: 13,
    fontWeight: 'bold',
    color: bgColor3,
    textAlign: 'left',
    marginRight: 25,
  },
  container1: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container2: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container3: {
    marginTop: 10,
    height: 50,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    backgroundColor: bgColor1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 90,
    width: 90,
    borderRadius: 20,
    margin: 10,
    padding: 2,
  },
  itemContainer2: {
    width: 100,
    height: 200,
    margin: 15,
    borderRadius: 20,
    justifyContent: 'center',
    backgroundColor: bgColor1,
    alignItems: 'center',
  },
  touchable1: {
    margin: 10,
  },
  touchable5: {
    margin: 10,
    height: 100,
    width: 135,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgItem: {
    height: 60,
    width: 70,
    borderRadius: 20,
  },
  imgItem2: {
    width: 85,
    height: 70,
    margin: 20,
  },
  itemTitle: {
    fontSize: 15,
    textAlign: 'center',
    color: 'white',
  },
  itemTitle2: {
    fontSize: 13,
    marginBottom: 5,
    textAlign: 'center',
    color: 'white',
  },
  itemview2: {
    borderRadius: 20,
    height: 110,
    width: 130,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  tx1: {
    fontSize: 20,
    margin: 10,
  },
  tx: {
    marginLeft: 200,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  img2: {
    height: 50,
    width: 80,
  },
  searchIcon: {
    color: bgColor1,
    marginLeft: -40,
  },
  touchable2: {
    marginLeft: '55%',
  },
  container4: {
    alignItems: 'center',
  },
  container5: {
    height: 100,
    width: '100%',
    borderRadius: 20,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    flexDirection: 'row',
    display: 'flex',
    backgroundColor: bgColor5,
  },
  imgDelivey: {
    height: 90,
    width: 130,
    margin: 10,
  },
  container6: {
    flexDirection: 'column',
    marginRight: 10,
  },
  tx2: {
    color: bgColor3,
    fontSize: 20,
    fontWeight: 'bold',
  },
  price: {
    color: bgColor3,
    textAlign: 'center',
    margin: 5,
    fontWeight: 'bold',
    fontSize: 13,
  },
  addbtn: {
    backgroundColor: bgColor5,
    borderRadius: 20,
    height: 25,
    width: 85,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  txAddBtn: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
  },
  tx3: {
    color: 'white',
    fontSize: 13,
  },
  tx4: {
    color: 'white',
    margin: 8,
  },
});

export default styles;
