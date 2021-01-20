import React from 'react';
import {submit} from 'redux-form'
import {connect} from 'react-redux'

const SubmitButton=({dispatch})=>(
    <button type="submit" onClick={()=>dispatch(submit('contact'))}>submit</button>
)

export default connect()(SubmitButton);

// cosnt s=connect();
// s(submitButton);
// export s