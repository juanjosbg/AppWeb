import React, { useState } from 'react'
import styled from 'styled-components'
import AppProfile from './AppProfile'
import Cards from './Cards'


function contenido() {

    return (
        <ContentContainer>
            <div>
                <h2>Space <span>Maker Lab</span></h2>
            </div>


            <div className='Cards'>
                <Cards />
            </div>

            <div className="SectPerfil">
                <AppProfile />
            </div>

        </ContentContainer>
    )
}

export default contenido

const ContentContainer = styled.div`
    h2{
        margin-top: 6vh;
        font-weight: 400;
        color: #de1d25;
        text-align: center;
        span{
            font-weight: bold;
        }
    }
`