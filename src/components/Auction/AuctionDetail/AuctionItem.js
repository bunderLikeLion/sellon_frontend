import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import FavoriteIcon from '@mui/icons-material/Favorite';
import styled from 'styled-components';
import dealingTypeHandler from 'utils/dealingTypeHandler';
import {
  useDeleteInterestedAuctionMutation,
  useCreateInterestedAuctionMutation,
} from 'queries/auction';
import timeLimitHandler from 'utils/timeLimitHandler';
import { useState } from 'react';
import AuctionDetailModal from './AuctionDetailModal';
import { useParams } from 'react-router-dom';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background: transparent !important;
`;

const Button = styled.button`
  position: absolute;
  bottom: -1.5rem;
  right: 1.5rem;
  width: 7rem;
  height: 1.5rem;
  border: 0;
  border-radius: 0.5rem;
  font-size: 0.9rem;
  background: ${(props) => props.theme.color_button__ok};
  color: ${(props) => props.theme.color_font__secondary};
`;

const ItemImgContainer = styled.div`
  position: relative;
  width: 100%;
  height: 20rem;
`;

const ItemImg = styled(CardMedia)`
  height: 100% !important;
  border-radius: 0.5rem;
  object-fit: cover !important;
  object-position: center;
  cursor: pointer;
`;

const AuctionSubDescriptionContainer = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.2rem;
`;

const ItemDuration = styled.span`
  text-align: center;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.2rem;
  border-radius: 1rem;
  width: fit-content;
  padding: 0.2rem 1rem;
  color: ${(props) => props.theme.color_font__secondary};
  background: ${(props) => props.theme.color_background__success};
`;

const ExchangeWay = styled.span`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.2rem;
  border-radius: 1rem;
  padding: 0.2rem 1rem;
  color: ${(props) => props.theme.color_font__secondary};
  background: ${(props) => props.theme.color_background__success};
`;

const ItemContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const ItemNameContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const ItemName = styled.h1`
  font-size: 2rem;
  font-weight: 350;
  color: #fff;
`;

const ItemDescriptionContainer = styled.div`
  overflow-y: auto;
  max-height: 20rem;
`;

const ItemDescription = styled.p`
  font-size: 1.3rem;
  font-weight: 200;
  line-height: 1.6rem;
  color: #fff;
`;

const StyledFavoriteBorderIcon = styled(FavoriteIcon)`
  overflow: visible;
  font-size: 2rem !important;

  color: ${(props) =>
    props.isInterested
      ? props.theme.color_font__number
      : props.theme.color_font__disabled};

  & :hover {
    transform: scale(1.2);
    transform-origin: center;
  }
`;

const InterestedButton = styled.button`
  position: absolute !important;
  right: 1rem;
  top: 1rem;
  border-radius: 50rem !important;
  background: none;
  border: none;
  color: ${(props) => props.theme.color_white};
`;

const AuctionItem = (props) => {
  const [isModalOpened, setIsModalOpened] = useState(false);

  const { id: relatedAuctionId } = useParams();

  const { mutate: createInterestedAuction } =
    useCreateInterestedAuctionMutation();

  const { mutate: deleteInterestedAuction } =
    useDeleteInterestedAuctionMutation();

  const handleModal = () => setIsModalOpened(!isModalOpened);

  const pressHeartIconFunc = (isInterested) => {
    isInterested ? deleteInterestedAuction(relatedAuctionId) : createInterestedAuction(relatedAuctionId);
  };

  return (
    <Container>
      <ItemImgContainer>
        <ItemImg
          onClick={handleModal}
          component="img"
          image={props?.singleAuctionData?.product?.thumbnail?.file}
        />

        <InterestedButton>
          <StyledFavoriteBorderIcon
            isInterested={props?.singleAuctionData?.is_interested}
            onClick={() => pressHeartIconFunc(props?.singleAuctionData?.is_interested)}
          />
        </InterestedButton>

        <AuctionDetailModal
          handleModal={handleModal}
          isModalOpened={isModalOpened}
          isTriggeredFromBigImg={true}
        />
        <AuctionSubDescriptionContainer>
          <ExchangeWay>
            {dealingTypeHandler(props?.singleAuctionData?.dealing_type)}
          </ExchangeWay>
          <ItemDuration>
            {timeLimitHandler(props?.singleAuctionData?.end_at)}
          </ItemDuration>
        </AuctionSubDescriptionContainer>
      </ItemImgContainer>
      <ItemContentContainer>
        <ItemNameContainer>
          <ItemName>{props?.singleAuctionData?.title}</ItemName>
        </ItemNameContainer>
        <ItemDescriptionContainer>
          <ItemDescription>
            {props?.singleAuctionData?.description}
          </ItemDescription>
        </ItemDescriptionContainer>
      </ItemContentContainer>
    </Container>
  );
};

export default AuctionItem;
