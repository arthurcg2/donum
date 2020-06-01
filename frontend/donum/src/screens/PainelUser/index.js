import React from 'react'
import '../../styles/Painel/container.css'
import ScreenTemplate from '../../components/template/screenTemplate'
import txtOffFocus from '../../components/atoms/TxtOffFocus';
import txtStandart from '../../components/atoms/TxtStandart'
import Popup from 'reactjs-popup';

const Perfil = props => {
  return (
    <ScreenTemplate>
        <div className='container'>
          <img
            src='a'
          />
          <txtOffFocus
            title='Título da campanha'
          />
          <p>Contato</p>
          <txtStandart
            title='Descricao da campanha'
          />
          <txtStandart
            title={`Emergency level:1`}
          />
        </div>
    </ScreenTemplate>
  )
}

export default Perfil;