import React from 'react';
import ReactDom from 'react-dom';
import Axios from 'axios'
import { get } from 'http';
import Students from './Students'

class Main extends React.Component {
    constructor(){
        super()
        this.state = {
            students: []
        }
        
    }

    async componentDidMount(){
        const response = await Axios.get('./student')
        const students = response.data;
        this.setState({students})
        
    }
    
    render () {
        return (
            <div id='main'>
                <div> <h2> Students </h2></div>
                <div id='student-list'>
                    <Students students = {this.state.students}/>
                 
                </div>


            </div>
           
        )
    }
}

export default Main
