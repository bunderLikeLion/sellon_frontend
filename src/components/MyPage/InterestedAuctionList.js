import { AddItemModal } from './index';
import { useState } from 'react';
import ItemListCard from './ItemListCard';
import styled from 'styled-components';
import AddBoxIcon from '@mui/icons-material/AddBox';
import InterestedAuctionListCard from './InterestedAuctionListCard';

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

const InterestedAuctionList = () => {
  return (
    <ItemListContainer>
      <p>총 3개</p>
      <FlexContainer>
        <InterestedAuctionListCard />
        <InterestedAuctionListCard />
        <InterestedAuctionListCard />
        <InterestedAuctionListCard />
        <InterestedAuctionListCard />
        <InterestedAuctionListCard />
        <InterestedAuctionListCard />
        <InterestedAuctionListCard />
      </FlexContainer>
    </ItemListContainer>
  );
};

export default InterestedAuctionList;
