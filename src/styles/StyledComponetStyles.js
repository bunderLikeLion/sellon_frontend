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
  background-color: rgba(57, 57, 65, 0.83) !important;
  color: ${(props) => props.theme.color_font__secondary} !important;
`;
