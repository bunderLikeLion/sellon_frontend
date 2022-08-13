import styled from 'styled-components';
import WrapContainer from 'layouts/WrapContainer';
import ItemImageContainer from 'components/Auction/AuctionAuctioneer/ItemImageContainer';
import ItemDetailContainer from 'components/Auction/AuctionAuctioneer/ItemDetailContainer';
import BuyerSingleBox from 'components/Auction/AuctionAuctioneer/ByerSingleBox';
import SelectMessageModal from 'components/Auction/AuctionAuctioneer/SelectMessageModal';
import DiscardMessageModal from 'components/Auction/AuctionAuctioneer/DiscardMessageModal';
import { FormControlLabel, Pagination, RadioGroup } from '@mui/material';
import { StyledRadio } from 'components/MyPage/AddItemModal';
import { useState } from 'react';

const Container = styled.div`
  height: 100%;
  margin: 1rem;
`;

const ItemContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 56%;
  margin: 1rem;
  padding: 1rem 2rem;
  border-radius: 1rem;
  background: ${(props) => props.theme.color_background__primary};
`;

const BuyerListContainer = styled.div`
  height: fit-content;
  margin: 1rem;
  padding: 1rem 2rem;
  border-radius: 1rem;
  background: ${(props) => props.theme.color_background__primary};
`;

const TextContainer = styled.div`
  display: flex;
  float: left;
  margin: 1rem;
`;

const BigText = styled.div`
  width: 6rem;
  margin: 0.5rem;
  font-size: 2rem;
  font-weight: 700;
  color: ${(props) => props.theme.color_font__primary};
`;

const SmallText = styled.div`
  display: flex;
  align-items: flex-end;
  margin: 0.5rem;
  font-size: 1.2rem;
  font-weight: 700;
  color: ${(props) => props.theme.color_font__secondary};
`;

const SelectBtn = styled.button`
  float: right;
  width: 7rem;
  height: 2.5rem;
  margin: 1rem;
  border: none;
  border-radius: 1rem;
  font-size: 1rem;
  font-weight: 700;
  color: ${(props) => props.theme.color_font__primary};
  background: ${(props) => props.theme.color_background__success};
`;

const DiscardBtn = styled.button`
  float: right;
  width: 7rem;
  height: 2.5rem;
  margin: 1rem;
  border: none;
  border-radius: 1rem;
  font-size: 1rem;
  font-weight: 700;
  color: ${(props) => props.theme.color_font__primary};
  background: ${(props) => props.theme.color_background__warning};
`;

const BuyerList = styled.div`
  clear: both;
  height: 100%;
  margin: 1rem 0 1rem 1rem;
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

const MyRadioGroup = styled(RadioGroup)``;

const BuyerContainer = styled.div`
  display: flex;
  width: 100%;
`;

const Auctioneer = () => {
  const [isSelectModalOpened, setIsSelectModalOpened] = useState(false);
  const [isDiscardModalOpened, setIsDiscardModalOpened] = useState(false);
  const SelecthandleModal = () => setIsSelectModalOpened(!isSelectModalOpened);
  const DiscardhandleModal = () =>
    setIsDiscardModalOpened(!isDiscardModalOpened);

  return (
    <WrapContainer>
      <Container>
        <ItemContainer>
          <ItemImageContainer />
          <ItemDetailContainer />
        </ItemContainer>
        <BuyerListContainer>
          <TextContainer>
            <BigText>참여자</BigText>
            <SmallText>총 98명</SmallText>
          </TextContainer>

          <SelectBtn onClick={SelecthandleModal}>선택</SelectBtn>
          <DiscardBtn onClick={DiscardhandleModal}>폐기</DiscardBtn>
          <BuyerList>
            <MyRadioGroup name="buyer-radio-group">
              <BuyerContainer>
                <FormControlLabel value="id_1" control={<StyledRadio />} />
                <BuyerSingleBox />
              </BuyerContainer>

              <BuyerContainer>
                <FormControlLabel value="id_2" control={<StyledRadio />} />
                <BuyerSingleBox />
              </BuyerContainer>
            </MyRadioGroup>
          </BuyerList>
          <PaginationContainer>
            <StyledPagination
              // count={myProductsData?.total_pages}
              // page={pageNum}
              // onChange={handleChange}
              count="1"
              page="1"
            />
          </PaginationContainer>
        </BuyerListContainer>
        <SelectMessageModal
          handleModal={SelecthandleModal}
          isModalOpened={isSelectModalOpened}
        />
        <DiscardMessageModal
          handleModal={DiscardhandleModal}
          isModalOpened={isDiscardModalOpened}
        />
      </Container>
    </WrapContainer>
  );
};

export default Auctioneer;
