import React from 'react'
import { Field, reduxForm } from 'redux-form'
import Validate from './validate'

const renderField=({input, label, type, meta:{touched, error}})=>(
<div>
    <label>{label}</label>
    <div>
    <input {...input} placeholder={label} type={type}/>
    {touched && error && <span>{error}</span>}
    </div>
</div>
)

const UserPass=(props)=> {
    const {handleSubmit}=props;
    const show=()=>{
        alert("done");
    }

    return (
        <div align ="center">
          <form onSubmit={handleSubmit(Validate)}>
        <Field name="username" component={renderField} type="input" label="UserName"/>
        <Field name="password" component={renderField} type="password" label="Password"/>
       <input type="submit"/>
        </form>
        </div>
    )
}

export default reduxForm({
    form:'userpass'
})(UserPass);