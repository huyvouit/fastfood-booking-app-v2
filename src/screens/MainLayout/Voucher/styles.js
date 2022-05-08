import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    justifyContent: "center",
    height: 300,
  },
  
  tab: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#FE724C',
    height: 50,
  },

  tab_AllVouchers: {
    backgroundColor: '#FE724C',
    justifyContent: 'center',
    height: 40,
    width: '30%',
  },

  tab_Used: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    borderRadius: 25,
    height: 40,
    width: '30%',
  },

  tab_FoodItems_Text: {
    color: '#fff',
    textAlign: 'center',
  },

  tab_Resturents_Text: {
    color: '#FE724C',
    textAlign: 'center',
  },
  vouchers:{
    flexDirection: "column",
    marginHorizontal: 15,
    marginVertical: 15,
  },
  items:{
    flexDirection: "row",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#aaaaaa",
    width: "100%",
    borderRadius: 10,
  },
  img_vouchers:{
    backgroundColor: "#178fff",
    width: 100,
    height: 100,
    borderRadius: 10,
    marginHorizontal: 8,
    marginVertical: 8,
  },
  text_vouchers:{
    margin: 10,
  },
  text_vouchers_id:{
    fontSize: 16,
    color: "#000000",
    fontWeight: "400",
  },
  text_vouchers_per:{
    fontSize: 16,
    fontWeight: "400",
  },
  text_vouchers_date:{
    fontSize: 14,
    fontWeight: "400",
  },
});

export default styles;
