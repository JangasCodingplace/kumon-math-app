import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Switch, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useState,useEffect } from 'react';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import axios from 'axios';

   interface StatisticsProps {
  percentages: number[];
}


function checkcheck(data:any){
  // const jsonString = '[{"ai_response": {"latex_normal": "2 + 2 = 4", "type": "mathpix"}, "task": {"latexSolution": "4", "latexTask": "2 + 2", "simpleSolution": "4", "version": "1,2,3,4"}, "user": "string"}, {"ai_response": {"latex_normal": "44 - 2 = 2", "type": "mathpix"}, "task": {"latexSolution": "42", "latexTask": "44-2", "simpleSolution": "42", "version": "1,2,3,4"}, "user": "string"}, {"ai_response": {"latex_normal": "2", "type": "mathpix"}, "task": {"latexSolution": "2", "latexTask": "1+1", "simpleSolution": "2", "version": "1,2,3,4"}, "user": "string"}, {"ai_response": {"latex_normal": "2", "type": "mathpix"}, "task": {"latexSolution": "1", "latexTask": "3 - 2", "simpleSolution": "1", "version": "1,2,3,4"}, "user": "string"}]';
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
  const result=[]
  

  for(var i=0;i<simpleSolutions.length;i++){
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

    
    console.log("===============================================================================")
    console.log(result)
    console.log("===============================================================================")
    
      // return [{"answer": "2 + 2 = 4", "math": true, "solution": "4", "task": "2 + 2", "version": "1,2,3,4"}, {"answer": "44 - 2 = 2", "math": false, "solution": "42", "task": "44-2", "version": "1,2,3,4"}, {"answer": "2", "math": true, "solution": "2", "task": "1+1", "version": "1,2,3,4"}, {"answer": "2", "math": false, "solution": "1", "task": "3 - 2", "version": "1,2,3,4"}]
  }
  }
  var fiew=""  // return result
      for(var t=0;t<result.length;t++){
        fiew=`${fiew}<Text style={startistics.${result[t].math}}>${result[t].task}=${result[t].answer} ${result[t].math}</Text>`
        
      }
      fiew=`<View>${fiew}</View>`
      console.log(fiew)
      return result
  }

const Statistic = ({ percentages } :StatisticsProps) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log(global.useridd)
    axios.get(`http://46.101.198.162:8000/get-tasks/string`)
      .then(response => {
        setData(checkcheck(response.data));
      });
  }, []);

  return (
    <View>
      {data.map(item => (
        <Text style={item.math ? startistics.true : startistics.false}>
          {item.task }={item.answer} {item.math.toString()}
        </Text>
      ))}
    </View>
  );
}
const startistics=StyleSheet.create({
  true:{
    // backgroundColor:"green",
    fontSize:20,
    color:"green",
    padding:10,
    margin:10,
    shadowOpacity:1,
    shadowColor:"green",
    // shadowOffset: {
    //   width: 0,
    //   height: 9,
    // },
    // elevation:10,
  },
  false:{
    // backgroundColor:"red",
    fontSize:20,
    color:"red",
    padding:10,
    margin:10,
  },

});

export default Statistic; 
