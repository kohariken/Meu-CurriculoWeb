import React from 'react';
import styled from 'styled-components';
import {FaGithub, FaInstagram} from 'react-icons/fa';

const SocialLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialLink = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const SocialLinks: React.FC = () => {
  return (
    <SocialLinksContainer>
     
      <SocialLink href="https://github.com/kohariken" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </SocialLink>
      <SocialLink href="https://www.instagram.com/kohari.f/" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </SocialLink>
      
    </SocialLinksContainer>
  );
};

export default SocialLinks;
