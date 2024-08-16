import React from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';

const FadeInContainer = styled.div<{ isVisible: boolean }>`
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transform: translateY(${({ isVisible }) => (isVisible ? '0' : '20px')});
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
`;

interface FadeInSectionProps {
  children: React.ReactNode;
}

const FadeInSection: React.FC<FadeInSectionProps> = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-50px 0px',
  });

  return (
    <FadeInContainer ref={ref} isVisible={inView}>
      {children}
    </FadeInContainer>
  );
};

export default FadeInSection;
