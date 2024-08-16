import React from 'react';
import styled from 'styled-components';
import { FaSun, FaMoon } from 'react-icons/fa';

const ToggleButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.5rem;
  cursor: pointer;
  position: fixed;
  top: 57rem;
  right: 1rem;
  z-index: 1000;
  visibility: hidden;
`;

interface ThemeToggleProps {
  toggleTheme: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ toggleTheme }) => {
  return (
    <ToggleButton onClick={toggleTheme}>
      <FaSun />
      <FaMoon />
    </ToggleButton>
  );
};

export default ThemeToggle;
