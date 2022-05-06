import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 200,
  },

  //Banner
  image: {
    justifyContent: "center",
    height: 300,
  },

  //Short by
  title:{
    flexDirection: 'row',
    marginTop: 15,
  }, 
  text: {
    color: "#000000",
    fontSize: 16,
    lineHeight: 18,
    marginLeft: 20,
    textAlignVertical: "center",
  },
  iconFilter:{
    right: -160,
    justifyContent: "center"
  },

  //Items
  items: {
    justifyContent: "space-around",
    backgroundColor: "#fff",
    padding: 10,
    margin: 10,
  },
  img_container: {
    width: '100%',
    height: 200,
    borderRadius: 20,
  },
  price: {
    flexDirection:"row",
    position: "absolute",
    backgroundColor:"#fff",
    color: "#000000",
    fontSize: 18,
    fontWeight: "bold",
    padding: 10,
    margin:20,
    borderRadius:15
  },
  iconHeart: {
    right: 10,
    position: "absolute",
    backgroundColor:"red",
    padding: 10,
    margin:20,
    borderRadius:50,
  },
  rate: {
    top: 160, 
    flexDirection: "row", 
    display:"flex",
    position: "absolute", 
    backgroundColor:"#fff",
    padding: 8,
    margin:30,
    borderRadius:15
  },
  rateText: {
    color: "#000000",
    fontSize: 13,
    fontWeight: "bold",
  },
  iconStar: {
    top: 1,
  },
  
});

export default styles;
