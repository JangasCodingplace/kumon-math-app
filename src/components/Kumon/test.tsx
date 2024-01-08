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
     {question: '2 + 2', answer: 4},
     {question: '44 - 2', answer: 42},
     {question: ' 1 + 1', answer: 2},
     {question: '25 + 3', answer: 28},
     {question: '3 - 2', answer: 1},
];

const Statistic = () => {
    const [userAnswers, setUserAnswers] =
    useState<number[]>(new
        Array(mathProblems.length).fill(0));
        const [results, setResults] =
        useState<string[]>(new
            Array(mathProblems.length).fill(''));

        const checkAnswers =  () => {
            const newResults: string[] = [];
            for (let i = 0; i<
                mathProblems.length; i++) {
                    if (userAnswers[i] ===
                    mathProblems[i].answer) {
                        newResults.push('Richtig!');
                        
                    } else {
                        newResults.push(`Falsch. Die richtige Antwort ist ${mathProblems[i].answer}.`);

                    }
                }
                setResults(newResults)
                Keyboard.dismiss();
        };

        return (
            <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ?
        'padding': 'height'}
        style={styles.container}
        >
            <View style={styles.inner}>
            {mathProblems.map((problem, index) =>
(
    <View key={index}
    style={styles.problemContainer}>
        <Text>{problem.question}</Text>
        <TextInput
        style={styles.input}
        keyboardType="numeric"
        onChangeText={(text) => {
            const newAnswers = 
            [... userAnswers];
            newAnswers[index] = 
            parseInt(text, 10) || 0;
            setUserAnswers(newAnswers);
        }}
        />
        <Text>{results[index]}</Text>
      </View>
))}
<Button title="Antworten überprüfen"
onPress={checkAnswers} />
</View>
</KeyboardAvoidingView>
);
    };

    const styles = StyleSheet.create({
        container: {
            flex:1
        },
           inner: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 20
        },
        problemContainer: {
            marginBottom: 10,
        },
        input: {
            borderWidth: 1,
            borderColor: '#ccc',
            padding: 10,
            marginTop: 5,
        },
    });
    export default Statistic ;
