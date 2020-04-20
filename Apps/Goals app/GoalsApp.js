import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList, Dimensions} from 'react-native';
import GoalItem from './Components/GoalItem';
import GoalInput from './Components/GoalInput';

const screen = Dimensions.get('window');

export default function GoalsApp() {
  const [courseGoals, setCourseGoals]= useState([]);
  const [isAddMode, setIsMode]= useState(false)

  const addGoalHandler= goalTitle=>{
    setCourseGoals(courseGoals=> [...courseGoals, {id:Math.random().toString(), value:goalTitle} ]);
    setIsMode(false);
  }

  const cancelGoalAdditionHandler= ()=>{
    setIsMode(false);
  }
  const removeGoalHandler = goalId=>{
    console.log('inside removegoalhandler')
    setCourseGoals(currentGoals=>{
      return currentGoals.filter((goal)=> goal.id!== goalId);
    })
  }

  return (
    <View style={styles.screen}>
      <Button title="Add new goal" onPress={()=>setIsMode(true)}></Button>
      <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCancel={cancelGoalAdditionHandler}/>
      <FlatList 
      keyExtractor={(item, index) => item.id}
      data= {courseGoals}
      renderItem={itemData=>< GoalItem id={itemData.item.id} onDelete={removeGoalHandler } title={itemData.item.value}/>}
      />
    </View>
  );
}

const styles= StyleSheet.create({
  screen:{
    padding: 50
  }
})