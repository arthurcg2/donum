import React from 'react';
import InputStandart from '../../../atoms/InputStandart'
import ButtonStandart from '../../../atoms/ButtonStandart'
import TitleStandart from '../../../atoms/TitleStandart'
import '../../../../styles/Forms/formStandart.css'

const Form1 = props => (
    <form onSubmit={props.handleSubmit} onClick={() => setStep(2)} 
    onChange={(e, v) => setValue(e, v)} name={name} email={email} pass={pass}>
        <div>
            <TitleStandart title="Login" />
            <InputStandart
                placeholder='Email'
                type='email'
                authorization={true}
                onChange={(e) => set(e)}
            />
            <InputStandart
                placeholder='Password'
                minimunvalue={6}
                type='password'
                authorization={true}
                onChange={(e) => set(e)}
            />
        </div>
        <ButtonStandart title="Continue"onClick={() => props.onClick()}/>
    </form>
)

export default Form1;