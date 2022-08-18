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
  flex-direction: column;
  width: 100%;
  border-radius: 0.5rem;
  flex: 2.5;
  overflow-y: auto;
  max-height: 30rem;
  background: ${(props) => props.theme.color_background__primary};
`;

const GuideContainer = styled.div`
  display: flex;
  align-items: end;
  padding: 1.2rem;
  flex: 0;
`;

const GuideComment = styled.h1`
  font-size: 1.1rem;
  font-weight: 700;
`;

const OtherSuggestion = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  height: auto;

  margin: 0.3rem 1rem;
  padding: 1rem;
  border-radius: 0.5rem;
  background: ${(props) => props.theme.color_background__secondary};
`;

const InnerWrapper = styled.div`
  display: flex;
  height: auto;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;

const ProfileContainer = styled.div`
  position: relative;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    padding-bottom: 1rem;
  }
`;

const Profile = styled(CardMedia)`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;

  @media screen and (max-width: 1000px) {
    width: 3rem;
    height: 3rem;
  }
`;

const AuctionOtherSuggestionItemContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  height: 100%;

  @media screen and (max-width: 1000px) {
    margin-left: 0;
  }
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

const ProductGroupListContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
  // TODO: 수치 조절
  height: 30rem;
`

//Pagination
const PaginationContainer = styled.div`
  flex: 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  padding: 0.5rem;
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
    <OtherSuggestionContainer>
      <GuideContainer>
        <GuideComment>다른 참가자가 제시한 물건</GuideComment>
      </GuideContainer>
      <ProductGroupListContainer>
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
      </ProductGroupListContainer>
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
