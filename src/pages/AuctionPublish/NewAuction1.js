import styled from 'styled-components';
import WrapContainer from 'layouts/WrapContainer';
import { useState } from 'react';
import AuctionPublishModal from 'components/Auction/AuctionPublish/AuctionPublishModal';

const TopContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto 15rem auto;
  padding: 2rem 1rem;
  color: white;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

const BigContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 1rem;
  position: relative;
`;

const BigText = styled.div`
  font-size: 2rem;
  font-weight: 700;
  margin: 0.5rem 2rem;
`;

const BtnContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  background: ${(props) => props.theme.color_background__primary};
`;

const Button = styled.button`
  margin: 4rem 1rem 1rem 1rem;
  background: ${(props) => props.theme.color_background__success};
  color: white;
  border-radius: 1rem;
  height: 3.5rem;
  width: 9rem;
  float: right;
  font-size: 1rem;
  font-weight: 700;
  border: none;
`;

const InventoryBtn = styled.button`
  font-size: x-large;
  background: ${(props) => props.theme.color_background__primary};
  color: ${(props) => props.theme.color_font__tertiary};
  border: none;
  height: 95%;
  width: 100%;
`;

const SubHeader = styled.p`
  width: 6rem;
  margin: 0.5rem 0.5rem 0.5rem 0;
  font-weight: 700;
  font-size: 1rem;
`;

const AuctionTitleContainer = styled.div`
  clear: both;
  margin: 2rem 1rem;
`;

const AuctionTitle = styled.input.attrs((props) => ({
  type: 'text',
}))`
  background: grey;
  border: none;
  border-radius: 0.5rem;
  width: 100%;
  height: 2.5rem;
  padding: 0 1rem;
  font-size: 1rem;
`;

const TextareaContainer = styled.div`
  margin: 2rem 1rem;
  display: flex;
  flex-direction: column;
`;

const AuctionText = styled.textarea`
  background: grey;
  height: 20rem;
  padding: 1rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
`;

const AuctionDetailInformationContainer = styled.div`
  background: ${(props) => props.theme.color_background__primary};
  display: flex;
  margin: 1rem;
  padding: 1rem 2rem;
  align-items: center;
  border-radius: 1rem;
  height: 4.5rem;
`;

const Radio = styled.input.attrs((props) => ({ type: 'radio' }))`
  & {
    margin-left: 1rem;
  }
  &:checked {
    accent-color: black;
  }
`;

const RadioLabel = styled.label`
  color: ${(props) => props.theme.color_font__secondary};
`;

const RadioContainer = styled.div``;

const NewAuction1 = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const handleModal = () => setIsModalOpened(!isModalOpened);

  return (
    <WrapContainer>
      <TopContainer>
        <BigText>경매 열기</BigText>
        <BigContainer>
          <Container>
            <BtnContainer>
              <InventoryBtn onClick={handleModal}>
                인벤토리에서 가져오기
              </InventoryBtn>
            </BtnContainer>
          </Container>

          <Container>
            <AuctionTitleContainer>
              <SubHeader>경매글 제목</SubHeader>
              <AuctionTitle />
            </AuctionTitleContainer>

            <TextareaContainer>
              <SubHeader>경매글 내용</SubHeader>
              <AuctionText>어쩌구저쩌구</AuctionText>
            </TextareaContainer>

            <AuctionDetailInformationContainer>
              <SubHeader>경매 기간</SubHeader>
              <RadioContainer>
                <RadioLabel>
                  <Radio name="trade-type" value="All" />
                  하루
                </RadioLabel>
                <RadioLabel>
                  <Radio name="trade-type" value="meeting" />
                  일주일
                </RadioLabel>
              </RadioContainer>
            </AuctionDetailInformationContainer>

            <AuctionDetailInformationContainer>
              <SubHeader>거래 방법</SubHeader>
              <RadioContainer>
                <RadioLabel>
                  <Radio name="trade-type" value="All" /> 전체
                </RadioLabel>
                <RadioLabel>
                  <Radio name="trade-type" value="meeting" /> 직거래
                </RadioLabel>
                <RadioLabel>
                  <Radio name="trade-type" value="delivery" /> 택배
                </RadioLabel>
              </RadioContainer>
            </AuctionDetailInformationContainer>
            <Button>경매 발행하기</Button>
          </Container>
          <AuctionPublishModal
            handleModal={handleModal}
            isModalOpened={isModalOpened}
          />
        </BigContainer>
      </TopContainer>
    </WrapContainer>
  );
};

export default NewAuction1;
