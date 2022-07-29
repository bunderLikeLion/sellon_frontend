import Container from '@mui/material/Container';

const WrapContainer = ({ children }) => {
  return (
    <Container
      sx={{
        height: '92vh',
        color: '#FFFFFF',
        pt: '2vh',
      }}
    >
      {children}
    </Container>
  );
};

export default WrapContainer;
