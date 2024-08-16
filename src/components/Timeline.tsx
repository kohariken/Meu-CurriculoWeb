import React from 'react';
import { Typography, Paper, useTheme, useMediaQuery } from '@mui/material';
import { styled } from '@mui/material/styles';

const TimelineWrapper = styled('div')(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(2, 0),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1, 0),
  },
}));

const TimelineItemWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  position: 'relative',
  marginBottom: theme.spacing(4),
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: theme.spacing(3),
  },
}));

const TimelineLine = styled('div')(({ theme }) => ({
  position: 'absolute',
  left: theme.spacing(2.5),
  height: '100%',
  width: 2,
  backgroundColor: theme.palette.primary.main,
  [theme.breakpoints.down('sm')]: {
    left: theme.spacing(1.5),
  },
}));

const TimelineDot = styled('div')(({ theme }) => ({
  width: 16,
  height: 16,
  borderRadius: '50%',
  backgroundColor: theme.palette.primary.main,
  border: `2px solid ${theme.palette.background.paper}`,
  boxShadow: theme.shadows[1],
}));

const TimelineDotWrapper = styled('div')(({ theme }) => ({
  flexShrink: 0,
  padding: theme.spacing(0.5),
  marginRight: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    marginBottom: theme.spacing(1),
  },
}));

const TimelineContentWrapper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  flex: 1,
  boxShadow: theme.shadows[2],
  borderRadius: theme.shape.borderRadius,
  transition: 'box-shadow 0.3s ease-in-out',
  '&:hover': {
    boxShadow: theme.shadows[4],
  },
  [theme.breakpoints.down('sm')]: {
    marginLeft: theme.spacing(3),
  },
}));

interface TimelineItemProps {
  title: string;
  date: string;
  position: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItemProps[];
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <TimelineWrapper>
      <TimelineLine />
      {items.map((item, index) => (
        <TimelineItemWrapper key={index}>
          <TimelineDotWrapper>
            <TimelineDot />
          </TimelineDotWrapper>
          <TimelineContentWrapper elevation={3}>
            <Typography variant={isMobile ? 'h6' : 'h5'} component="h3" gutterBottom>
              {item.title}
            </Typography>
            <Typography variant="subtitle2" color="textSecondary" gutterBottom>
              {item.date}
            </Typography>
            <Typography variant="subtitle2" color="textSecondary">
              {item.position}
            </Typography>
            <Typography variant="body2">{item.description}</Typography>
          </TimelineContentWrapper>
        </TimelineItemWrapper>
      ))}
    </TimelineWrapper>
  );
};

export default Timeline;
