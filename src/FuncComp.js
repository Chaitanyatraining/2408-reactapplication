import React from 'react'

function FuncComp(props) {
    const {course, duration} = props
    console.log(props)
  return (
    <div>
        <h2>Func Comp</h2>
        <h4>Course Name: {course} and course Duration : {duration}</h4>
    </div>
  )
}

// diffing alogirthm
// reconsilitation 

export default FuncComp