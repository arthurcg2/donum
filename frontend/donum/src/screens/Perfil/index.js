import React from 'react'
import ScreenTemplate from '../../components/template/screenTemplate'
import TopSideMenu from '../../components/organims/TopSidePerfil'
import Campanha from '../../components/molecules/Campanha'

import Requests from '../../services/requests';

const Perfil = props => {
  return (
    <ScreenTemplate>
        <TopSideMenu />
        {
          Requests.get("campaign").then(campaigns => {
            Requests.get("ong").then(ongs => {
              ongs.forEach(ong => {
                if(ong.email == campaign.email)
                  campaigns.forEach(campaign => <Campanha campaign={campaign} ong={ong} />)
                })
            })
          })
        }
    </ScreenTemplate>
  )
}

export default Perfil;