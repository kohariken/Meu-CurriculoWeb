import React from 'react';
import styled from 'styled-components';
import { IconType } from 'react-icons';
import { motion } from 'framer-motion';

const SkillContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
  cursor: pointer;
`;

const IconWrapper = styled.div`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.5rem;
`;

const SkillName = styled.span`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

interface SkillIconProps {
  icon: IconType;
  name: string;
  onClick: () => void;
}

const SkillIcon: React.FC<SkillIconProps> = ({ icon: Icon, name, onClick }) => {
  return (
    <SkillContainer
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <IconWrapper>
        <Icon />
      </IconWrapper>
      <SkillName>{name}</SkillName>
    </SkillContainer>
  );
};

export default SkillIcon;
