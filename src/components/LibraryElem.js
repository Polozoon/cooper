import React from 'react'
import img from './frontof.jpg'



function ImgFront() {
    return(
        <div className='library-elem'>
            <img src={img} alt='game' />
            <h1>name of the game</h1>
            <p>long description of the game</p>
        </div>
    )
}

export default ImgFront;