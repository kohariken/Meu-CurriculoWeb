import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, useMediaQuery, Menu, MenuItem, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Menu as MenuIcon, Brightness4, Brightness7 } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { styled } from '@mui/material/styles';

interface HeaderProps {
  toggleTheme: () => void;
}

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundImage: 'linear-gradient(#323232, #0e0e0e)',
  boxShadow: 'none',
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(0, 4),
  },
}));

const NavButtons = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
}));

const Header: React.FC<HeaderProps> = ({ toggleTheme }) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <StyledAppBar position="static">
      <StyledToolbar>
        {isMobile ? (
          <>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMenu}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
              <Typography variant="h6" component="div">
                {t('header.title')}
              </Typography>
            </Box>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose} component={Link} to="/">{t('header.home')}</MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/portfolio">{t('header.portfolio')}</MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/skills">{t('header.skills')}</MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/contact">{t('header.contact')}</MenuItem>
            </Menu>
          </>
        ) : (
          <>
            <Typography variant="h6" component="div">
              {t('header.title')}
            </Typography>
            <NavButtons>
              <Button color="inherit" component={Link} to="/">
                {t('header.home')}
              </Button>
              <Button color="inherit" component={Link} to="/portfolio">
                {t('header.portfolio')}
              </Button>
              <Button color="inherit" component={Link} to="/skills">
                {t('header.skills')}
              </Button>
              <Button color="inherit" component={Link} to="/contact">
                {t('header.contact')}
              </Button>
            </NavButtons>
          </>
        )}
        <IconButton color="inherit" onClick={toggleTheme}>
          {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default Header;
