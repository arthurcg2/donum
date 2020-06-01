import React from 'react'
import TitleStandart from '../../../atoms/TitleStandart'
import ButtonStandart from '../../../atoms/ButtonStandart'
import ButtonOffFocus from '../../../atoms/ButtonOffFocus'
import '../../../../styles/stylePrincipal.css'

const ScreenPhone = () => (
    <div id="screen-phone">
        <TitleStandart title="Register Now" id="title-box-log"/>
        <ButtonStandart title="Register"/>  
        <TitleStandart title="or"/>
        <ButtonOffFocus title="Login" />
    </div>
);

export default ScreenPhone;