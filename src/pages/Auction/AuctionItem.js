import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import styled from 'styled-components';

const Container = styled.div`
  width: 50%;
`;

const AuctionItem = () => {
  return (
    <Container>
      <Card sx={{ maxWidth: '100%' }}>
        <CardMedia
          component="img"
          height="100"
          image="https://image.a-rt.com/art/product/2021/01/94546_1610421269452.jpg?shrink=580:580"
        />
        <CardContent>
          <div style={{ width: '50%' }}>
            <Box
              component="div"
              sx={{
                display: 'block',
                p: 1,
                m: 1,
                bgcolor: (theme) =>
                  theme.palette.mode === 'dark' ? '#101010' : '#fff',
                color: (theme) =>
                  theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
                border: '1px solid',
                borderColor: (theme) =>
                  theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
                borderRadius: 2,
                fontSize: '0.875rem',
                fontWeight: '700',
                textAlign: 'left',
              }}
            >
              상품명
            </Box>
            <Box
              component="div"
              sx={{
                display: 'block',
                p: 1,
                m: 1,
                bgcolor: (theme) =>
                  theme.palette.mode === 'dark' ? '#101010' : '#fff',
                color: (theme) =>
                  theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
                border: '1px solid',
                borderColor: (theme) =>
                  theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
                borderRadius: 2,
                fontSize: '0.875rem',
                fontWeight: '700',
                textAlign: 'left',
              }}
            >
              기간
            </Box>
          </div>
        </CardContent>
      </Card>
    </Container>
  );
};

export default AuctionItem;
