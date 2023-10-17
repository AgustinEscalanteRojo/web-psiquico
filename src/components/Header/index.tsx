import * as React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Hidden from '@mui/material/Hidden';
import { StyledTypography } from './styles';

const pages = [
  { label: '¿Quienes sómos?', path: '/Who' },
  { label: 'La Consulta', path: '/Consult' },
  { label: 'Ubicación', path: '/Location' },
  { label: 'Contacto', path: '/Contact' },
];

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null,
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#1B94AB' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Hidden mdUp>
            <Link to="/">
              <img
                src="Logo.jpg"
                alt="Logo"
                style={{
                  display: 'flex',
                  marginRight: 1,
                  fontFamily: "'Pacifico', cursive",
                  fontWeight: 200,
                  letterSpacing: '.1rem',
                  color: '#890679',
                  textDecoration: 'none',
                  maxWidth: '100px', // ajusta el tamaño según tus necesidades
                }}
              />
            </Link>
          </Hidden>
          <Hidden smDown>
            <Link to="/">
              <img
                src="Logo.jpg"
                alt="Logo"
                style={{
                  display: 'flex',
                  marginRight: 1,
                  fontFamily: "'Pacifico', cursive",
                  fontWeight: 200,
                  letterSpacing: '.1rem',
                  color: '#890679',
                  textDecoration: 'none',
                  maxWidth: '150px', // ajusta el tamaño según tus necesidades
                }}
              />
            </Link>
          </Hidden>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              PaperProps={{
                sx: {
                  background: '#A9E3ED',
                },
              }}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.label}
                  onClick={handleCloseNavMenu}
                  component={Link}
                  to={page.path}
                >
                  <StyledTypography
                    textAlign="center"
                    sx={{ fontFamily: "'Pacifico', cursive" }}
                  >
                    {page.label}
                  </StyledTypography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
            {pages.map((page) => (
              <Button
                key={page.label}
                component={Link}
                to={page.path}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
