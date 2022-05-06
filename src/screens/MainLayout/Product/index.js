import React, {useEffect} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import { ImageBackground, StyleSheet, Button} from "react-native";

import {SvgXml} from 'react-native-svg';
import Icons from 'assets/icons';

import styles from './styles';

import Pizza from '../../../assets/images/Pizza.png';

const ProductScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={{height: 300}}>

      <ImageBackground source={Pizza} resizeMode="cover" style={styles.image}>
      </ImageBackground>
      
      <View style={styles.title}>
        <Text style={styles.text}>Short by: </Text>

        <Button title="Popular"></Button>

        <View style={styles.iconFilter}>
          <SvgXml
            xml={Icons.IconFilter}
            fill="#FE724C"
            width={30}
            height={30}
          />
        </View>    
      </View>

      <View style={styles.items}>
        <Image source={Pizza} style={styles.img_container}/>

        <Text style={styles.price}>
          <Text style={{color:"red"}}>$</Text>
          10.35
        </Text>

        <View style={styles.iconHeart}>
          <SvgXml
            xml={Icons.IconFavourite}
            fill="white"
            width={30}
            height={30}
          />
        </View>          
        
        <View style={styles.rate}>
          <Text style={styles.rateText}>4.5 </Text>
          <View style={styles.iconStar}>
            <SvgXml
              xml={Icons.IconStar}
              fill="yellow"
              width={16}
              height={16}
            />
          </View>
          <Text style={{color:"#9796A1"}}>  (25+)</Text>
        </View>

        <Text style={{color:"black", fontWeight:"bold", fontSize:20, marginTop:10, marginLeft:15}}>Chicken greys</Text>
        <Text style={{color:"black", marginTop:5, marginLeft: 15}}>Brown the beef better. Lean ground beef . I like to use 85% lean angus. Garlic . use fresh  chopped. Spices . chili powder, cumin, onion powder.</Text>
      </View>
      
      </ScrollView> 

    </View> 
    
  );
};

export default ProductScreen;
