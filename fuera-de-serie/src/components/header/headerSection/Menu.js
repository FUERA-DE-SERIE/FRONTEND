import React from 'react'
import LinkMenu from './LinkMenu'
import '../header.css'

const Menu = ({ nombreslinks }) => {
    return (
        <ul className = "menu">
            {nombreslinks.map((nombrelink) => (
                <LinkMenu nombrelink={nombrelink} />
            ))}

        </ul>
    )
}

export default Menu
