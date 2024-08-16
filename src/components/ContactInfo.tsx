import React from 'react';
import { Typography, Grid, Link } from '@mui/material';
import { styled } from '@mui/material/styles';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';

const IconWrapper = styled('span')(({ theme }) => ({
  marginRight: theme.spacing(1),
  verticalAlign: 'middle',
}));

const ContactInfo: React.FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="body1">
          <IconWrapper>
            <FaEnvelope />
          </IconWrapper>
          <Link href="mailto:seu-email@exemplo.com">seu-email@exemplo.com</Link>
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1">
          <IconWrapper>
            <FaPhone />
          </IconWrapper>
          +55 (11) 98765-4321
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1">
          <IconWrapper>
            <FaLinkedin />
          </IconWrapper>
          <Link href="https://www.linkedin.com/in/seu-perfil" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </Link>
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1">
          <IconWrapper>
            <FaGithub />
          </IconWrapper>
          <Link href="https://github.com/seu-usuario" target="_blank" rel="noopener noreferrer">
            GitHub
          </Link>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ContactInfo;
