import React from 'react';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import AvatarComponent from '../../../avatar/AvatarComponent'


export default function HeaderDashboard({handleLogout}) {


  return (
    <nav className="topbar">
      {/* <!-- Topbar Search --> */}
        <form className="col-iz input-group">
            <input type="text" className="form-control fontCalibri-2" placeholder="Buscar..."
              aria-label="Search" aria-describedby="basic-addon2"/>
              <button className="form-button" type="button">
                <SearchRoundedIcon fontSize="small"/>
              </button>
        </form>

        {/* <!-- Topbar Search --> */}
        <div className="col-dr">
          <AvatarComponent handleLogout={handleLogout}/>
        </div>

    </nav>
  );
}
