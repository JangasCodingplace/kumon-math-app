import React, { useRef, useState } from 'react';
import { Button, Text, SafeAreaView, StyleSheet, useWindowDimensions, Alert, View} from 'react-native';
import { Canvas, CanvasRef } from '@benjeau/react-native-draw';
import { GeneratedSimpleCalcTask } from '../Kumon/GenericTask';
import { Ionicons } from '@expo/vector-icons';
import { State } from 'react-native-gesture-handler';

interface HandWritingComponentProps {
  taskGenerator: typeof GeneratedSimpleCalcTask
}



export default ({taskGenerator}: HandWritingComponentProps) => {
  const canvasRef = useRef<CanvasRef>(null);
  const windowDimensions = useWindowDimensions();
  const canvasHeight = Math.max(windowDimensions.height - 300, 0); // 200 ist ein Beispielwert

  const handleUndo = () => {
    canvasRef.current?.undo();
  };

  const handleClear = () => {
    canvasRef.current?.clear();
  };
 
  const [task,setTask]=useState<GeneratedSimpleCalcTask|null>(null)
  const [taskcount,setTaskcount]=useState(0)
  const [tasks,settasks]=useState<GeneratedSimpleCalcTask[]>([])
  
  const time=9
  const timelimit=11
  const righttasks=6
  const tasklimit=9
  
  
  const newTask= ()=>{
    setTaskcount(taskcount+1)
    
    console.log(taskcount)
    if(taskcount>=10){
      console.log(tasks)
      if(righttasks>=tasklimit&&time<=timelimit){
        Alert.alert("Super! Du bist Fertig für heute",
         "Nicht nur deine Zeit war fenomenal, auch deine Ergebnisse sind Toll! Level Up")
        setTaskcount(0)
      }else if (righttasks<=tasklimit&&time<=timelimit){
        Alert.alert("Super! Du bist Fertig für heute", "Deine Zeit war fenomenal, jetzt must du nur noch an deinen Erebnissen Arbeiten.")
        setTaskcount(0)
      }else if (righttasks>=tasklimit&&time>timelimit){
        Alert.alert("Super! Du bist Fertig für heute", "Deine Ergebnisse sind Toll, jetzt must du nur noch an deiner Zeit Arbeiten.")
        setTaskcount(0)
      }else if (righttasks<=tasklimit&&time>timelimit){
        Alert.alert("Super! Du bist Fertig für heute", "Deine Zeit war fenomenal, jetzt must du nur noch an deinen Erebnissen Arbeiten.")
        setTaskcount(0)
      }
      
    }
    const task=taskGenerator.generate();
    settasks([...tasks, task])
    handleClear()
    setTask(task)
  }
  if(taskcount===0){
    newTask()
  }
  if(task==null) return <> </>

  return (
    <SafeAreaView style={styles.container}>
      <View style= {styles.topbtnbox}>
        <Text style={styles. tasktext}>{task.show()}</Text>
        <Text style={styles.topbtn} onPress={handleUndo}><Ionicons name={'chevron-back-circle-sharp' } size={50} color={"blue"}/></Text>
        <Text style={styles.topbtn} onPress={handleClear}><Ionicons name={'trash' } size={50} color={"blue"}/></Text>
      </View>
      <Canvas
        ref={canvasRef}
        height={canvasHeight}
      />
      <Button title='Next Task' onPress={newTask}/>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  topbtnbox:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"flex-end",
  },
  topbtn:{
    display:"flex",
    color:"#fff",
    width:50,
    margin:3,
    height:50,
  },
  container: {
    flex: 1,
    backgroundColor: 'white', // Hintergrundfarbe nach Wunsch
  },
  scrollView: {
    marginHorizontal: 0,
  },
  tasktext: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 10,
    flex:1,
  },
  canvas: {
    flex: 1,
    // Weitere Stile nach Bedarf
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
});
