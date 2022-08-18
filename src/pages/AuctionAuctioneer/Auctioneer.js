import styled from 'styled-components';
import WrapContainer from 'layouts/WrapContainer';
import ItemImageContainer from 'components/Auction/AuctionAuctioneer/ItemImageContainer';
import ItemDetailContainer from 'components/Auction/AuctionAuctioneer/ItemDetailContainer';
import BuyerSingleBox from 'components/Auction/AuctionAuctioneer/BuyerSingleBox';
import SelectMessageModal from 'components/Auction/AuctionAuctioneer/SelectMessageModal';
import DiscardMessageModal from 'components/Auction/AuctionAuctioneer/DiscardMessageModal';
import { FormControlLabel, Pagination, RadioGroup } from '@mui/material';
import { StyledRadio } from 'components/MyPage/AddItemModal';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useSingleProductQuery from 'queries/product/useSingleProductQuery';
import { useProductGroupsQuery, useSingleAuctionQuery } from 'queries/auction';
import useInput from 'hooks/useInput';
import { useRecoilValue } from 'recoil';
import { userAtom } from 'states';
import EmptyListPlaceHolder from 'components/Shared/EmptyListPlaceholder';

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

const AuctioneerContainer = styled.div`
  padding: 1rem;
`;

const AuctioneerItem = styled.div`
  width: 50%;
`;

const Auctioneer = () => {
  const navigate = useNavigate();
  const user = useRecoilValue(userAtom);
  const { id: auctionId, product: productId } = useParams();

  const [pageNum, setPageNum] = useState(1);
  const [selectedGroupId, handleSelectedGroupId] = useInput(null);
  const [isSelectModalOpened, setIsSelectModalOpened] = useState(false);
  const [isDiscardModalOpened, setIsDiscardModalOpened] = useState(false);
  const SelecthandleModal = () => setIsSelectModalOpened(!isSelectModalOpened);
  const DiscardhandleModal = () =>
    setIsDiscardModalOpened(!isDiscardModalOpened);

  const { data: singleItemData, isSuccess: singleItemDataFetched } =
    useSingleProductQuery(productId);

  const { data: singleAuctionData } = useSingleAuctionQuery(auctionId);

  const { data: productGroups, isSuccess: productGroupsFetched } =
    useProductGroupsQuery(auctionId, pageNum, 3);

  const selectedProductGroupControlProps = (item) => ({
    checked: selectedGroupId === item,
    onChange: handleSelectedGroupId,
    value: item,
    name: 'color-radio-button-demo',
    inputProps: { 'aria-label': item },
  });

  const handlePageChange = (event, value) => {
    setPageNum(value);
  };

  useEffect(() => {
    if (singleAuctionData?.owner?.id !== user?.id) navigate('/auction');
  }, [user, singleAuctionData]);

  return (
    <WrapContainer>
      <Container>
        {singleItemDataFetched && (
          <ItemContainer>
            <AuctioneerItem>
              <AuctioneerContainer />
              <ItemImageContainer
                thumbnail={singleItemData?.thumbnail?.file}
                images={singleItemData?.images}
              />
            </AuctioneerItem>
            <ItemDetailContainer />
          </ItemContainer>
        )}
        {productGroupsFetched && (
          <BuyerListContainer>
            <TextContainer>
              <BigText>참여자</BigText>
              <SmallText>총 {productGroups?.total_count}명</SmallText>
            </TextContainer>

            <SelectBtn onClick={SelecthandleModal}>선택</SelectBtn>
            <DiscardBtn onClick={DiscardhandleModal}>폐기</DiscardBtn>
            <BuyerList>
              {productGroups?.total_count > 0 ? (
                <MyRadioGroup name="buyer-radio-group">
                  {productGroups?.results.map((singleGroup) => {
                    return (
                      <BuyerContainer>
                        <FormControlLabel
                          control={<StyledRadio />}
                          {...selectedProductGroupControlProps(
                            `${singleGroup?.id}`
                          )}
                        />
                        <BuyerSingleBox singleGroup={singleGroup} />
                      </BuyerContainer>
                    );
                  })}
                </MyRadioGroup>
              ) : (
                <EmptyListPlaceHolder message="아직 경매 참여자가 없습니다 🥺" />
              )}
            </BuyerList>
            <PaginationContainer>
              <StyledPagination
                count={productGroups?.total_pages}
                page={pageNum}
                onChange={handlePageChange}
              />
            </PaginationContainer>
          </BuyerListContainer>
        )}
        <SelectMessageModal
          handleModal={SelecthandleModal}
          isModalOpened={isSelectModalOpened}
          selectedGroupId={selectedGroupId}
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
