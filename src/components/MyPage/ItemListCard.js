import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import styled from 'styled-components';
import Box from '@mui/material/Box';

const Container = styled.div`
  margin-top: 3rem;
  width: 30%;
`;

const ItemListCard = () => {
  return (
    <Container>
      <Card sx={{ maxWidth: '100%' }}>
        <CardMedia
          component="img"
          height="150"
          image="https://image.a-rt.com/art/product/2021/01/94546_1610421269452.jpg?shrink=580:580"
        />
        <CardHeader title="나이키 덩크 로우" />
        <CardContent>
          <div style={{ width: '100%' }}>
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
                textAlign: 'center',
              }}
            >
              카테고리
            </Box>
            <Box
              component="div"
              sx={{
                display: 'inline',
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
              }}
            >
              최상급
            </Box>
            <Box
              component="div"
              sx={{
                display: 'inline',
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
              }}
            >
              1개
            </Box>
          </div>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ItemListCard;
