import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import DnsRoundedIcon from '@mui/icons-material/DnsRounded';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenuRounded';
import PeopleIcon from '@mui/icons-material/People';
import StoreIcon from '@mui/icons-material/StoreMallDirectoryRounded';

const Sidebar = ({handleLogout}) => {
  return (
    <div className="col-2 sidebar">

      <ul className="row nav-bar">
        <li className="brand">
          {/* <!-- Sidebar - Brand --> */}
          <Link 
            className="fontCalibri-title" 
            to="/"
          >EVER ADMIN</Link>
        </li>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider my-0"/>

        {/* <!-- Nav Item - Dashboard --> */}
        <li>
          <NavLink 
            className={ ({ isActive }) => 'nav-item fontCalibri-3 ' + (isActive ? 'active' : '')}
            to="/admin/dashboard">
                <DnsRoundedIcon/> 
                <p className="nav-item-text">Dashboard</p> 
          </NavLink>
        </li>
        
        {/* <!-- Divider --> */}
        <hr className="sidebar-divider"/>

        {/* <!-- Heading --> */}
        <div className="sidebar-heading fontCalibri-4">
            MANAGEMENT
        </div>

        {/* <!-- Nav Item - Categorias --> */}
        <li>
          <NavLink 
            className={ ({ isActive }) => 'nav-item fontCalibri-3 ' + (isActive ? 'active' : '')}
            to="/admin/categorias">
                <GridViewRoundedIcon/> 
                <p className="nav-item-text">Categorias</p> 
          </NavLink>
        </li>

        {/* <!-- Nav Item - Platos --> */}
        <li>
          <NavLink 
            className={ ({ isActive }) => 'nav-item fontCalibri-3 ' + (isActive ? 'active' : '')}
            to="/admin/dishes">
                <RestaurantMenuIcon/> 
                <p className="nav-item-text">Platos</p> 
          </NavLink>
        </li>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider"/>

        {/* <!-- Heading --> */}
        <div className="sidebar-heading fontCalibri-4">
            ADMIN
        </div>

        {/* <!-- Nav Item - Usuarios --> */}
        <li>
          <NavLink 
            className={ ({ isActive }) => 'nav-item fontCalibri-3 ' + (isActive ? 'active' : '')}
            to="/admin/usuarios">
                <PeopleIcon/> 
                <p className="nav-item-text">Usuarios</p> 
          </NavLink>
        </li>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider d-none d-md-block"/>

        {/* <!-- Nav Item - Usuarios --> */}
        <li>
          <NavLink 
            className={ ({ isActive }) => 'nav-item fontCalibri-3 ' + (isActive ? 'active' : '')}
            to="/store">
                <StoreIcon/> 
                <p className="nav-item-text">Ir a Tienda</p> 
          </NavLink>
        </li>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider d-none d-md-block"/>

        {/* <!-- Sidebar Toggler (Sidebar) --> */}
        <div className="text-center">

          <li className="nav-item-2">
            <p 
              className='fontCalibri-3'
              to="/store"
            >Cerrar Sesion</p>
          </li>

            <button 
              className="logout-button" 
              onClick={handleLogout}
            >Log out</button>

        </div>

      </ul>      
    </div>
  )
}

export default Sidebar
