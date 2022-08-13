import styled from 'styled-components';
import WrapContainer from 'layouts/WrapContainer';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import AuctionPublishModal from 'components/Auction/AuctionPublish/AuctionPublishModal';
import InfoContainerWithItem from 'components/NewAuction/InfoContainerWithItem';
import NewAuctionInput from 'components/NewAuction/NewAuctionInput';
import useInput from 'hooks/useInput';
import { useCreateAuctionMutation } from 'queries/auction';
import moment from 'moment';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export const Container = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
`;

const ArrowBackIcon = styled(ArrowBackIosNewIcon)`
  position: absolute;
  top: 2rem;
  left: -1.5rem;
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 86vh;
`;

const InstructContainer = styled.div`
  display: flex;
  align-items: center;
`;

const TopContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 2rem 1rem;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

const BigContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const BigText = styled.div`
  width: 9rem;
  text-align: center;
  font-size: 2rem;
  font-weight: 350;
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 35rem;
  margin-top: 1rem;
  border-radius: 1rem;
  cursor: pointer;
  background: ${(props) => props.theme.color_background__primary};
`;

const InventoryBtn = styled.button`
  font-size: x-large;
  background: ${(props) => props.theme.color_background__primary};
  color: ${(props) => props.theme.color_font__tertiary};
  border: none;
  height: 95%;
  width: 100%;
`;

const ReselectBtn = styled.button`
  width: 8rem;
  height: 2rem;
  margin-left: 13rem;
  border: none;
  border-radius: 0.3rem;
  background: ${(props) => props.theme.color_background__success};
  color: ${(props) => props.theme.color_font__primary};
`;

const StyledButton = styled.button`
  float: right;
  height: 3.5rem;
  width: 9rem;
  margin: 1rem;
  border: none;
  border-radius: 1rem;
  font-size: 1rem;
  font-weight: 700;
  background: ${(props) => props.theme.color_background__success};
  color: ${(props) => props.theme.color_font__primary};
`;

const NewAuction = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [auctionTitle, auctionTitleHandler] = useInput('');
  const [auctionDesc, auctionDescHandler] = useInput('');
  const [auctionTime, auctionTimeHandler] = useInput('1');
  const [auctionMethod, auctionMethodHandler] = useInput('direct');
  const handleModal = () => setIsModalOpened(!isModalOpened);

  const { mutate: createAuction } = useCreateAuctionMutation();

  const submitAuctionCreationForm = () => {
    createAuction({
      product_id: selectedItem?.id,
      title: auctionTitle,
      description: auctionDesc,
      dealing_type: auctionMethod,
      end_at: moment().add(auctionTime === '1' ? 1 : 7, 'd'),
    });
  };

  return (
    <WrapContainer>
      <FlexContainer>
        <TopContainer>
          <Link to={'/auction/'}>
            <ArrowBackIcon />
          </Link>
          <InstructContainer>
            <BigText>경매 열기</BigText>
            {selectedItem && (
              <ReselectBtn onClick={() => setSelectedItem(null)}>
                아이템 다시 선택
              </ReselectBtn>
            )}
          </InstructContainer>

          <BigContainer>
            {!selectedItem ? (
              <Container>
                <BtnContainer onClick={handleModal}>
                  <InventoryBtn>인벤토리에서 가져오기</InventoryBtn>
                </BtnContainer>
              </Container>
            ) : (
              <InfoContainerWithItem selectedItem={selectedItem} />
            )}

            <Container>
              <NewAuctionInput
                auctionTitle={auctionTitle}
                auctionTitleHandler={auctionTitleHandler}
                auctionDesc={auctionDesc}
                auctionDescHandler={auctionDescHandler}
                auctionTime={auctionTime}
                auctionTimeHandler={auctionTimeHandler}
                auctionMethod={auctionMethod}
                auctionMethodHandler={auctionMethodHandler}
              />
              <StyledButton onClick={submitAuctionCreationForm}>
                경매 발행하기
              </StyledButton>
            </Container>

            <AuctionPublishModal
              handleModal={handleModal}
              isModalOpened={isModalOpened}
              setSelectedItem={setSelectedItem}
            />
          </BigContainer>
        </TopContainer>
      </FlexContainer>
    </WrapContainer>
  );
};

export default NewAuction;
