import styled from 'styled-components';
import Container from '@mui/material/Container';

const MaxContainer = styled(Container)`
  max-width: 1060px !important;
  min-height: 91vh;
  height: 100% !important;
  padding-top: 0 !important;
  color: ${(props) => props.theme.color_white} !important;
  background: ${(props) => props.theme.color_background__default} !important;
`;

const WrapContainer = ({ children }) => {
  return (
    <MaxContainer
      sx={{
        pt: '2vh',
      }}
    >
      {children}
    </MaxContainer>
  );
};

export default WrapContainer;
