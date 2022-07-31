import Button from '@mui/material/Button';
import { AddItemModal } from './index';
import { useState } from 'react';
import ItemListCard from './ItemListCard';
import styled from 'styled-components';

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  justify-content: space-around;
`;

const ItemList = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const handleModal = () => setIsModalOpened(!isModalOpened);

  return (
    <>
      <Button onClick={handleModal}>아이템 추가</Button>
      <FlexContainer>
        <ItemListCard />
        <ItemListCard />
        <ItemListCard />
        <ItemListCard />
        <ItemListCard />
        <ItemListCard />
        <ItemListCard />
        <ItemListCard />
      </FlexContainer>
      <AddItemModal handleModal={handleModal} isModalOpened={isModalOpened} />
    </>
  );
};

export default ItemList;
