import React,{Component} from 'react';
import ButtonStandart from '../../../../atoms/ButtonStandart';
import {PickerCountry, PickerState, PickerCity} from '../../../../atoms/Picker'
import TitleStandart from '../../../../atoms/TitleStandart'
import '../../../../../styles/Forms/formStandart.css';

const FormUser2 = props => (
    <form onSubmit={props.handleSubmit}>
        <div>
            <TitleStandart title="Register" />
            <PickerCountry />
            <PickerState />
            <PickerCity />
            
        </div>
        <ButtonStandart title="Continue" onClick={() => props.onClick()}/>
    </form>
);

export default FormUser2;