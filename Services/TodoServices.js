import { ApiServices } from "./ApiServices";

const endpoint = 'todoList';

export const TodoServices ={

    list(){
        return ApiServices.get(endpoint);
    },

    create(item){

        return ApiServices.post(endpoint, item)
    }, 

    remove(id){
        return ApiServices.delete(endpoint, id)
    }

}