import styled from 'styled-components';
import WrapContainer from 'layouts/WrapContainer';
import ItemImageContainer from 'components/Auction/AuctionAuctioneer/ItemImageContainer';
import ItemDetailContainer from 'components/Auction/AuctionAuctioneer/ItemDetailContainer';
import ByerSingleBox from 'components/Auction/AuctionAuctioneer/ByerSingleBox';

const Container = styled.div`
  height: 50rem;
  weight: 100%
  background: black;
  margin: 1rem;
`;

const ItemContainer = styled.div`
  background: grey;
  margin: 1rem;
  height: 60%;
  display: flex;
  justify-content: center;
`;

const ByerListContainer = styled.div`
  background: grey;
  margin: 1rem;
  padding: 1rem;
  height: fit-content;
`;

const BigText = styled.div`
  font-size: 1rem;
  font-weight: 700;
  margin: 0.5rem;
  width: 10rem;
  display: inline-block;
`;

const SelectBtn = styled.button`
  margin: 1rem;
  background: ${(props) => props.theme.color_background__success};
  color: white;
  border-radius: 1rem;
  height: 3.5rem;
  width: 9rem;
  float: right;
  font-size: 1rem;
  font-weight: 700;
  border: none;
`;

const ByerList = styled.div`
  clear: both;
  background: red;
  margin: 1rem;
  height: 100%;
`;

const Auctioneer = () => {
  return (
    <WrapContainer>
      testestest
      <Container>
        <ItemContainer>
          <ItemImageContainer />
          <ItemDetailContainer />
        </ItemContainer>
        <ByerListContainer>
          <BigText>참여자 총 98명</BigText>
          <SelectBtn>선택</SelectBtn>
          <ByerList>
            <ByerSingleBox />
            <ByerSingleBox />
            <ByerSingleBox />
          </ByerList>
        </ByerListContainer>
      </Container>
    </WrapContainer>
  );
};

export default Auctioneer;
