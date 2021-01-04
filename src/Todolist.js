import React, { Component } from 'react'
import Taskform from "./form";
import Todo from './Todo'
import { v4 as uuid } from 'uuid';
export default class Todolist extends Component {
    constructor(props){
        super(props);
        this.state={todos:[]};
        this.createTodo=this.createTodo.bind(this)
        this.remove=this.remove.bind(this)
    }
    createTodo(recvdTask){
        const newTask={...recvdTask, id:uuid(), finished:false}
        this.setState({todos:[...this.state.todos,newTask]});
    }
    remove(id){
        console.log(id)
        this.setState({
            todos:this.state.todos.filter(t => t.id!==id)
        })
    }
    update(id,t){
        this.remove(id)
        const newTask={...t, id:id, finished:false}
        this.setState({todos:[...this.state.todos,newTask]});
    }
    render() {
        const todos=this.state.todos.map(task => <Todo  id={task.id} key={task.id} todo={task.todo} remove={this.remove}/>)
        return (
            <div>
                <Taskform create={this.createTodo}/>
                {todos}
            </div>
        )
    }
}
