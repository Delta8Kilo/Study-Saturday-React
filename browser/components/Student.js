import React from 'react'
import Students from './Students'

const Student = props => {
    return (
        <div id='student'> 
            <ul>
                <il>{props.name}</il>
            </ul>
        </div>
    )
}

export default Student