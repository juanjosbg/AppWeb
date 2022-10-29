import React, { useState } from 'react'
import styled from 'styled-components'
import Cards from './Cards'
import CardsContend from './Cards'

function contenido() {
    return (
        <>
            <contendPage>
                <h2>Space <span>Maker Lab</span></h2>

                <div className="contendCards">
                    <Cards></Cards>
                </div>
            </contendPage>
        </>
    )
}

export default contenido

const NavContainer = styled.div`

`