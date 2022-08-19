import react, {Component} from "react";
import { Button, Text, View } from "react-native-web";
import { FlatList } from "react-native-web";

class TodoList extends Component{

    // propriedade estática que simula uma lista
    static defaultProps ={
        list:[],

        onRemove: () => {

        }
    }

    // função que trata cada linha da lista
    handleRow = ({item, index}) =>{

        return(
            <View style={{flexDirection: 'row', margin: 5}}>
                <Text style={{flex: 1}}>
                    {this.formatListNumber(index)} - {item.text}
                </Text>
                <Button style={{width: 30}} 
                title="X" color="#000" 
                onPress = {() => this.props.onRemove(item)}/>
            </View>
        )

    }

    // formatador de numeros
    formatListNumber(number){
        const digits = 2

        return('0'.repeat(digits) + (number + 1)).slice(-digits)
    }

    render(){

        // propriedade que retorna o item dentro da lista
        const{props} = this;

        // extrator do id da lista a partir da posição dele mesmo
        const keyExtractor = item => item.id;
        return(

            <View>
                <FlatList
                    data={props.list}
                    keyExtractor={keyExtractor}
                    renderItem={this.handleRow}>
                </FlatList>
            </View>

        )
    }
}

export default TodoList;