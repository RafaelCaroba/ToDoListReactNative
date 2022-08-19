import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import TodoList from './components/TodoList';
import Form from './components/Form'
import { TodoServices } from './Services/TodoServices';
import React from 'react';

export default class App extends React.Component {

 state={
    list:[]
}
 
async componentDidMount(){
    const list = await TodoServices.list();
    this.setState(list);
  } 
  
add = async (text) =>{
  const newItem = await TodoServices.create({text})
  const list = [...this.state.list, newItem]
  this.setState({list})
}

remove = async (item) =>{
  await TodoServices.remove(item.id)
  const list = this.state.list.filter(itemList => itemList.id !== item.id)
  this.setState({list})

}

render(){
  const{state} = this
  return (
    <View style={this.styles.container}>
      <Form onAdd={this.add}/>
      <TodoList list={state.list} onRemove={this.remove}/>
      <StatusBar style='auto'/>
    </View>
  );
}

styles = StyleSheet.create({
  container: {
    
  },
})}
