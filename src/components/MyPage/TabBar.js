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

const StyledTabList = styled(Tab)`
  width: 10vw !important;
  max-width: 500px !important;
  color: ${(props) => props.theme.color_font__secondary} !important;
`;

const TabBar = () => {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', mt: '3rem', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <StyledTabList label="히스토리" value="1" />
            <StyledTabList label="인벤토리" value="2" />
            <StyledTabList label="관심거래" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <TransactionHistory />
        </TabPanel>
        <TabPanel value="2">
          <ItemList />
        </TabPanel>
        <TabPanel value="3">
          <InterestedAuctionList />
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default TabBar;
