import {StyleSheet} from 'react-native';

const bgColor2 = 'rgba(0, 0, 0, 0.8)';
const bgColor1 = '#000000c0';
const bgColor3 = '#FFA200';
const bgColor4 = '#EEEEEE';
const bgColor5 = '#BF1A1A';

const styles = StyleSheet.create({
  scrollview: {
    backgroundColor: 'white',
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
    color: bgColor5,
  },
  title2: {
    fontSize: 20,
    margin: 5,
    marginLeft: 13,
    fontWeight: 'bold',
    color: bgColor2,
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
    backgroundColor: bgColor5,
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
    backgroundColor: 'white',
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
    color: 'black',
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
    backgroundColor: bgColor5,
  },
  container5: {
    backgroundColor: bgColor5,
    height: 100,
    width: '100%',
    borderRadius: 20,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    flexDirection: 'row',
    display: 'flex',
  },
  imgDelivey: {
    height: 100,
    width: 140,
    margin: 10,
  },
  container6: {
    flexDirection: 'column',
    marginRight: 10,
  },
  tx2: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 13,
    color: 'white',
    margin: 3,
  },
  description2: {
    fontSize: 13,
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
    width: 90,
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
  },
  container7: {
    backgroundColor: bgColor5,
    height: 35,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  tx4: {
    color: 'white',
    margin: 8,
  },
});

export default styles;
