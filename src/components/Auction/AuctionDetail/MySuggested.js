import styled from 'styled-components';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useRecoilValue } from 'recoil';
import { userAtom } from 'states';
import { queryClient } from 'index';
import { useEffect, useState } from 'react';
import {
  useDeleteAuctionItemMutation,
  useMyProductGroupQuery,
} from 'queries/auction';
import CardMedia from '@mui/material/CardMedia';

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

const ButtonContainer = styled.button`
  position: absolute;
  top: 5%;
  right: 3%;
  border-radius: 0.8rem;
  background: ${(props) => props.theme.color_button__ok};
`;

const ElevateButton = styled.h1`
  font-size: 1rem;
  font-weight: 600;
`;

const Comment = styled.h1`
  margin-top: 3%;
  margin-left: 9%;
  font-size: 0.9rem;
  font-weight: 400;
`;

const MyItemContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 80%;
`;

const BeforeIcon = styled(NavigateBeforeIcon)`
  font-size: 2rem !important;
  color: #d9d9d9;
`;
const AfterIcon = styled(NavigateNextIcon)`
  font-size: 2rem !important;
  color: #d9d9d9;
`;

const MyItem = styled(CardMedia)`
  width: 5.5rem;
  height: 5.5rem;
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
  const [page, setPage] = useState(1);
  const [productGroupExists, setProductGroupExists] = useState(false);
  const { pk: userId } = useRecoilValue(userAtom);
  const { id: relatedAuctionId } = queryClient.getQueryData(['auctionInfo']);

  const { data: myProductGroup, isSuccess: myProductGroupFetched } =
    useMyProductGroupQuery(relatedAuctionId, userId, page, 4);

  const { mutate: deleteAuctionItem } =
    useDeleteAuctionItemMutation(relatedAuctionId);

  useEffect(() => {
    if (myProductGroup.results.length) {
      setProductGroupExists(true);
      console.log('exists');
    } else {
      setProductGroupExists(false);
      console.log('not exists');
    }
  }, [myProductGroup]);

  return (
    <Container>
      <ButtonContainer onClick={props.handleInventory}>
        <ElevateButton>올리기</ElevateButton>
      </ButtonContainer>
      <Comment>내가 제시한 물건</Comment>
      <MyItemContainer>
        <BeforeIcon />
        {myProductGroupFetched &&
          myProductGroup?.results[0]?.products.map((singleItem) => {
            return (
              <MyItem key={singleItem?.id} image={singleItem?.thumbnail?.file}>
                내아이템
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
        <AfterIcon />
      </MyItemContainer>
    </Container>
  );
};

export default MySuggested;
