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
  position: absolute;
  top: -76%;
  right: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 50%;
  height: 72%;
  border-radius: 1rem;
  background: ${(props) => props.theme.color_background__primary};
`;

/*
const ButtonContainer = styled.button`
  position: absolute;
  top: 5%;
  right: 3%;
  border-radius: 0.8rem;
  background: ${(props) => props.theme.color_button__ok};
`;
*/

const ButtonContainer = styled.button`
  position: absolute;
  width: 5.8rem;
  height: 1.7rem;
  top: 5%;
  right: 3%;
  border: 0.1px transparent;
  border-radius: 0.5rem;
  background: ${(props) => props.theme.color_button__ok};
`;

/*
const ElevateButton = styled.h1`
  font-size: 1rem;
  font-weight: 600;
`;
*/

const ElevateButton = styled.h1`
  color: ${(props) => props.theme.color_white};
  font-size: 1rem;
  font-weight: 600;
  background: ${(props) => props.theme.color_button__ok};
`;

const Comment = styled.h1`
  margin-top: 3%;
  margin-left: 9%;
  font-size: 1rem;
  font-weight: 600;
`;

const MyItemContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 80%;
  margin-left: 1rem;
`;

const BeforeIcon = styled(NavigateBeforeIcon)`
  position: absolute;
  left: 0;
  font-size: 2rem !important;
  color: #d9d9d9;
`;

const DisabledBeforeIcon = styled(BeforeIcon)`
  cursor: not-allowed;
  color: ${(props) => props.theme.color_background__third};
`;

const AfterIcon = styled(NavigateNextIcon)`
  position: absolute;
  right: 0;
  font-size: 2rem !important;
  color: #d9d9d9;
`;

const DisabledAfterIcon = styled(AfterIcon)`
  cursor: not-allowed;
  color: ${(props) => props.theme.color_background__third};
`;

const MyItem = styled(CardMedia)`
  width: 5.5rem;
  height: 5.5rem;
  margin-left: 1.5rem;
  border-radius: 1rem;
  background: #f00;
`;

const DeleteIcon = styled(HighlightOffIcon)`
  position: relative;
  left: 3.9rem;
  top: 0.2rem;
  color: #000;
`;

const MySuggested = (props) => {
  const { id: relatedAuctionId } = useParams();
  const { id: userId } = useRecoilValue(userAtom);
  const [productGroupPage, setProductGroupPage] = useState(0);
  const [pageLength, setPageLength] = useState(null);
  const [paginatedData, setPaginatedData] = useState(null);

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

  return (
    <Container>
      <ButtonContainer onClick={props.handleInventory}>
        <ElevateButton>인벤토리</ElevateButton>
      </ButtonContainer>
      <Comment>내가 제시한 물건</Comment>
      <MyItemContainer>
        {productGroupPage !== 0 ? (
          <BeforeIcon
            onClick={() => setProductGroupPage(productGroupPage - 1)}
          />
        ) : (
          <DisabledBeforeIcon />
        )}
        {myProductGroupFetched &&
          paginatedData &&
          pageLength &&
          paginatedData[productGroupPage].map((singleItem) => {
            return (
              <MyItem key={singleItem?.id} image={singleItem?.thumbnail?.file}>
                <DeleteIcon
                  onClick={() => {
                    deleteAuctionItem({
                      product_id: singleItem?.id,
                    });
                  }}
                />
              </MyItem>
            );
          })}
        {productGroupPage !== myProductGroup?.total_pages ? (
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
