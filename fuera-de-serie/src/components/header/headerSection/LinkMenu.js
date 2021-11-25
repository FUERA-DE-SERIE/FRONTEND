import React from 'react'
import { Link } from "react-router-dom";
import '../header.css'

const LinkMenu = ({ nombrelink }) => {
    return (
        <Link className="link-menu"  to={`/${ nombrelink }`}>{ nombrelink }</Link>
    )
}

export default LinkMenu
