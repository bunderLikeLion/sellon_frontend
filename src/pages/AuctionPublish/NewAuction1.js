import styled from 'styled-components';
import WrapContainer from 'layouts/WrapContainer';
import { useState } from 'react';
import AuctionPublishModal from 'components/Auction/AuctionPublish/AuctionPublishModal';

const TopContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 2rem 1rem;
  color: #fff;
`;

const BigContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const BigText = styled.div`
  margin: 0.5rem 2rem;
  font-size: 2rem;
  font-weight: 700;
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  background: ${(props) => props.theme.color_background__primary};
`;

const Button = styled.button`
  float: right;
  height: 3.5rem;
  width: 9rem;
  margin: 4rem 1rem 1rem 1rem;
  font-size: 1rem;
  font-weight: 700;
  border: none;
  border-radius: 1rem;
  color: #fff;
  background: ${(props) => props.theme.color_background__success};
`;

const InventoryBtn = styled.button`
  height: 95%;
  width: 100%;
  font-size: x-large;
  border: none;
  color: ${(props) => props.theme.color_font__tertiary};
  background: ${(props) => props.theme.color_background__primary};
`;

const SubHeader = styled.p`
  width: 6rem;
  margin: 0.5rem 0.5rem 0.5rem 0;
  font-weight: 700;
  font-size: 1rem;
`;

const AuctionTitleContainer = styled.div`
  clear: both;
  margin: 0 1rem;
`;

const AuctionTitle = styled.input.attrs((props) => ({
  type: 'text',
}))`
  width: 100%;
  height: 2.5rem;
  padding: 0 1rem;
  font-size: 1rem;
  border: none;
  border-radius: 0.5rem;
  background: grey;
`;

const TextareaContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 1rem;
`;

const AuctionText = styled.textarea`
  height: 20rem;
  padding: 1rem;
  font-size: 1rem;
  border: none;
  border-radius: 0.5rem;
  background: grey;
`;

const AuctionDetailInformationContainer = styled.div`
  display: flex;
  align-items: center;
  height: 4.5rem;
  margin: 1rem;
  padding: 1rem 2rem;
  border-radius: 1rem;
  background: ${(props) => props.theme.color_background__primary};
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
