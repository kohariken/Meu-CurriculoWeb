import React from 'react';
import { Chip, Box } from '@mui/material';

interface SkillTagsProps {
  categories: string[];
  selectedCategories: string[];
  onCategoryToggle: (category: string) => void;
}

const SkillTags: React.FC<SkillTagsProps> = ({
  categories,
  selectedCategories,
  onCategoryToggle,
}) => {
  return (
    <Box display="flex" flexWrap="wrap" gap={1} mb={2}>
      {categories.map((category) => (
        <Chip
          key={category}
          label={category}
          onClick={() => onCategoryToggle(category)}
          color={selectedCategories.includes(category) ? 'primary' : 'default'}
        />
      ))}
    </Box>
  );
};

export default SkillTags;
