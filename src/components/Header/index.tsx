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
import Hidden from '@mui/material/Hidden';

const pages = [
  { label: 'Quienes somos', path: '/Who' },
  { label: 'La Consulta', path: '/Consult' },
  { label: 'Servicios', path: '/Services' },
  { label: 'Contacto', path: '/Contact' },
  { label: 'Formación', path: '/Training' },
  { label: 'Cursos', path: 'https://aepsis.com/functions/catalogo.php?ref=37ed580eb6dd15' },
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
          <Hidden smUp>
            <Link to="/">
              <img
                src="Logopsiquico.png"
                alt="Logo"
                style={{
                  display: 'flex',
                  marginRight: 1,
                  fontFamily: 'monospace',
                  fontWeight: 200,
                  letterSpacing: '.1rem',
                  color: '#890679',
                  textDecoration: 'none',
                  maxWidth: '100px', 
                }}
              />
            </Link>
          </Hidden>
          <Hidden smDown>
            <Link to="/">
              <img
                src="Logopsiquico.png"
                alt="Logo"
                style={{
                  display: 'flex',
                  marginRight: 1,
                  fontFamily: 'monospace',
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
                  <Typography textAlign="center">{page.label}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
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
