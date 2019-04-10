import React from 'react'
import './styles/style.css'
import ImgFront from './LibraryElem'
import ViewElements from './ViewBut'

export default function Main() {
    return(
        <div className='mainBox'>
            <ViewElements />
            <div id='front' className='img-front-wrapper'>
                <ImgFront />
                <ImgFront />
                <ImgFront />
                <ImgFront />
                <ImgFront />
                <ImgFront />
            </div>
        </div>
    )
}