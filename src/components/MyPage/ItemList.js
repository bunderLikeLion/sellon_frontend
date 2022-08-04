import { AddItemModal } from './index';
import { useState } from 'react';
import ItemListCard from './ItemListCard';
import styled from 'styled-components';
import AddBoxIcon from '@mui/icons-material/AddBox';
import useMyProductsQuery from 'queries/product/useMyProductsQuery';
import { Pagination } from '@mui/material';

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  justify-content: space-around;
`;

const ItemListContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 80vh;
`;

const PlusBtn = styled(AddBoxIcon)`
  color: #5d0fa2;
  font-size: 3rem !important;
  position: absolute;
  right: 0;
  cursor: pointer;
`;

const ItemList = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [pageNum, setPageNum] = useState(1);

  const { data: myProductsData, isSuccess: myProductFetched } =
    useMyProductsQuery(pageNum);

  const handleModal = () => setIsModalOpened(!isModalOpened);

  const handleChange = (event, value) => {
    setPageNum(value);
  };

  return (
    <ItemListContainer>
      <PlusBtn onClick={handleModal} />
      <p>총 5개</p>
      <FlexContainer>
        {myProductFetched &&
          myProductsData.results.map((productData) => {
            return (
              <ItemListCard key={productData.id} productData={productData} />
            );
          })}
      </FlexContainer>
      <Pagination
        count={myProductsData?.total_pages}
        page={pageNum}
        onChange={handleChange}
      />

      <AddItemModal handleModal={handleModal} isModalOpened={isModalOpened} />
    </ItemListContainer>
  );
};

export default ItemList;
