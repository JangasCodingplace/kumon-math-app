import React, { useState } from 'react';
import{ View, Text, TextInput, Button, 
StyleSheet, 
Keyboard,
KeyboardAvoidingView,
Platform} from 'react-native';

interface MathProblem {
    question: string
    answer: number;
}
const mathProblems: MathProblem[] = [
     {question: '2 + 2', answer:4 },
     {question: '44 - 2', answer: 42},
     {question: ' 1 + 1', answer: 2},
     {question: '25 + 3', answer: 28},
     {question: '3 - 2', answer: 1},
    
];

const Statistic = () => (
    
   <View style={styles.container} >
    <View style={styles.inner}>
        
       {mathProblems.map(({question,answer}, index) =>
              
(
    <View key={index}
    style={styles.problemContainer}>
        <Text>{`${question} =  ${answer}` }</Text>
        <Text style={{color: answer === eval(question) ? 'green' : 'red'}}>
        {answer ===  eval(question) ? 'True' : 'False'}
       </Text>
      </View>
))}
</View>
</View>
        );

    const styles = StyleSheet.create({
        container: {
            flex:1,
        },
             inner: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 20
        },
        problemContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
             marginBottom: 20,
        },
answerContainer: {
marginLeft: 30,
},
answer: {
    fontSize: 18,
},
       
    });
    export default Statistic ;
