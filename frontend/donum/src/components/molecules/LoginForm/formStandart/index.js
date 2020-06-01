import React from 'react';
import InputStandart from '../../../atoms/InputStandart'
import ButtonStandart from '../../../atoms/ButtonStandart'
import TitleStandart from '../../../atoms/TitleStandart'
import '../../../../styles/Forms/formStandart.css'

const Form1 = props => (
    <form onSubmit={props.handleSubmit}>
        <div>
            <TitleStandart title="Login" />
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
        </div>
        <ButtonStandart title="Continue"onClick={() => props.onClick()}/>
    </form>
)

export default Form1;