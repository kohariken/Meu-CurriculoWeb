import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import ProjectCard from '../components/ProjectCard';
import FadeInSection from '../components/FadeInSection';

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
  liveUrl: string;
}

const Portfolio: React.FC = () => {
  const { t } = useTranslation();

  const projects = t('portfolio.projects', { returnObjects: true }) as Project[];

  return (
    <Container maxWidth="lg">
      <Typography variant="h2" component="h1" align="center" gutterBottom>
        {t('portfolio.title')}
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <FadeInSection>
              <ProjectCard
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                githubUrl={project.githubUrl}
                liveUrl={project.liveUrl}
              />
            </FadeInSection>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Portfolio;
