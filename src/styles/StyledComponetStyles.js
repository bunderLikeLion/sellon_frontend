import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';

export const StyledLink = styled(Link)`
  width: 100%;
  height: 100%;
`;

export const FinishedOverlay = styled(Card)`
  display: ${(props) => (props.isFinished ? 'flex' : 'none')};
  position: absolute;
  left: 0;
  top: 0;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 2rem;
  background: rgba(30, 30, 30, 0.8) !important;
  color: ${(props) => props.theme.color_font__secondary} !important;
  font-size: 1.5rem;
`;

export const EnabledOverlay = styled(FinishedOverlay)`
  display: flex;
  font-size: 1rem;
`;
