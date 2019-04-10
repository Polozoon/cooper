import React from 'react'

function viewRow() {
     let element = document.getElementById('front');
     element.style.flexFlow = 'row wrap';
}

function viewColumn() {
    let element = document.getElementById('front');
    element.style.flexFlow = 'column wrap';
}

function ViewElements() {
    return(
        <div className='viewButton'>
            <button id='reviewRow' onClick={viewRow}>=</button>
            <button id='reviewColumn' onClick={viewColumn}>||</button>
        </div>
    )
}

export default ViewElements;