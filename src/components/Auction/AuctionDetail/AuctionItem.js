import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import styled from 'styled-components';
import dealingTypeHandler from 'utils/dealingTypeHandler';
import { queryClient } from 'index';
import useInterestedAuctionsQuery from 'queries/auction/useInterestedAuctionsQuery';
import { useEffect, useState } from 'react';
import useCreateInterestedAuctionMutation from 'queries/auction/useCreateInterestedAuctionMutation';
import useDeleteInterestedAuctionMutation from 'queries/auction/useDeleteInterestedAuctionMutation';

const Container = styled(Card)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: ${(props) => (props.isInventoryOpened ? '92vh' : '63.5vh')};
  background: transparent !important;
`;

const ItemImgContainer = styled.div`
  position: relative;
  width: 100%;
  height: 20rem;
`;

const ItemImg = styled(CardMedia)`
  width: 95% !important;
  height: 100% !important;
  border-radius: 0.5rem;
  object-fit: cover !important;
  object-position: center;
`;

const ItemDurationContainer = styled.div`
  position: absolute;
  top: 3%;
  right: 7%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15%;
  height: 8%;
  border-radius: 1rem;
  background: ${(props) => props.theme.color_background__success};
`;

const ItemDuration = styled.h1`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.2;
  color: ${(props) => props.theme.color_font__secondary};
`;

const ExchangeWayContainer = styled.div`
  position: absolute;
  top: 13%;
  right: 7%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15%;
  height: 8%;
  border-radius: 1rem;
  background: ${(props) => props.theme.color_background__success};
`;

const ExchangeWay = styled.h1`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.2;
  color: ${(props) => props.theme.color_font__secondary};
`;

const ItemContentContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const ItemNameContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 13%;
`;

const ItemName = styled.h1`
  font-size: 2rem;
  font-weight: 350;
  color: #fff;
`;

const ItemDescriptionContainer = styled.div`
  width: 80%;
  @media (min-height: 300px) and (max-height: 800px) {
    height: ${(props) => (props.isInventoryOpened ? '31vh' : '10vh')};
  }
  @media (min-height: 800px) and (max-height: 1000px) {
    height: ${(props) => (props.isInventoryOpened ? '37vh' : '16vh')};
  }
  @media (min-height: 1000px) and (max-height: 1200px) {
    height: ${(props) => (props.isInventoryOpened ? '44vh' : '24vh')};
  }
  overflow-y: scroll;
`;

const ItemDescription = styled.p`
  font-size: 1.3rem;
  font-weight: 200;
  line-height: 1.6rem;
  color: #fff;
`;

const AuctionItem = (props) => {
  const [isInterested, setIsInterested] = useState(false);

  const { id: relatedAuctionId } = queryClient.getQueryData(['auctionInfo']);

  const {
    data: interestedAuctionLists,
    isSuccess: interestedAuctionListsFetched,
  } = useInterestedAuctionsQuery();

  const { mutate: createInterestedAuction } =
    useCreateInterestedAuctionMutation();

  const { mutate: deleteInterestedAuction } =
    useDeleteInterestedAuctionMutation();

  useEffect(() => {
    if (interestedAuctionListsFetched) {
      interestedAuctionLists?.results.map((singleInterestedAuction) => {
        if (singleInterestedAuction?.auction?.id === relatedAuctionId) {
          setIsInterested(true);
        } else {
          setIsInterested(false);
        }
      });
    }
  }, [interestedAuctionLists]);

  return (
    <Container
      sx={{ maxWidth: '100%' }}
      isInventoryOpened={props.isInventoryOpened}
    >
      {isInterested ? (
        <button onClick={() => deleteInterestedAuction(relatedAuctionId)}>
          관심거래 삭제
        </button>
      ) : (
        <button onClick={() => createInterestedAuction(relatedAuctionId)}>
          관심거래 등록
        </button>
      )}
      <ItemImgContainer>
        <ItemImg
          component="img"
          image={props?.singleAuctionData?.product?.thumbnail?.file}
        />
        <ItemDurationContainer>
          <ItemDuration>D - 7</ItemDuration>
        </ItemDurationContainer>
        <ExchangeWayContainer>
          <ExchangeWay>
            {dealingTypeHandler(props?.singleAuctionData?.dealing_type)}
          </ExchangeWay>
        </ExchangeWayContainer>
      </ItemImgContainer>
      <ItemContentContainer>
        <ItemNameContainer>
          <ItemName>{props?.singleAuctionData?.title}</ItemName>
        </ItemNameContainer>
        <ItemDescriptionContainer isInventoryOpened={props.isInventoryOpened}>
          <ItemDescription>
            {props?.singleAuctionData?.description}
          </ItemDescription>
        </ItemDescriptionContainer>
      </ItemContentContainer>
    </Container>
  );
};

export default AuctionItem;
