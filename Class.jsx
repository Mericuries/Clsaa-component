import React from 'react';
// import axios from 'axios';

class  Placeholder extends React.Component{

    constructor(){
        super()
        this.state = {
            todos:[]
        }
    //   this.todoTitleAlert = this.bind(this.todoTitleAlert)  ishtete albay koydum

    }


    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/todos").then(data =>{
            this.setState({todos:data.data})
        })

    }

    render(){
        return(
            <div className = "App">
                {this.state.todos.map(item =>{
                    return <div key = {item.id} onClick = { () => this.todoTitleAlert(item.id)} className = "todo"><h4>{item.id}</h4>{item.title}</div>
                })}

            </div>
        )
    }
    }


export default Placeholder;