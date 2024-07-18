import React from 'react'
import { StyleSheet, View ,Text,Image, TouchableOpacity,Linking} from 'react-native'

 const ActionCards = () => {
   const urlOpen=(link:string)=>{
    Linking.openURL(link);
   }
  return (
    <View style={styles.sectionMargin}>
      {/*Section Head*/}
      <View><Text style={[styles.sectionHead,styles.colorPink]}>Action  <Text style={styles.colorWhite}>Cards</Text></Text></View>
      {/* Container  Height and Width will be defined here*/}
      <View style={styles.cardSize}>
        <View style={{alignItems:'center',height:40,justifyContent:'center'}}><Text style={styles.cardHead}>What's new in React Native ?</Text></View>
        <View > 
         <Image  style={styles.imageSize} source={require('../assets/cartoons/react.jpg')}/>
        </View>
       <View style={styles.body}><Text style={styles.bodyText}>React Native brings the best parts of developing with React to native development. It's a best-in-class JavaScript library for building user interfaces.</Text></View>
       <View style={styles.footer}>
        <TouchableOpacity onPress={()=>{urlOpen('https://reactnative.dev/')}}>
          <Text  style={styles.button} >
           Read More
          </Text>
        </TouchableOpacity>     
        <TouchableOpacity onPress={()=>{urlOpen('https://www.instagram.com/arhambashir336/')}}>
        <Text style={styles.button}>
          Follow me
        </Text>
        </TouchableOpacity>
        </View>
        
      </View>
    </View>
  )
}
//<Image style={styles.card} source={require('../assets/cartoons/hotel.jpg')}/>
const styles=StyleSheet.create({
  sectionMargin:{
   marginHorizontal:8
  },
  sectionHead:{
    fontSize:24,
    fontWeight:'bold',
    fontStyle:'italic'
  },
  cardHead:{
    color:'#4C4B4B',
    fontSize:16,
    fontWeight:'bold'
  },
  colorWhite:{
    color:'white',
  },
  colorPink:{
     color:'#FF00E6'
  },
  cardSize:{
    height:400,
    width:350,
    backgroundColor:'orange',
    marginHorizontal:8,
    borderRadius:16,
    marginVertical:8
  },
  imageSize:{
    width:350,
    height:240
  },
  body:{
  marginHorizontal:8,
  },
  bodyText:{
   fontWeight:'bold',
   fontSize:14
  },
  footer:{
    flexDirection:'row',
    alignContent:'center',
    justifyContent:'space-evenly',
    marginTop:8
  },
  button:{
    fontSize:16,
    fontWeight:'bold'
  }
})

export default ActionCards
