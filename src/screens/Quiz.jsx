import { StyleSheet, Text,Image, View,TouchableOpacity } from 'react-native'
import React from 'react'
import {useState,useEffect} from 'react'
const Quiz = ({navigation}) => {
    const [questions,setQuestions]=useState();
    const [currentQuestion,setCurrentQuestion]=useState('');
    const [count,setCount]=useState(0)
    const [currentOptions,setCurrentOptions]=useState([])
    useEffect(() =>{
        (async () =>{
            let data= await (await fetch('https://opentdb.com/api.php?amount=20&type=multiple&encode=url3986')).json();
           setTimeout(() =>{
            setQuestions(data.results);
            setCurrentQuestion(data.results[count].question);
            setCurrentOptions(getoptions(data.results[count]));
           },1000)
        })()
    },[])
   
    function getoptions(cq){
      let options=[cq.correct_answer,...cq.incorrect_answers];
      shuffleArray(options)
      return options;
    }
    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }

  return (
    <View style={styles.container}>
      {questions ?  (<View style={styles.box}>
        <Text style={styles.question} >Q.{count+1}  {decodeURIComponent(currentQuestion)}</Text>
        <View style={styles.answers}>
            <TouchableOpacity style={styles.options}>
                <Text style={styles.optionText}> {decodeURIComponent(currentOptions[0])}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.options}>
                <Text style={styles.optionText}> {decodeURIComponent(currentOptions[1])}</Text>
            </TouchableOpacity >
            <TouchableOpacity style={styles.options}>
                <Text style={styles.optionText}>{decodeURIComponent(currentOptions[2])}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.options}>
                <Text style={styles.optionText}>{decodeURIComponent(currentOptions[3])}</Text>
            </TouchableOpacity>
        </View>
      
      <View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Quiz')}>
        <Text style={styles.buttontext}>SKIP</Text>
      </TouchableOpacity>
      {count !==20 &&<TouchableOpacity style={styles.button} >
        <Text style={styles.buttontext}>NEXT</Text>
      </TouchableOpacity>}
      {count==20 &&<TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Result')}>
        <Text style={styles.buttontext}>END</Text>
      </TouchableOpacity>}
      
      </View>
      </View>): (<View><Image source={require('../../assets/loading.gif')}/></View>) }
    </View>
  )
}

export default Quiz

const styles = StyleSheet.create({
    container:{
        top:40,
        height:'100%',
        padding:16,
        alignContent: 'center',
        alignItems: 'center',
      
        backgroundColor:"#0E6BA8",
        
    },
    question:{
        fontSize:20,
        color:'#A6E1FA',
        marginBottom:30
    },
    options:{
        justifyContent: 'center',
        backgroundColor:'#A6E1FA',
        borderRadius:10,
        alignItems: 'center',
        marginVertical:12,
        paddingTop:10,
        paddingBottom:10,
       
    },
    optionText:{
        fontSize:16,
        color:"#0E6BA8"
    }
})