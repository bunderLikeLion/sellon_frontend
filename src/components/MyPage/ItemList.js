import Button from '@mui/material/Button';
import { AddItemModal } from './index';
import { useState } from 'react';

const ItemList = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const handleModal = () => setIsModalOpened(!isModalOpened);

  return (
    <>
      <Button onClick={handleModal}>아이템 추가</Button>
      <p>Items</p>
      <p>Items</p>
      <p>Items</p>
      <AddItemModal handleModal={handleModal} isModalOpened={isModalOpened} />
    </>
  );
};

export default ItemList;
