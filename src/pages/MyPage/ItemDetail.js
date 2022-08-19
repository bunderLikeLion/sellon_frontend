import styled from 'styled-components';
import ItemImage from 'components/MyPage/ItemDetail/ItemImage';
import ItemInfoContainer from 'components/MyPage/ItemDetail/ItemInfoContainer';
import { Link, useParams } from 'react-router-dom';
import { useSingleProductQuery } from 'queries/product';
import WrapContainer from 'layouts/WrapContainer';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useRecoilValue } from 'recoil';
import { userAtom } from 'states';
import { StyledLink } from 'styles/StyledComponetStyles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  margin: 2rem 2rem 0 2rem;
  padding: 1rem 0 2rem 0;
  color: ${(props) => props.theme.color_white};
`;

const UserUploadContainer = styled.div`
  min-width: 0;
  flex-basis: 50%;
  padding: 0 1rem;
  flex-wrap: wrap;
`;

const ItemDetailContainer = styled.div`
  flex: 1;
  padding-left: 1rem;
`;

const ArrowIconContainer = styled.div`
  width: 100%;
  height: 0.2rem;
  margin-bottom: 2rem;
`;

const ArrowIcon = styled(ArrowBackIosNewIcon)`
  width: 0.8rem;
  height: 0.8rem;
  cursor: pointer;
`;

const UpperContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  height: 5vh;
`;

const EditButton = styled.button`
  position: absolute;
  right: 0;
  width: 7rem;
  height: 2.3rem;
  border: none;
  border-radius: 1rem;
  font-size: 1rem;
  font-weight: 500;
  color: ${(props) => props.theme.color_font__secondary};
  background: ${(props) => props.theme.color_button__modify};
  :hover {
    //transition: 0.3s;
    //transform: translateY(-0.2rem);
    border: 1px solid ${(props) => props.theme.color_border__topleft};
  }
`;

const ItemTitle = styled.h3`
  margin: 1rem 0;
  font-size: 2.3rem;
  font-weight: bold;
  white-space: nowrap !important;
  overflow: hidden !important;
  text-overflow: ellipsis !important;
  color: ${(props) => props.theme.color_font__primary};
`;

const ContentContainer = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const StyledTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: 168,
    cursor: 'pointer',
    color: '#DFDCEF',
    backgroundColor: '#000000',
    fontSize: '1rem',
    lineHeight: '1rem',
    padding: '0.5rem'
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: '#000',
  },
});



const ItemDetail = () => {
  const user = useRecoilValue(userAtom);
  const { id: itemId } = useParams();
  const { data: singleItem, isSuccess: singleItemFetched } =
    useSingleProductQuery(itemId);
  const { name } = singleItem;
  return (
    <>
      <WrapContainer>
        <Container>
          <UpperContainer>
            <Link to={'/mypage/'}>
              <ArrowIcon />
            </Link>
            {user?.id === singleItem?.user?.id && (
              <StyledLink to={`/editItem/${singleItem?.id}`}>
                <EditButton>수정하기</EditButton>
              </StyledLink>
            )}
          </UpperContainer>

          <ContentContainer>
            <UserUploadContainer>
              {/*<ItemTitle>{name}</ItemTitle>*/}
              <StyledTooltip
                title={name}
                arrow
              >
                <ItemTitle>{name}</ItemTitle>
              </StyledTooltip>
              {singleItemFetched && <ItemImage singleItemData={singleItem} />}
            </UserUploadContainer>
            <ItemDetailContainer>
              {singleItemFetched && (
                <ItemInfoContainer singleItemData={singleItem} />
              )}
            </ItemDetailContainer>
          </ContentContainer>
        </Container>
      </WrapContainer>
    </>
  );
};

export default ItemDetail;