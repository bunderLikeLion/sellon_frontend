import styled from 'styled-components';
import WrapContainer from 'layouts/WrapContainer';
import ItemImageContainer from 'components/Auction/AuctionAuctioneer/ItemImageContainer';
import ItemDetailContainer from 'components/Auction/AuctionAuctioneer/ItemDetailContainer';
import ByerSingleBox from 'components/Auction/AuctionAuctioneer/ByerSingleBox';
import { Pagination } from '@mui/material';

const Container = styled.div`
weight: 100%  
height: 100%;
  margin: 1rem;
`;

const ItemContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 55%;
  margin: 1rem;
  padding: 1rem 2rem;
  border-radius: 1rem;
  background: ${(props) => props.theme.color_background__primary};
`;

const ByerListContainer = styled.div`
  height: fit-content;
  margin: 1rem;
  padding: 1rem 2rem;
  border-radius: 1rem;
  background: ${(props) => props.theme.color_background__primary};
`;

const TextContainer = styled.div`
  float: left;
  display: flex;

  margin: 1rem;
`;

const BigText = styled.div`
  width: 6rem;
  margin: 0.5rem;
  color: ${(props) => props.theme.color_font__primary};
  font-size: 2rem;
  font-weight: 700;
`;

const SmallText = styled.div`
  margin: 0.5rem;
  display: flex;
  align-items: flex-end;
  color: ${(props) => props.theme.color_font__secondary};
  font-size: 1.2rem;
  font-weight: 700;
`;

const SelectBtn = styled.button`
  float: right;
  margin: 1rem;
  color: ${(props) => props.theme.color_font__primary};
  width: 7rem;
  height: 2.5rem;

  font-size: 1rem;
  font-weight: 700;
  border: none;
  border-radius: 1rem;
  background: ${(props) => props.theme.color_background__success};
`;

const ByerList = styled.div`
  clear: both;
  height: 100%;
  margin: 1rem;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 1rem;
`;

const StyledPagination = styled(Pagination)`
  .MuiPagination-ul {
    button {
      color: ${(props) => props.theme.color_font__secondary} !important;
    }
    .Mui-selected {
      color: ${(props) => props.theme.color_font__number} !important;
    }
  }
`;

const Auctioneer = () => {
  return (
    <WrapContainer>
      <Container>
        <ItemContainer>
          <ItemImageContainer />
          <ItemDetailContainer />
        </ItemContainer>
        <ByerListContainer>
          <TextContainer>
            <BigText>참여자</BigText>
            <SmallText>총 98명</SmallText>
          </TextContainer>

          <SelectBtn>선택</SelectBtn>
          <ByerList>
            <ByerSingleBox />
            <ByerSingleBox />
            <ByerSingleBox />
          </ByerList>
          <PaginationContainer>
            <StyledPagination
              // count={myProductsData?.total_pages}
              // page={pageNum}
              // onChange={handleChange}
              count="1"
              page="1"
            />
          </PaginationContainer>
        </ByerListContainer>
      </Container>
    </WrapContainer>
  );
};

export default Auctioneer;
