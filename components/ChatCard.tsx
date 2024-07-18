import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'


const ChatCard = () => {
    const contacts=[
        {
            uid: 1,
            name: 'Arham Bashir',
            status: 'Extraordinary Teacher',
            imageUrl: 'http://surl.li/plcupn'
          },
          {
            uid: 2,
            name: 'Jane Smith',
            status: 'Camera Man',
            imageUrl:'http://surl.li/cyylxs'
          },
          {
            uid: 3,
            name: 'Michael',
            status: 'Graphic Designer',
            imageUrl:'http://surl.li/epyyye'
          },
          {
            uid: 4,
            name: 'Bob Brown',
            status: 'Web Developer',
            imageUrl:'http://surl.li/zksuah'
          }
    ];
  return (
   <View>
     <Text style={[styles.textHeading,styles.colorWhite]}>Contact <Text style={styles.colorPink}>List</Text></Text>
     <ScrollView scrollEnabled={false}>
     {contacts.map(({uid,name,status,imageUrl})=>(
      <View style={styles.cardStyle}  key={uid}>
        <Image style={styles.image} source={{uri:imageUrl}}/>
        <View style={{alignItems:'center',justifyContent:'center'}}>
        <Text style={styles.nameStyle}>{name}</Text>
        <Text style={styles.statusStyle}>{status}</Text>
        </View>
      </View>
     ))}
     </ScrollView>
   </View>
  )
}

const styles=StyleSheet.create(
  {  
    textHeading:{
      fontSize: 25,
      fontWeight: 'bold',
      fontStyle:'italic',
      padding: 8,
    },
    colorWhite:{
     color:'white'
    },
    colorPink:{ 
     color:'#FF00E6'
    },
    image: {
      height: 60,
      width: 60,
      borderRadius:30,
      marginRight:16
  },
  cardStyle:{
   marginHorizontal:16,
   flex:1,
   flexDirection:'row',
   marginBottom:20,
   backgroundColor:'#2B2B52'
  },
  nameStyle:{
    color:'white',
    fontSize:16,
    fontWeight:'bold'
  },
  statusStyle:{
    color:'white',
    fontSize:16,
    fontWeight:'bold'
  }
  }
)
export default ChatCard