import styled from 'styled-components';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useRecoilValue } from 'recoil';
import { userAtom } from 'states';
import { useEffect, useState } from 'react';
import {
  useDeleteAuctionItemMutation,
  useMyProductGroupQuery,
} from 'queries/auction';
import CardMedia from '@mui/material/CardMedia';
import { useParams } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: column;
  border-radius: 1rem;
  padding: 1rem;
  background: ${(props) => props.theme.color_background__primary};
`;

const Header = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 0 1rem;
`

const ElevationButton = styled.button`
  border: 0.1px transparent;
  border-radius: 0.5rem;
  width: fit-content;
  padding: .3rem .5rem;
  background: ${(props) => props.theme.color_button__ok};
`;

const ElevationButtonText = styled.span`
  color: ${(props) => props.theme.color_white};
  font-size: 1rem;
  font-weight: 600;
`;

const Comment = styled.h3`
  font-size: 1.1rem;
  text-align: left;
  line-height: 1.2rem;
  font-weight: 700;
`;

const MyItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 2rem 0;
`;

const ProductGroupContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  max-width: calc(5rem * 4 + 1rem * 3);
  gap: 1rem;

  @media screen and (max-width: 1000px) {
    justify-content: center;
    max-width: calc(4rem * 2 + 1rem);
  }
`

const BeforeIcon = styled(NavigateBeforeIcon)`
  font-size: 2rem !important;
  color: #d9d9d9;
`;

const DisabledBeforeIcon = styled(BeforeIcon)`
  cursor: not-allowed;
  color: ${(props) => props.theme.color_background__third};
`;

const AfterIcon = styled(NavigateNextIcon)`
  font-size: 2rem !important;
  color: #d9d9d9;
`;

const DisabledAfterIcon = styled(AfterIcon)`
  cursor: not-allowed;
  color: ${(props) => props.theme.color_background__third};
`;

const MyItem = styled(CardMedia)`
  position: relative;
  flex-shrink: 1;
  width: 5rem;
  height: 5rem;
  flex-basis: 5rem;
  max-width: 5rem;
  border-radius: 1rem;

  @media screen and (max-width: 1000px) {
    width: 4rem;
    height: 4rem;
    flex-basis: 4rem;
  }

  @media screen and (max-width: 700px) {
    width: 3rem;
    height: 3rem;
    flex-basis: 3rem;
  }
`;

const DeleteIcon = styled(HighlightOffIcon)`
  position: absolute;
  right: 0.2rem;
  top: 0.2rem;
  color: ${(props) => props.theme.color_white};;
`;

const MySuggested = (props) => {
  const { id: relatedAuctionId } = useParams();
  const { id: userId } = useRecoilValue(userAtom) || {};
  const [productGroupPage, setProductGroupPage] = useState(0);
  const [pageLength, setPageLength] = useState(null);
  const [paginatedData, setPaginatedData] = useState(null);
  const [isReadyToRender, setIsReadyToRender] = useState(false);

  const { data: myProductGroup, isSuccess: myProductGroupFetched } =
    useMyProductGroupQuery(relatedAuctionId, userId, 1, 4);

  const { mutate: deleteAuctionItem } =
    useDeleteAuctionItemMutation(relatedAuctionId);

  useEffect(() => {
    const splitedData = [];
    const tmpArr = [];
    for (let i = 0; i < myProductGroup?.results[0]?.products.length; i++) {
      if (tmpArr.length < 4) {
        tmpArr.push(myProductGroup?.results[0]?.products[i]);
      } else {
        splitedData.push([...tmpArr]);
        tmpArr.splice(0, tmpArr.length);
        tmpArr.push(myProductGroup?.results[0]?.products[i]);
      }
    }
    if (tmpArr.length) {
      splitedData.push([...tmpArr]);
    }
    setPaginatedData(splitedData);
    setPageLength(splitedData.length);
  }, [myProductGroup]);

  useEffect(() => {
    if (paginatedData > 0 && !paginatedData[productGroupPage]) {
      setProductGroupPage(0);
    }
  }, [paginatedData, productGroupPage]);

  useEffect(() => {
    if (myProductGroupFetched && paginatedData && pageLength) {
      setIsReadyToRender(true);
    } else {
      setIsReadyToRender(false);
    }
  }, [myProductGroupFetched, paginatedData, pageLength]);

  return (
    <Container>
      <Header>
        <Comment>내가 제시한 물건</Comment>
      </Header>
      <MyItemContainer>
        {productGroupPage !== 0 ? (
          <BeforeIcon
            onClick={() => setProductGroupPage(productGroupPage - 1)}
          />
        ) : (
          <DisabledBeforeIcon />
        )}
        <ProductGroupContainer>
          {isReadyToRender &&
            paginatedData[productGroupPage]?.map((singleItem) => {
              if (!paginatedData[productGroupPage]) setProductGroupPage(0);
              return (
                <MyItem key={singleItem?.id} image={singleItem?.thumbnail?.file}>
                  <DeleteIcon
                    stroke={"black"}
                    stroke-width={1}
                    onClick={() => {
                      deleteAuctionItem({
                        product_id: singleItem?.id,
                      });
                    }}
                  />
                </MyItem>
              );
            })}
        </ProductGroupContainer>
        {productGroupPage !== pageLength - 1 ? (
          <AfterIcon
            onClick={() => setProductGroupPage(productGroupPage + 1)}
          />
        ) : (
          <DisabledAfterIcon />
        )}
      </MyItemContainer>
    </Container>
  );
};

export default MySuggested;
