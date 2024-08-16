import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n/i18n';
import { useTheme } from './useTheme';
import GlobalStyle from './styles/GlobalStyle';
import Header from './components/Header';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import ThemeToggle from './components/ThemeToggle';
import { Container, Box } from '@mui/material';

function App() {
  const [theme, toggleTheme] = useTheme();

  const muiTheme = createTheme({
    palette: {
      mode: theme.colors.background === '#f4f4f4' ? 'light' : 'dark',
      primary: {
        main: theme.colors.primary,
      },
      secondary: {
        main: theme.colors.secondary,
      },
      background: {
        default: theme.colors.background,
        paper: theme.colors.surface,
      },
      text: {
        primary: theme.colors.text,
        secondary: theme.colors.textSecondary,
      },
    },
    typography: {
      fontFamily: theme.fonts.main,
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundColor: theme.colors.background,
            color: theme.colors.text,
          },
        },
      },
    },
  });

  return (
    <I18nextProvider i18n={i18n}>
      <MuiThemeProvider theme={muiTheme}>
        <StyledThemeProvider theme={theme}>
          <CssBaseline />
          <GlobalStyle />
          <Router>
            <Header toggleTheme={toggleTheme} />
            <Container maxWidth="lg">
              <Box py={4}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/skills" element={<Skills />} />
                  <Route path="/portfolio" element={<Portfolio />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </Box>
            </Container>
            <ThemeToggle toggleTheme={toggleTheme} />
          </Router>
        </StyledThemeProvider>
      </MuiThemeProvider>
    </I18nextProvider>
  );
}

export default App;
