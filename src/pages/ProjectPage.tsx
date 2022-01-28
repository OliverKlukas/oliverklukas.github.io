import React from 'react';
import remi from '../asssets/remi.gif'
import galactic from '../asssets/GalacticEmpire.gif'
import frest from '../asssets/frest.mp4'

export default function ProjectPage() {
    return(
        <div>
            <p className="text-heading">Projects.</p>
            <div className="grid grid-cols-2">
                <img src={remi} alt="Remi the cooking assistant"/>
                <p>2</p>
                <p>3</p>
                <video className='videoTag' controls autoPlay muted loop>
                    <source src={frest} type='video/mp4' />
                </video>
                <img src={galactic} alt="Galactic Empire retro game"/>
                <p>6</p>
            </div>
        </div>
    )
}