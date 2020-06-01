import React from 'react'
import ButtonStandart from '../../atoms/ButtonStandart'
import TitleStandart from '../../atoms/TitleStandart'
import TxtStandart from '../../atoms/TxtStandart'
import TxtOffFocus from '../../atoms/TxtOffFocus'
import '../../../styles/stylePrincipal.css'


const Campanha = ({campaign}) => (
    <div id="campanha">
        <TxtStandart title={campaign.titulo} />
        <TxtStandart title="ngo title"/>
        <TxtOffFocus title="contact" />
        <TxtStandart title={campaign.descricao} />
    </div>
)

export default Campanha