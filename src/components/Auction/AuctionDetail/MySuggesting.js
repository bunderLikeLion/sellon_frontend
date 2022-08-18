import styled from 'styled-components';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { useState } from 'react';
import ValidationModal from '../../Shared/ValidationModal';
import { useMyProductsQuery } from 'queries/product';
import CardMedia from '@mui/material/CardMedia';
import { queryClient } from 'index';
import InventoryCard from './InventoryCard';
import { useParams } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 2rem;

  @media screen and (max-width: 1000px) {
    padding: 1rem;
  }
`;

const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-bottom: 1rem;;
  padding: 0rem 5rem 1rem 5rem;

  @media screen and (max-width: 1000px) {
    padding: 0rem 1rem 1rem 1rem;
  }
`;

const BottomWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

const GuideContainer = styled.div``;

const GuideComment = styled.h1`
  font-size: 1.2rem;
  font-weight: 400;
`;

const AllInButton = styled.button`
  width: fit-content;
  font-size: 1rem;
  font-weight: 500;
  border: 0.1px transparent;
  border-radius: 0.5rem;
  padding: 0.4rem 1rem;
  color: ${(props) => props.theme.color_font__primary};
  background: ${(props) => props.theme.color_background__warning};
`;


const BeforeIcon = styled(NavigateBeforeIcon)`
  font-size: 4rem !important;
  cursor: pointer;

  @media screen and (max-width: 1000px) {
    font-size: 3rem !important;
  }
`;

const DisabledBeforeIcon = styled(BeforeIcon)`
  font-size: 4rem !important;

  cursor: not-allowed;
  color: ${(props) => props.theme.color_background__third};
  @media screen and (max-width: 1000px) {
    font-size: 3rem !important;
  }
`;

const AfterIcon = styled(NavigateNextIcon)`
  font-size: 4rem !important;

  cursor: pointer;
  @media screen and (max-width: 1000px) {
    font-size: 3rem !important;
  }
`;

const DisabledAfterIcon = styled(AfterIcon)`
  font-size: 4rem !important;

  cursor: not-allowed;
  color: ${(props) => props.theme.color_background__third};

  @media screen and (max-width: 1000px) {
    font-size: 3rem !important;
  }
`;

const PaginationBeforeIconContainer = styled.div`
  flex: 0;
`;

const PaginationAfterIconContainer = styled.div`
  flex: 0;
`;

const InventoryListContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 1rem;
`;

const MySuggesting = () => {
  const { id: relatedAuctionId } = useParams();

  const [isModalOpened, setIsModalOpened] = useState(false);
  const [inventoryPageNum, setInventoryPageNum] = useState(1);

  const handleModal = () => setIsModalOpened(!isModalOpened);

  const { data: myProductsData, isSuccess: myProductFetched } =
    useMyProductsQuery(inventoryPageNum, 4);

  return (
    <Container>
      <TopWrapper>
        <GuideContainer>
          <GuideComment>인벤토리</GuideComment>
        </GuideContainer>
        <AllInButton onClick={handleModal}>올인</AllInButton>
      </TopWrapper>
      <BottomWrapper>
        <PaginationBeforeIconContainer>
          {inventoryPageNum !== 1 ? (
            <BeforeIcon
              onClick={() => setInventoryPageNum(inventoryPageNum - 1)}
            />
          ) : (
            <DisabledBeforeIcon />
          )}
        </PaginationBeforeIconContainer>
        <InventoryListContainer>
          {myProductFetched &&
            myProductsData.results.map((singleProduct) => {
              if (singleProduct?.status === 'hidden') {
                return (
                  <InventoryCard
                    key={singleProduct.id}
                    singleProduct={singleProduct}
                    relatedAuctionId={relatedAuctionId}
                    isUsable={true}
                  />
                );
              } else {
                return (
                  <InventoryCard
                    key={singleProduct.id}
                    singleProduct={singleProduct}
                    relatedAuctionId={relatedAuctionId}
                    isUsable={false}
                  />
                );
              }
            })}
        </InventoryListContainer>
        <PaginationAfterIconContainer>
          {inventoryPageNum !== myProductsData?.total_pages ? (
            <AfterIcon
              onClick={() => setInventoryPageNum(inventoryPageNum + 1)}
            />
          ) : (
            <DisabledAfterIcon />
          )}
        </PaginationAfterIconContainer>
      </BottomWrapper>

      <ValidationModal
        handleModal={handleModal}
        isModalOpened={isModalOpened}
        mainText="정말 올인하시겠습니까?"
        btnText="올인"
        relatedId={relatedAuctionId}
        type="allIn"
      />
    </Container>
  );
};

export default MySuggesting;
