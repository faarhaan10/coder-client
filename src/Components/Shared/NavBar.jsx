import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';


const settings = ['Profile', 'Dashboard'];

function NavBar() {
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const { user, logOut } = React.useContext(AuthContext);


    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static" sx={{ px: 2, position: 'fixed', zIndex: 999 }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="span"
                        sx={{
                            mr: 2,
                            display: 'flex',
                            fontWeight: 800,
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
                            P.H. Forum

                        </Link>
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: 'flex' }}>
                        <Link to='/about' style={{ textDecoration: 'none' }}>
                            <Button
                                sx={{ my: 2, color: 'white', display: 'block', }}
                            >
                                About
                            </Button>
                        </Link>
                        <Link to='/policy' style={{ textDecoration: 'none' }}>
                            <Button
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                Terms & Conditions
                            </Button>
                        </Link>
                    </Box>
                    <TextField
                        size='small'
                        placeholder='Search here'
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start" >
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        }}
                        variant="outlined"
                    />

                    {!user?.email ? <Box sx={{ flexGrow: 0 }}>
                        <Link to='/login' style={{ textDecoration: 'none' }}>
                            <Button
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                Login
                            </Button>
                        </Link>
                    </Box>
                        :
                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 1 }}>
                                    <Avatar alt={user.name} src={user.image} />
                                </IconButton>
                            </Tooltip>
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
                                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center">{setting}</Typography>
                                    </MenuItem>
                                ))}
                                <MenuItem onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center" onClick={() => logOut()}>Logout</Typography>
                                </MenuItem>
                            </Menu>
                        </Box>}
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default NavBar;
