import { View, Text,ScrollView,TouchableOpacity,Image, StyleSheet} from 'react-native'
import React from 'react'

const StyleCards = () => {
  return (
    <View>
      <Text style={[styles.title,styles.textColorWhite]}>Style <Text style={styles.textColorPink}>Cards</Text></Text>
      <ScrollView horizontal pagingEnabled>
        <View style={styles.styleCard}>
            <Image style={styles.image} src={'https://rb.gy/0y9eok'}/>
            <View style={styles.bgDataGold}>
                <View style={{marginHorizontal:10}}>
                <Text style={styles.cardTitle}>Eiffel Tower</Text>
                <Text style={styles.cardLocation}>Paris, France</Text>
                <Text style={styles.cardDescp}>Built for the 1889 World's Fair, the Eiffel Tower, once the world's tallest structure, remains a breathtaking landmark and a must-see in Paris.</Text>
                </View>
            </View>

        </View>
        <View style={styles.styleCard}>
            <Image style={styles.image} src={'https://rb.gy/7lwliw'}/>
            <View style={styles.bgDataBlue}>
                <View style={{marginHorizontal:10}}>
                <Text style={styles.cardTitle}>River Corner</Text>
                <Text style={styles.cardLocation}>Mianyang, China</Text>
                <Text style={styles.cardDescp}>Walking in the river in Mianyang found this beautiful corner. The beautiful curve attracts me to take this beautiful moment.</Text>
                </View>
            </View>

        </View>
      </ScrollView>
    </View>
  )
}

const styles=StyleSheet.create(
    {
        image:{
            height:180,
            width:360,
            borderRadius:10
        },
        title:{
            fontSize: 25,
            fontWeight: 'bold',
            fontStyle:'italic',
            padding: 8,
        },
        textColorPink:{
           color:'#FF00E6'
        },
        textColorWhite:{
            color:'white'
        },
        bgDataGold:{
         height:150,
         width:360,
         backgroundColor:'gold'
        },
        bgDataBlue:{
            height:150,
            width:360,
            backgroundColor:'skyblue'
           },
        cardTitle:{
         fontSize:24,
         fontWeight:'bold',
         
        },
        cardLocation:{
            fontSize:16,
            paddingLeft:4,
            fontWeight:'bold'
        }
        ,
        styleCard:{
         marginVertical:10,
         marginHorizontal:16
        },
       cardDescp:{
        fontSize:18
       },
      

    }
)
export default StyleCards