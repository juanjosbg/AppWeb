// para sacar esto de una forma mas rapida -> rfce

import React, { useState } from 'react'
import styled from 'styled-components'
import BurgerButton from './BurgerButton'

function Navbar() {

    const [clicked, setCliked] = useState(false)
    const handleClik = () => {

        /* When do its true this pass to false, and when do its false pass to true */
        setCliked(!clicked)
    }

    return (
        <>
            <NavContainer>
                <h2>Navbar <span>Responsive</span></h2>

                {/* for setting true ore false as cliked */}
                <div className={`linksNav ${clicked ? 'active' : ''}`}>
                    <a onClick={handleClik} href="#">Home</a>
                    <a onClick={handleClik} href="#">Info</a>
                    <a onClick={handleClik} href="#">About</a>
                    <a onClick={handleClik} href="#">Contact</a>
                </div>

                <div className='burgger'>
                    <BurgerButton clicked={clicked} handleClik={handleClik} />
                </div>
                
                <BgDiv className={`initial ${clicked ? 'active' : ''}`}></BgDiv>
            </NavContainer>
        </>
    )
}

export default Navbar

const NavContainer = styled.nav`
    h2{
        font-weight: 400;
        color: #fff;
        span{
            font-weight: bold;
        }
    }
    padding: .4rem;
    background-color: #333;
    display:flex;
    aling-items:center;
    justify-content: space-between;

    /* ============ */

    a{
        color: #fff;
        text-decoration: none;
        margin-right: 1rem;
    }

    /* === parte del link del nav === */
    .linksNav{
        position: absolute;
        top: -700px;
        left: -2000px;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        display: flex;
        align-items: center;

        transition: all .5s ease;

        a{
            color: #fff;
            font-size: 2rem;
            display: block;
        }

        @media(min-width: 768px){
            position: initial;
            padding: 0;

            a{
                font-size: 1rem;
                color: #fff;
                display: inline;
            }
        }
    }

    .linksNav.active{
        width: 100%;
        display: block;
        position: abolute;
        margin-left: auto;
        margin-right: auto;
        top: 30%;
        left: 0;
        right: 0;
        text-align: center;

        a{
            font-size: 2rem;
            margin-top: 1rem;
            color: #fff;
        }
        
    }


    /* === parte del menu hamburgesa === */
    .burgger{
        @media(min-width: 768px){
            display:none;
        }
    }
    
`
const BgDiv = styled.div`
    z-index: -1;
    width: 100%;
    height: 100%;
    top: -1000px;
    left: -1000px;
    position: absolute; 
    background-color: #222;

    transitio: all .6s ease ;

    &.active{
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 0 0 80% 0;
    }
`