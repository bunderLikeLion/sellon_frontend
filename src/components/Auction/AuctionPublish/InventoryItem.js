import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import styled from 'styled-components';
import CardHeader from '@mui/material/CardHeader';
import { EnabledOverlay } from '../../../styles/StyledComponetStyles';

const Container = styled(Card)`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-shrink: 1;
  flex-grow: 1;
  flex-basis: calc((100% - 6rem) / 4);
  max-width: calc((100% - 6rem) / 4);
  border-radius: 1rem !important;
  cursor: pointer;
  border: 0.1rem solid transparent;
  background: ${(props) => props.theme.color_background__primary} !important;

  @media screen and (max-width: 1400px) {
    flex-basis: calc((100% - 4rem) / 3);
    max-width: calc((100% - 4rem) / 3);
  }

  @media screen and (max-width: 1000px) {
    flex-basis: calc((100% - 2rem) / 2);
    max-width: calc((100% - 2rem) / 2);
  }
  @media screen and (max-width: 500px) {
    flex-basis: 100%;
    max-width: 100%;
  }

  :hover {
    border: 0.1rem solid ${(props) => props.theme.color_border__hover__light} !important;
  }
`;

const ImgContainer = styled.div`
  width: 100%;
  height: 9rem;
`;

const ItemContentContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 6rem;
  padding: 1rem;
  background: ${(props) => props.theme.color_background__primary};
  font-size: 100rem !important;
`;

const CardTop = styled.div`
  width: 100%;
  color: ${(props) => props.theme.color_font__secondary};
`;

const UnableCard = styled(EnabledOverlay)`
  padding: 1.6rem;
  font-size: 1.3rem;
  line-height: 1.8rem;
  box-shadow: 0 0 4px 7px ${(props) => props.theme.color_background__default} !important;
`;

const CardHeaderTitle = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  text-overflow: ellipsis !important;
  white-space: nowrap;
  font-size: 1.2rem;
  padding: 1rem 0;
`;

const CategoryBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: fit-content;
  padding: 0.3rem 1rem;
  font-size: 0.8rem;
  margin-bottom: 1rem;
  border-radius: 20px;
  color: ${(props) => props.theme.color_buttontext__ok};
  background: ${(props) => props.theme.color_background__success};
`;

const InventoryItem = ({
  singleItem,
  setSelectedItem,
  handleModal,
  status,
}) => {
  const selectFromInventoryFunc = () => {
    if (!status) {
      setSelectedItem(singleItem);
      handleModal();
    }
  };

  return (
    <Container onClick={selectFromInventoryFunc}>
      <ImgContainer>
        <CardMedia component="img" image={singleItem?.thumbnail?.file} />
      </ImgContainer>
      <ItemContentContainer>
        <CardTop>
          {/* <CardHeader title={singleItem?.name} /> */}
          <CardHeaderTitle>{singleItem?.name}</CardHeaderTitle>
          <CategoryBox>{singleItem?.product_category.name}</CategoryBox>
        </CardTop>
        {status && (
          <UnableCard>
            <p>이미 사용한 아이템입니다.</p>
          </UnableCard>
        )}
      </ItemContentContainer>
    </Container>
  );
};

export default InventoryItem;
