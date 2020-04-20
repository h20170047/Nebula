import React, { useState } from 'react';
import { View, TextInput, Modal, Button, StyleSheet } from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredGoal) => {
        setEnteredGoal(enteredGoal);
    }

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer} >
                <TextInput placeholder="Course goal"
                    style={styles.input}
                    onChangeText={goalInputHandler}
                    value={enteredGoal}></TextInput>
                <View style={styles.sidebySide}>
                    <View style={styles.button}>
                        <Button title="CANCEL" color="red" onPress={props.onCancel} />
                    </View>
                    <View style={styles.button}>
                        <Button title="ADD" onPress={addGoalHandler}></Button>
                    </View>
                </View>
            </View >
        </Modal >
    )
}

const styles = StyleSheet.create({
    input: {
        width: '80%',
        margin: 10,
        flexDirection: 'row',
        borderColor: "black",
        borderWidth: 1,
        padding: 10
    },
    inputContainer: {
        padding: 30,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    sidebySide: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%'
    },
    button: {
        width: '40%'
    }
})

export default GoalInput;