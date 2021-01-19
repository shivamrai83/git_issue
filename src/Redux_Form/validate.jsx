import React from 'react'
import { SubmissionError } from 'redux-form'

const sleep=(time)=>{
    return new Promise(resolve=>
       setTimeout(resolve,time)
    )
}

const Validate=(values)=> {
    return sleep(1).then(() => {
        // simulate server latency
        if (!['shivamrai83','princekesh'].includes(values.username)) {
          throw new SubmissionError({
            username: 'User does not exist',
            _error: 'Login failed!'
          })
        } else if (values.password !== 'thinksys@123') {
          throw new SubmissionError({
            password: 'Wrong password',
            _error: 'Login failed!'
          })
        } else {
          window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
        }
      })
    }  

export default Validate;