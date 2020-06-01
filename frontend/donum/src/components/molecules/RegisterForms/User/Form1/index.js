import React,{Component} from 'react';
import ButtonStandart from '../../../../atoms/ButtonStandart';
import {PickerCountry, PickerState, PickerCity} from '../../../../atoms/Picker'
import TitleStandart from '../../../../atoms/TitleStandart'
import '../../../../../styles/Forms/formStandart.css';

const FormUser2 = props => (
    <form onSubmit={props.handleSubmit}>
        <div>
            <TitleStandart title="Register" />
            <PickerCountry onChange={(e) => props.onChange("name",e)}/>
            <PickerState onChange={(e) => props.onChange("email",e)}/>
            <PickerCity onChange={(e) => props.onChange("pass",e)}/>
            
        </div>
        <ButtonStandart title="Continue" onClick={() => props.onClick()}/>
    </form>
);

export default FormUser2;