import styled from 'styled-components';
import { useState } from 'react';
import { useProductGroupsQuery } from 'queries/auction';
import CardMedia from '@mui/material/CardMedia';
import AuctionDetailModal from './AuctionDetailModal';
import { useParams } from 'react-router-dom';
import { Pagination } from '@mui/material';
import { useMyProductsQuery } from 'queries/product';

const OtherSuggestionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: ${(props) => (props.isInventoryOpened ? '105%' : '64%')};
  border-radius: 0.5rem;
  overflow-y: scroll;
  background: ${(props) => props.theme.color_background__primary};
`;

const GuideContainer = styled.div`
  display: flex;
  align-items: end;
  width: 93%;
  height: 2rem;
  margin: 0 auto 0.7rem auto;
`;

const GuideComment = styled.h1`
  font-size: 1.1rem;
  font-weight: 400;
`;

const OtherSuggestion = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: 28rem;
  height: auto;
  overflow: hidden;
  margin: 0.3rem 1rem;
  padding: 1rem;
  border-radius: 0.5rem;
  background: ${(props) => props.theme.color_background__secondary};
`;
const InnerWrapper = styled.div`
  display: inline-flex;
  width: 26.6rem;
  height: auto;
`;
const ProfileContainer = styled.div`
  position: relative;
  top: 0;
  width: 4rem;
  height: 4rem;
`;

const Profile = styled(CardMedia)`
  width: 100%;
  height: 4rem;
  border-radius: 50%;
`;

const AuctionOtherSuggestionItemContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 85%;
  height: 100%;
  margin-left: 2rem;
`;

const ItemImg = styled(CardMedia)`
  width: 3.8rem;
  height: 3.8rem;
  margin: 0.1rem 0.3rem 0.5rem 0.3rem;
  border-radius: 0.5rem;
  cursor: pointer;
  border: 1.3px solid transparent;
  :hover {
    border: 1.3px solid ${(props) => props.theme.color_border__hover__light};
  }
`;

//Pagination
const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
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

const AuctionOtherSuggestion = (props) => {
  const { id: relatedAuctionId } = useParams();
  const [productGroupsPage, setProductGroupsPage] = useState(1);
  const { data: productGroups, isSuccess: productGroupsFetched } =
    useProductGroupsQuery(relatedAuctionId, productGroupsPage, 3);

  const [singleProduct, setSingleProduct] = useState(null);
  const [isModalOpened, setIsModalOpened] = useState(false);
  const handleModal = () => setIsModalOpened(!isModalOpened);

  const clickImgFunc = (singleProductData) => {
    setSingleProduct(singleProductData);
    handleModal();
  };

  const handleChangePagination = (event, value) => {
    setProductGroupsPage(value);
  };

  return (
    <OtherSuggestionContainer isInventoryOpened={props.isInventoryOpened}>
      <GuideContainer>
        <GuideComment>다른 참가자가 제시한 물건</GuideComment>
      </GuideContainer>
      {productGroupsFetched &&
        productGroups.results.map((singleProductGroup) => {
          return (
            <OtherSuggestion key={singleProductGroup?.id}>
              <InnerWrapper>
                <ProfileContainer>
                  <Profile image={singleProductGroup?.user?.avatar} />
                  {/*{singleProductGroup?.user?.username}*/}
                </ProfileContainer>
                <AuctionOtherSuggestionItemContainer>
                  {singleProductGroup?.products.map((singleProduct) => {
                    return (
                      <ItemImg
                        onClick={() => clickImgFunc(singleProduct)}
                        key={singleProduct.id}
                        image={singleProduct?.thumbnail?.file}
                      />
                    );
                  })}
                  <AuctionDetailModal
                    handleModal={handleModal}
                    isModalOpened={isModalOpened}
                    smallImgRelatedItemId={singleProduct}
                  />
                </AuctionOtherSuggestionItemContainer>
              </InnerWrapper>
            </OtherSuggestion>
          );
        })}
      {/*Pagination*/}
      <PaginationContainer>
        <StyledPagination
          count={productGroups?.total_pages}
          page={productGroupsPage}
          onChange={handleChangePagination}
        />
      </PaginationContainer>
    </OtherSuggestionContainer>
  );
};

export default AuctionOtherSuggestion;
