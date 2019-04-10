import React from 'react'
import './styles/style.css'

const link = <a href='index.html'>some link </a>;

function Sidebar() {
    return( 
        <div>		
            <nav>
                {link}
				{link}
				{link}
			</nav>
        </div>
    )
}

export default Sidebar