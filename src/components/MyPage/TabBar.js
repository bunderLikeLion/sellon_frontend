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
import MyAuctionList from './MyAuctionList'; //개인페이지-히스토리 없는 경우
import Chat from 'pages/Chat/Chat';

const StyledBox = styled(Box)`
  .MuiTabs-indicator {
    background: ${(props) => props.theme.color_border__hover} !important;
  }
`;

const StyledTab = styled(Tab)`
  max-width: 500px !important;
  color: ${(props) => props.theme.color_font__secondary} !important;
`;

const TabBar = ({ location }) => {
  const [value, setValue] = useState(location ? location : '1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', mt: '5rem', typography: 'body1' }}>
      <TabContext value={value}>
        <StyledBox sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList
            onChange={handleChange}
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
          >
            <StyledTab label="히스토리" value="1" />
            <StyledTab label="인벤토리" value="2" />
            <StyledTab label="관심경매" value="3" />
            <StyledTab label="내가 올린 경매" value="4" />
            <StyledTab label="진행중인 거래" value="5" />
          </TabList>
        </StyledBox>
        <TabPanel value="1">
          <TransactionHistory />
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
