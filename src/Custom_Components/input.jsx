import React from 'react'
import PropTypes from 'prop-types';


export default function InputBox(props) {
    const {children,head} = props;
    return (
        <div>
            
            {head && 
                <div>
                    <h1>{head}</h1>
                </div>
            }
             {children}
           
        </div>
    )
}

InputBox.propTypes={
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
    headingTerm: PropTypes.string,
}