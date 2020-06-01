import React from 'react'
import ButtonStandart from '../../atoms/ButtonStandart'
import TitleStandart from '../../atoms/TitleStandart'
import TxtStandart from '../../atoms/TxtStandart'
import TxtOffFocus from '../../atoms/TxtOffFocus'
import Campanha from '../../molecules/Campanha'

const TopSidePerfil = () => (
    <div id="top-perfil">
        <div id="img-perfil">

        </div>
        <article id="txt-perfil">
        <TitleStandart title="ONG Title"/>
            <TxtOffFocus title="ONG Contact"/>
            <TxtStandart title="ONG Description" />
        </article>
        <div id="campaign">
            <ButtonStandart title="New+" onClick={alert('teste')}/>
        </div>
        <div>
        <Campanha />
        </div>

    </div>
)

export default TopSidePerfil;