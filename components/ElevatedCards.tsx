import
 { View,
   Text, 
   StyleSheet,
   ScrollView, 
   Image,
   TouchableOpacity,
   Linking,
   Dimensions
} 
 from 'react-native'
import React from 'react'

const ElevatedCards = () => {
    const screenWidth=Dimensions.get("window").width;
  return (
    <View>
        <Text style={[styles.headingText,styles.textColorWhite]}>
           Movies <Text style={styles.textColorPink}>(Elevated Cards)</Text>
        </Text>
         <ScrollView style={{height:120}} horizontal>
           <View style={[styles.card,styles.boxYellow,styles.boxElevated]}>
            <Text style={{fontSize:50}}>🤷‍♀️
            </Text>
           </View>
           <View style={[styles.card,styles.boxPink,styles.boxElevated]}>
            <Text style={{fontSize:50}}>😶‍🌫️</Text>
           </View>
           <View style={[styles.card,styles.boxBlue,styles.boxElevated]}>
            <Text style={{fontSize:50}}>😎</Text>
           </View>
           <View style={[styles.card,styles.boxWhite,styles.boxElevated]}>
            <Text style={{fontSize:50}}>🤡</Text>
           </View>
        </ScrollView>
    </View>
  )
}

const styles=StyleSheet.create(
    {
        headingText:{
            fontSize: 25,
            fontWeight: 'bold',
            fontStyle:'italic',
            padding: 8,
          },
          boxElevated:{
           shadowOffset:{
            width:100,
            height:100
           },
           shadowOpacity:0, //only 0.0 to 1.0
           shadowColor:'#FFFFFF',
           shadowRadius:4,
           elevation:10
          },
        textColorWhite:{
            color:'#FFFFFF'
        },
        card:{
         height:100,
         width:100,
         justifyContent:'center',
         alignItems:'center',
         borderRadius:8,
         margin:14
        },
        textColorPink:{
            color:'#FF00E6'
        },
        boxWhite:{
        backgroundColor:'white'
        },
        boxBlue:{
            backgroundColor:'#87CEEB'
        },
        boxYellow:{
           backgroundColor:'#FFD700'
        },
        boxPink:{
            backgroundColor:'#FF00FF'
        }
    }
);
export default ElevatedCards