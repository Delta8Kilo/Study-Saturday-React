import React from 'react'
import Student from './Student'

const Students = (props) => {
   
    if (props.students.length === 0){
        return null;
    }
    //console.log(props.students)
    return (
        <div id='students'>
            <div> <h5>Name</h5> </div>
            <div id = 'map-over'> 
                {props.students.map(student=>(
                   <Student name = {student.fullName} key = {student.id} />
                ))}
            </div>
        </div>
    )
}






export default Students 