import React from 'react';
import { Typography, Box, useMediaQuery, useTheme } from '@mui/material';
import { Skill } from '../types/skills';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

interface SkillChartProps {
  skill: Skill;
}

const SkillChart: React.FC<SkillChartProps> = ({ skill }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const chartData = [
    { name: 'Nível', value: skill.level },
    { name: 'Experiência', value: Math.min((skill.endorsements / 100) * 100, 100) },
  ];

  // Define a largura do gráfico com base no dispositivo
  const chartWidth = isMobile ? '100%' : '75%';

  return (
    <Box>
      <Typography variant="h4" align="center" gutterBottom>
        {skill.name}
      </Typography>
      <Typography variant="body1" align="center" paragraph>
        {skill.description}
      </Typography>
      <Box display="flex" justifyContent="center" height={300}>
        <ResponsiveContainer width={chartWidth} height="100%">
          <BarChart
            data={chartData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis domain={[0, 100]} />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#8884d8" name={skill.name} />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
};

export default SkillChart;
