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
  flex-wrap: wrap;
  width: 28%;
  height: 55%;
  margin: 2%;
  border-radius: 1rem !important;
  cursor: pointer;
  border: 0.1rem solid transparent;
  // border: 3.5px solid ${(props) => props.theme.color_border__topleft};
  // border-right: 3.5px solid ${(props) =>
    props.theme.color_border__bottomright};
  // border-bottom: 3.5px solid ${(props) =>
    props.theme.color_border__bottomright};
  background: ${(props) => props.theme.color_background__primary} !important;
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
  padding: 1rem;
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
    <Container onClick={selectFromInventoryFunc} sx={{ maxWidth: '100%' }}>
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
            <p>이미 올라간 물품입니다.</p>
          </UnableCard>
        )}
      </ItemContentContainer>
    </Container>
  );
};

export default InventoryItem;
