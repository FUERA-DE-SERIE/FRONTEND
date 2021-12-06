import React from 'react'
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';

const AvatarComponent = ({handleLogout, user}) => {

  const settings = ['Logout'];

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>

      <div className="avatar-name-user">
        <p className="fontCalibri-2 user-name">{user.name}</p>
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar 
            alt={user.name} 
            src={`/assets/avatars/undraw_profile_2.svg`}
            sx={{ width: 33, height: 33 }} 
          />
        </IconButton>
      </div>

      <Menu
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {settings.map((setting) => (
          <MenuItem key={setting} onClick={handleLogout}>
            <Typography textAlign="center">{setting}</Typography>
          </MenuItem>
        ))}
      </Menu>
      
    </>
  )
}

export default AvatarComponent
