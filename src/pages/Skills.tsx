import React, { useState } from 'react';
import { Container, Typography, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import FadeInSection from '../components/FadeInSection';
import SkillChart from '../components/SkillChart';
import SkillIcon from '../components/SkillIcon';
import { skillsData, Skill } from '../types/skills';
import { motion, AnimatePresence } from 'framer-motion';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  marginBottom: theme.spacing(3),
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
}));

const Skills: React.FC = () => {
  const { t } = useTranslation();
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  const handleSkillClick = (skill: Skill) => {
    setSelectedSkill(skill);
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h2" component="h1" align="center" gutterBottom>
        {t('skills.title')}
      </Typography>
      <Typography variant="body1" align="center" paragraph>
        Tenho habilidades em MongoDB, Node.js, JavaScript, Express, React e outras tecnologias. Estou sempre em busca de aprender mais.
      </Typography>
      <FadeInSection>
        <StyledPaper elevation={3}>
          <Grid container spacing={3} justifyContent="center" mb={4}>
            {skillsData.map((skill) => (
              <Grid item key={skill.name}>
                <SkillIcon
                  icon={skill.icon}
                  name={skill.name}
                  onClick={() => handleSkillClick(skill)}
                />
              </Grid>
            ))}
          </Grid>
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedSkill ? selectedSkill.name : 'empty'}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {selectedSkill ? (
                <SkillChart skill={selectedSkill} />
              ) : (
                <Typography variant="body1" align="center">
                  {t('skills.selectSkill')}
                </Typography>
              )}
            </motion.div>
          </AnimatePresence>
        </StyledPaper>
      </FadeInSection>
    </Container>
  );
};

export default Skills;
