import React,{Component} from 'react';

import '../../../styles/Forms/inputTypeStandard.css';

const InputStandart = props =>(
        props.authorization === true ? 
        <input
            placeholder={props.placeholder}
            min={props.minimunvalue}
            max={props.maximunvalue}
            type={props.type}
            required
        /> 
        :
        <input
            placeholder={props.placeholder}
            min={props.minimunvalue}
            max={props.maximunvalue}
            type={props.type}
        />
)

export default InputStandart;
//