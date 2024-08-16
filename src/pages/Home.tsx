import React from 'react';
import { Container, Grid, Typography, Box, Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import { FaUser, FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import Timeline from '../components/Timeline';
import SocialLinks from '../components/SocialLinks';
import FadeInSection from '../components/FadeInSection';

const Section = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(6),
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3],
}));

const SectionIcon = styled(Box)(({ theme }) => ({
  fontSize: '2rem',
  marginRight: theme.spacing(2),
  color: theme.palette.primary.main,
}));



const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container maxWidth="lg">
      <FadeInSection>
        <Box my={4}>
          <Grid container spacing={4} alignItems="center" justifyContent="center">
            <Grid item>
              <Avatar
                src="/profile.jpg"
                alt="Profile"
                sx={{ width: 200, height: 200 }}
              />
            </Grid>
            <Grid item>
              <Typography variant="h2" component="h1" gutterBottom>
                {t('home.title')}
              </Typography>
              <Typography variant="h5" component="h2" gutterBottom>
                {t('home.subtitle')}
              </Typography>
              <Typography variant="body1">{t('home.age')}
              </Typography>
              <SocialLinks />
            </Grid>
          </Grid>
        </Box>
      </FadeInSection>

      <FadeInSection>
        <Section>
          <Grid container alignItems="center" spacing={2}>
            <Grid item>
              <SectionIcon>
                <FaUser />
              </SectionIcon>
            </Grid>
            <Grid item>
              <Typography variant="h4" component="h3" gutterBottom>
                {t('home.about.title')}
              </Typography>
            </Grid>
          </Grid>
          <Typography variant="body1">{t('home.about.content')}</Typography>
        </Section>
      </FadeInSection>

      <FadeInSection>
        <Section>
          <Grid container alignItems="center" spacing={2}>
            <Grid item>
              <SectionIcon>
                <FaBriefcase />
              </SectionIcon>
            </Grid>
            <Grid item>
              <Typography variant="h4" component="h3" gutterBottom>
                {t('home.experience.title')}
              </Typography>
            </Grid>
          </Grid>
          <Timeline items={t('home.experience.items', { returnObjects: true })} />
        </Section>
      </FadeInSection>

      <FadeInSection>
        <Section>
          <Grid container alignItems="center" spacing={2}>
            <Grid item>
              <SectionIcon>
                <FaGraduationCap />
              </SectionIcon>
            </Grid>
            <Grid item>
              <Typography variant="h4" component="h3" gutterBottom>
                {t('home.education.title')}
              </Typography>
            </Grid>
          </Grid>
          <Timeline items={t('home.education.items', { returnObjects: true })} />
        </Section>
      </FadeInSection>
    </Container>
  );
};

export default Home;
