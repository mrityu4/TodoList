import React, { Component } from 'react'

export default class Taskform extends Component {
    constructor(props) {
        super(props)
        this.state={todo:""};
        this.handleSubmit=this.handleSubmit.bind(this)
        this.handleChange=this.handleChange.bind(this)
    } 


    handleChange(evt){
        this.setState({
            [evt.target.name]:evt.target.value
        })
    }


    handleSubmit(evt){
        evt.preventDefault();
        this.props.create({...this.state});
        this.setState({
            todo:""
        });
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="task">Create task</label>
                    <input 
                        type="text" 
                        name="todo"
                        placeholder="New Todo"
                        value={this.state.todo}
                        id="todo"
                        onChange={this.handleChange}
                    />
                    <button>Add Todo</button>
                   
                </form>
            </div>
        )
    }
}
