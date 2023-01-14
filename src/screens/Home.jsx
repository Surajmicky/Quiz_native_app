import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Ready to start</Text>
      <View style={styles.imgContainer}>
         <Image style={styles.img}  source={{uri:"https://img.freepik.com/free-vector/curiosity-brain-concept-illustration_114360-11037.jpg?w=740&t=st=1673713270~exp=1673713870~hmac=936de139c596fe44fe0bb2d5bd421aa73507a74931ac8749854cfeed5628d8d7"}}/>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Quiz')}>
        <Text style={styles.buttontext}>START QUIZ</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        top:40,
        height:'100%',
        padding:16,
        alignContent: 'center',
        alignItems: 'center',
      
        backgroundColor:"#0E6BA8",
        
    },
    header:{
        fontSize:30,
        color:'#A6E1FA'
    },
    imgContainer:{
    height:'84%',
    },
    img:{
        width:300,
        height:300,
        marginVertical:10,
        borderRadius:10,
        
    },
    button:{
        width:150,
        height:50,
        justifyContent: 'center',
        backgroundColor:'#A6E1FA',
        borderRadius:10,
        position: 'relative',
        bottom:10
    },
    buttontext:{
       
        color:'#0E6BA8',
       
        display:'flex',
        textAlign: 'center',
        alignItems: 'center',
        
    }
})