import React from 'react'
import ButtonStandart from '../../atoms/ButtonStandart'
import ButtonOffFocus from '../../atoms/ButtonOffFocus'
import TitleStandart from '../../atoms/TitleStandart'
import '../../../styles/Forms/formStandart.css'

const Choice = props => (
    <form onSubmit={props.handleSubmit}>
        <div>
            <TitleStandart title="I'm a" />
            <ButtonOffFocus title= "Donator" onClick={() => props.onClick("donator")}/>
            <TitleStandart title="OR" />
            <ButtonOffFocus title= "ONG" onClick={() => props.onClick("ong")}/>
        </div>
    </form>
)

export default Choice;