import React, { Component } from 'react'

export default class Todo extends Component {
    constructor(props){
        super(props)
        this.handleRemove=this.handleRemove.bind(this)
        this.handleUpdate=this.handleUpdate.bind(this)
    }
    handleRemove(){
        this.props.remove(this.props.id)
    }
    handleUpdate(){
        this.props.update(this.props.id)
    }
    render() {
        return (
            <div>
                <p>{this.props.todo}</p>
                <button onClick>edit</button>
                <button onClick={this.handleRemove}>del</button>
            </div>
        )
    }
}
