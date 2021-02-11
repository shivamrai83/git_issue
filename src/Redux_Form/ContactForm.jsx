import React, { useEffect } from 'react'
import { Field, reduxForm } from 'redux-form'
import {useSelector} from 'react-redux'
import { submit } from 'redux-form'
import {connect} from 'react-redux'
import SubmitButton from './submitButton'
import Reset from './reset'
import "../App.css"

//Validate Component
const validate=values=>{
  const errors = {}
  if (!values.firstName) {
    errors.firstName = 'Required'
  } 
  if(!values.age){
    errors.age='Required'
  }
  if(!values.occupation){
    errors.occupation='Required'
  }
  if(!values.email){
    errors.email='Required'
  }
  if(!(values.male && values.female)){
    errors.female='Required'
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  return errors
}

//Warning Component
const warn = values => {
  const warnings = {}
  if (values.age < 19) {
    warnings.age = 'Hmm, you seem a bit young...'
  }
  return warnings
}

//Render Field Component
const renderField=({input,label,type, meta:{touched,error,warning}})=>(
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type}/>
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
)

//Main Form Component
const ContactForm = (props) => {
  const { handleSubmit, submitting, pristine, reset } = props
  const state = useSelector(state => state.form.contact)

useEffect(() => {
  const ls={ name:"Shivam",
  age:22,
  gender: "male" ,
  salary:"<10000",
  occupation:"Job",
  email:"shivamrai83@gmail.com",
}
  localStorage.setItem("default",JSON.stringify(ls));
 
}, [])  

  return (
    <div align="center">
    <form onSubmit={handleSubmit}>
      <div className="field">
      <Field name="name"  component={renderField} type="text" label="Firstname" />
      </div>
      <Field name="age" component={renderField} type="text" label="Age"/>

      <label htmlFor="gender">Gender</label><br/>
        <label htmlFor="male">Male</label>
        <Field name="gender" component={renderField} type="radio" value="male"/>
        <label htmlFor="female">Female</label>
        <Field name="gender" component={renderField} type="radio" value="female"/><br/>

        <label htmlFor="salary">Salary</label>
        <Field name="salary" component="select" type="select">
        <option value="0">select</option>
        <option value="<10000">0-10000</option>
        <option value="10000-50000">10000-50000</option>
        <option value=">500000">50000-100000</option>
        <option value=">100000 +">1 Lack +</option>
        </Field><br/><br/>

        <Field name="occupation" component={renderField} type="text" label="Occupation"/>
        <Field name="email" component={renderField} type="text" label="Email"/><br/>
      
    </form>
    
    <SubmitButton/>
    <Reset/>
    </div>
  )
}

//onsubmitting the form these values will popup

const Show=(values)=>{
  const save=window.confirm("Do u want to save this file");
  if(save){
  alert(JSON.stringify(values, null, 2));
  localStorage.setItem("form",JSON.stringify(values));
  }
}

const ls=JSON.parse(localStorage.getItem("resetFields"));

export default reduxForm({
  // a unique name for the form
  form: 'contact',
  onSubmit:Show,
  validate,
  warn,
  enableReinitialize:true,
  initialValues:JSON.parse(localStorage.getItem("default")),
})(ContactForm);                               

