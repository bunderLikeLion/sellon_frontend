import styled from 'styled-components';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useState } from 'react';
import { ItemList } from './index';
import InterestedAuctionList from './InterestedAuctionList';
import TransactionHistory from './TransactionHistory';
import NoTransactionHistory from './NoTransactionHistory';
import MyAuctionList from './MyAuctionList'; //개인페이지-히스토리 없는 경우
import Chat from 'pages/Chat/Chat';

const StyledBox = styled(Box)`
  .MuiTabs-indicator {
    background: ${(props) => props.theme.color_border__hover} !important;
  }
`;

const StyledTabList = styled(Tab)`
  max-width: 500px !important;
  color: ${(props) => props.theme.color_font__secondary} !important;
`;

const TabBar = () => {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', mt: '5rem', typography: 'body1' }}>
      <TabContext value={value}>
        <StyledBox sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <StyledTabList label="히스토리" value="1" />
            <StyledTabList label="인벤토리" value="2" />
            <StyledTabList label="관심경매" value="3" />
            <StyledTabList label="내가 올린 경매" value="4" />
            <StyledTabList label="진행중인 거래" value="5" />
          </TabList>
        </StyledBox>
        <TabPanel value="1">
          <TransactionHistory />
          {/* <NoTransactionHistory /> */}
        </TabPanel>
        <TabPanel value="2">
          <ItemList />
        </TabPanel>
        <TabPanel value="3">
          <InterestedAuctionList />
        </TabPanel>
        <TabPanel value="4">
          <MyAuctionList />
        </TabPanel>
        <TabPanel value="5">
          <Chat />
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default TabBar;
