import { View, Text, StyleSheet, ScrollView,Image,TouchableOpacity,Linking} from 'react-native';
import React from 'react';
 const mcqueen=require('../assets/cartoons/mcqueen.jpg');
const FlatCards = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.textColorPink,styles.headingText]}>Animated <Text style={styles.colorWhite}>Movies (FlatCards)</Text></Text>
      <ScrollView horizontal={true} contentContainerStyle={styles.flatCard} pagingEnabled={true}>
        <View>
         <Image  style={styles.card} source={mcqueen}/>
          <TouchableOpacity onPress={()=>Linking.openURL('https://www.youtube.com/watch?v=2LeOH9AGJQM')}>
          <Text style={[styles.colorWhite,styles.movieName]}>Mcqueen</Text>
          </TouchableOpacity>
        </View>
        <View>
            <Image style={styles.card} source={require('../assets/cartoons/croods.jpg')} />
           <TouchableOpacity onPress={()=>Linking.openURL("https://www.youtube.com/watch?v=WvOgvFtcIAw")}>
          <Text style={[styles.colorWhite,styles.movieName]}>The Croods</Text>
          </TouchableOpacity>
         </View>
         <View>
            <Image style={styles.card} source={require('../assets/cartoons/dragon.jpg')}/>
            <TouchableOpacity onPress={()=>Linking.openURL("https://www.youtube.com/watch?v=FROZAQ_aM2w")}>
            <Text style={[styles.colorWhite,styles.movieName]}>Dragon</Text>
            </TouchableOpacity>
         </View>
         <View>
            <Image style={styles.card} source={require('../assets/cartoons/panda.jpg')}/>
            <TouchableOpacity onPress={()=>Linking.openURL("https://www.youtube.com/watch?v=_inKs4eeHiI")}>
             <Text style={[styles.colorWhite,styles.movieName]}>Panda</Text>
            </TouchableOpacity>
         </View>
         <View>
            <Image style={styles.card} source={require('../assets/cartoons/hotel.jpg')}/>
            <TouchableOpacity onPress={()=>Linking.openURL("https://www.youtube.com/watch?v=2Ioqovct5Vs")}>
                 <Text style={[styles.colorWhite,styles.movieName]}>Transelvenia </Text> 
            </TouchableOpacity>
         </View>
         <View>
         <Image  style={styles.card} source={mcqueen}/>
          <TouchableOpacity onPress={()=>Linking.openURL('https://www.youtube.com/watch?v=2LeOH9AGJQM')}>
          <Text style={[styles.colorWhite,styles.movieName]}>Mcqueen</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  headingText:{
    fontSize: 25,
    fontWeight: 'bold',
    fontStyle:'italic',
    padding: 8,
  },
  container: {
    flex: 1,
    backgroundColor: '#310E3D',
    
  },
  flatCard: {
    flexDirection: 'row',
  },
  textColorPink: {
    color: '#FF00E6',
  },
  movieName:{
    fontSize:20,
    fontWeight:'bold',
    textAlign:'center'
  },
  textbold:{
    fontWeight:'bold'
  },
  colorWhite:{
    color:'white'
  },
  cardTwo: {
    backgroundColor: '#B0E0E6',
  },
  cardThree: {
    backgroundColor: '#FFFF00',
  },
  card: {
    height: 100,
    width: 100,
    borderRadius: 8,
    margin: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default FlatCards;
