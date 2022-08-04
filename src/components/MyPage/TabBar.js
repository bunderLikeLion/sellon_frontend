import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useState } from 'react';
import { ItemList } from './index';
import InterestedAuctionList from './InterestedAuctionList';
import TransactionHistory from './TransactionHistory';

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
            <Tab label="히스토리" value="1" />
            <Tab label="인벤토리" value="2" />
            <Tab label="관심거래" value="3" />
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
