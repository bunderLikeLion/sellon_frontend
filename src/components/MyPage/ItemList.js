import { AddItemModal } from './index';
import { useState } from 'react';
import ItemListCard from './ItemListCard';
import styled from 'styled-components';
import useMyProductsQuery from 'queries/product/useMyProductsQuery';
import { Pagination } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  justify-content: left;
`;

const ItemListContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 80vh;
`;

const PlusBtn = styled(AddCircleIcon)`
  position: absolute;
  right: 0;
  color: ${(props) => props.theme.color_font__secondary};
  font-size: 2.5rem !important;
  cursor: pointer;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 2%;
`;

const StyledPagination = styled(Pagination)`
  .MuiPagination-ul {
    button {
      color: ${(props) => props.theme.color_font__secondary} !important;
    }
    .Mui-selected {
      color: ${(props) => props.theme.color_font__number} !important;
    }
  }
`;

const ItemList = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [pageNum, setPageNum] = useState(1);

  const { data: myProductsData, isSuccess: myProductFetched } =
    useMyProductsQuery(pageNum, 6);

  const handleModal = () => setIsModalOpened(!isModalOpened);

  const handleChange = (event, value) => {
    setPageNum(value);
  };

  return (
    <ItemListContainer>
      <PlusBtn onClick={handleModal} />
      <p>총 {myProductsData?.total_count}개</p>
      <FlexContainer>
        {myProductFetched &&
          myProductsData.results.map((productData) => {
            return (
              <ItemListCard key={productData.id} productData={productData} />
            );
          })}
      </FlexContainer>
      <PaginationContainer>
        <StyledPagination
          count={myProductsData?.total_pages}
          page={pageNum}
          onChange={handleChange}
        />
      </PaginationContainer>
      <AddItemModal handleModal={handleModal} isModalOpened={isModalOpened} />
    </ItemListContainer>
  );
};

export default ItemList;
