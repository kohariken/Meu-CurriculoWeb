import React from 'react';
import { Container, Typography, Grid, Link, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import FadeInSection from '../components/FadeInSection';
import { FaEnvelope, FaWhatsapp, FaGithub, FaInstagram } from 'react-icons/fa';

const StyledContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(8),
}));

const ContactItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(3),
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  marginRight: theme.spacing(2),
  fontSize: '1.5rem',
  color: theme.palette.primary.main,
}));

const SocialIcons = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  marginTop: theme.spacing(4),
  '& > a': {
    margin: theme.spacing(0, 2),
    fontSize: '2rem',
    color: theme.palette.text.secondary,
    transition: 'color 0.3s ease',
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
}));

const Contact: React.FC = () => {
  const { t } = useTranslation();

  const whatsappNumber = '5531982742563'; // Número formatado para o link do WhatsApp
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <StyledContainer maxWidth="md">
      <FadeInSection>
        <Typography variant="h2" component="h1" align="center" gutterBottom>
          {t('contact.title')}
        </Typography>
        <Typography variant="body1" align="center" paragraph>
          {t('contact.description')}
        </Typography>
        <Grid container justifyContent="center">
          <Grid item xs={12} md={8}>
            <ContactItem>
              <IconWrapper>
                <FaEnvelope />
              </IconWrapper>
              <Typography variant="h6">
                <Link href="mailto:contato@kohari.online" color="inherit">
                  contato@kohari.online
                </Link>
              </Typography>
            </ContactItem>
            <ContactItem>
              <IconWrapper>
                <FaWhatsapp />
              </IconWrapper>
              <Typography variant="h6">
                <Link href={whatsappLink} target="_blank" rel="noopener noreferrer" color="inherit">
                  (31) 981742563
                </Link>
              </Typography>
            </ContactItem>
          </Grid>
        </Grid>
        <SocialIcons>
          <Link href="https://github.com/kohariken" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </Link>
          <Link href="https://www.instagram.com/kohari.f/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </Link>
        </SocialIcons>
      </FadeInSection>
    </StyledContainer>
  );
};

export default Contact;
