import React, { useRef, useState } from 'react';
import { Button, Text, SafeAreaView, StyleSheet, useWindowDimensions, Alert, View} from 'react-native';
import { Canvas, CanvasRef } from '@benjeau/react-native-draw';
import { GeneratedSimpleCalcTask } from '../Kumon/GenericTask';
import { Ionicons } from '@expo/vector-icons';
import { Buffer } from 'buffer';
import axios from 'axios';
import { Image } from 'react-native';
import Svg, { G, Path } from 'react-native-svg';


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
  const [bytes,setbytes]=useState([])
  
  const time=9
  const timelimit=11
  const righttasks=6
  const tasklimit=9

  // version1
  const baseUrl = 'https://google.com';
 
  // axios.get(baseUrl).then((response) => {
  //   console.log(response.data);
  // });






  const svgtobas64=(svgXml:string)=>{
    const base64 =Buffer.from(svgXml).toString("base64")

    axios.post("http://46.101.198.162:8000/process-task",{
      "user": "string",
      "base64_image": base64,
      "task": { simpleTask : "string",
                latexTask : "string",
                simpleSolution : "string",
                latexSolution : "string",
                version :"1,2,3,4"}
    }).then(response=>{
      console.log(response.data)

    })
    return base64
  }
  axios.get("http://46.101.198.162:8000/get-tasks/string").then(response=>{
        console.log(response.data)
  })
  // axios.get("http://46.101.198.162:8000/get-tasks/string").then(response=>{
  //   console.log(response.data)
  
  // })
  // axios.get("http://46.101.198.162:8000/get-tasks/{$USERNAME}")

  


  



  function checksolution(input:string,version:number,solution:number){
   console.log(input.replace("&#x5c", ""))
    input=input.replace("&#x5c", "")
    var inputnum=36/12
    
    
    
    
    if(version===1&&inputnum===solution){
      console.log("right solution")
      return
    }else if(version===2&& Number(inputnum)==solution&&checkslach(`inputnum`)){
      console.log("right soulution, no devion")
      return
    }else if(version===3&& Number(inputnum)==solution){
      console.log("the input is correct")
      return
    }else{
      console.log("no")
    }
    function checkslach(input:string){
      
      var inputarrey=input.split("")
      for(var i=0;i<inputarrey.length;i++){
        if(inputarrey[i]=="/"){
          return false
        }
      }
      return true
    }
  }
  checksolution("\frac { 36 } { 12 } = \frac { 18 } { 6 }",2,3/1)
  
  const newTask= ()=>{
    setTaskcount(taskcount+1)
    console.log(canvasRef.current?.getSvg());
    const svgXml = canvasRef.current?.getSvg();



    // console.log(svgXml)
    if (svgXml){
      svgtobas64(svgXml)
    }


    // console.log(taskcount)
    if(taskcount>=10){
      // console.log(tasks)
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
    settasks([...tasks , task])
    handleClear()
    setTask(task)
    console.log(task)

  }

          function checkcheck(){
            const jsonString = '[{"ai_response": {"latex_normal": "2 + 2 = 4", "type": "mathpix"}, "task": {"latexSolution": "4", "latexTask": "2 + 2", "simpleSolution": "4", "version": "1,2,3,4"}, "user": "string"}, {"ai_response": {"latex_normal": "44 - 2 = 2", "type": "mathpix"}, "task": {"latexSolution": "42", "latexTask": "44-2", "simpleSolution": "42", "version": "1,2,3,4"}, "user": "string"}, {"ai_response": {"latex_normal": "2", "type": "mathpix"}, "task": {"latexSolution": "2", "latexTask": "1+1", "simpleSolution": "2", "version": "1,2,3,4"}, "user": "string"}, {"ai_response": {"latex_normal": "2", "type": "mathpix"}, "task": {"latexSolution": "1", "latexTask": "3 - 2", "simpleSolution": "1", "version": "1,2,3,4"}, "user": "string"}]';
            const data = JSON.parse(jsonString);

            // Extract the values of simpleSolution and latex_normal
            const simpleSolutions = [];
            const latexNormals = [];
            const latexTask = [];
            const version = [];
            for (const item of data) {
              simpleSolutions.push(item.task.simpleSolution);
              version.push(item.task.version);
              latexTask.push(item.task.latexTask);
              latexNormals.push(item.ai_response.latex_normal);
            }

            // Print the extracted values
            console.log('simpleSolution:', simpleSolutions);
            console.log('latex_normallatex:', latexNormals);
            
            const result=[]

            for(var i=0;i<simpleSolutions.length;i++)
              if(simpleSolutions[i]===latexNormals[i]){
                result.push({
                  task:latexTask[i],
                  solution:simpleSolutions[i],
                  answer:latexNormals[i],
                  math:true,
                  version:version[i]
                })
              }else{
                //calculate if everyrhing is right
                var steps=latexNormals[i].split("=")
                if(steps.length>=1){
                  //if somthing is false
                  var solution=true
                  for(var o=0;o<=steps.length-1;o++){
                    if(eval(steps[o])!=eval(simpleSolutions[i])){
                      solution=false
                    }
                  }
               
                if(solution===false){
                  //show that
                  result.push({
                    task:latexTask[i],
                    solution:simpleSolutions[i],
                    answer:latexNormals[i],
                    math:false,
                    version:version[i]
                  })
                }else{
                  result.push({
                    task:latexTask[i],
                    solution:simpleSolutions[i],
                    answer:latexNormals[i],
                    math:true,
                    version:version[i]
                  })
                }
                }

              }
              console.log("===============================================================================")
              console.log(result)
              console.log("===============================================================================")

              return result

            }
            checkcheck()


  if(taskcount===0){
    newTask()
  }
  if(task==null) return <></>
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
