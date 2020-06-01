import React from 'react';
import InputStandart from '../../../../atoms/InputStandart'
import ButtonStandart from '../../../../atoms/ButtonStandart'
import {PickerCountry, PickerState, PickerCity} from '../../../../atoms/Picker'
import TitleStandart from '../../../../atoms/TitleStandart'
import AvatarFileInput from '../../../../atoms/FileInput'
import '../../../../../styles/Forms/formStandart.css'

export const Form1 = props => (
    <form onSubmit={props.handleSubmit}>
        <div>
            <TitleStandart title="Register" />
            <InputStandart
                placeholder='Name'
                type='email'
                authorization={true}
            />
            <InputStandart
                placeholder='Email'
                type='email'
                authorization={true}
            />
            <InputStandart
                placeholder='Password'
                minimunvalue={6}
                type='password'
                authorization={true}
            />
            <InputStandart
                placeholder='Confirm password'
                minimunvalue={6}
                type='password'
                authorization={true}
            />
        </div>
        <ButtonStandart title="Continue" onClick={() => props.onClick()}/>
    </form>
);

export const FormOng2 = props => (
    <form onSubmit={props.handleSubmit}>
        <div>
            <TitleStandart title="Register" />
            <PickerCountry />
            <PickerState />
            <PickerCity />
            <InputStandart
                placeholder='Neighborhood'
                minimunvalue={2}
                type='text'
                authorization={true}
                onChange={(e) => props.onChange("name",e)}
            />
            <InputStandart
                placeholder='Street'
                minimunvalue={2}
                type='text'
                authorization={true}
                onChange={(e) => props.onChange("name",e)}
            />
            <InputStandart
                placeholder='Number'
                minimunvalue={1}
                type='number'
                authorization={true}
                onChange={(e) => props.onChange("name",e)}
            />
            
        </div>
        <ButtonStandart title="Continue" onClick={() => props.onClick()}/>
    </form>
);

export const FormOng3 = props => (
    <form onSubmit={props.handleSubmit}>
        <div>
            <TitleStandart title="Register" />
            <InputStandart
                placeholder='Main Contact'
                minimunvalue={6}
                type='number'
                authorization={true}
                onChange={(e) => props.onChange("name",e)}
            />
        </div>
        <ButtonStandart title="Continue" onClick={() => props.onClick()}/>
    </form>
);

export const FormOng4 = props => (
    <form onSubmit={props.handleSubmit}>
        <div>
        <TitleStandart title="Register" />
        <InputStandart
                placeholder='ONG Description'
                minimunvalue={10}
                type='text'
                authorization={true}
                onChange={(e) => props.onChange("name",e)}
            />
            <AvatarFileInput />
        </div>
        <ButtonStandart title="Continue" onClick={() => props.onClick()}/>
    </form>
);