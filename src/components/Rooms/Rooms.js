import { fetchAllRooms } from './RoomService';
import { useEffect, useState } from 'react';
import { Box, Tab, Tabs } from '@mui/material';
import SearchableRooms from './SearchableRooms';
import TabPanel from './util/TabPanel';

export default function Rooms() {
  async function loadAllRooms() {
    const newRooms = await fetchAllRooms();
    setVacantRooms(newRooms.filter(room => room.roomStatus === true));
    setOccupiedRooms(newRooms.filter(room => room.roomStatus === false));
  }
  const [vacantRooms, setVacantRooms] = useState([]);
  const [occupiedRooms, setOccupiedRooms] = useState([]);

  const [tabValue, setTabValue] = useState(0);
  const handleTabChange = (event, newTabValue) => {
    setTabValue(newTabValue);
  };

  useEffect(() => {loadAllRooms()}, []);

  return (
    <div>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={tabValue} onChange={handleTabChange} >
          <Tab label="Vacant" />
          <Tab label="Occupied" />
        </Tabs>
      </Box>

      <TabPanel value={tabValue} index={0}>
        <SearchableRooms rooms={vacantRooms} />
      </TabPanel>
      <TabPanel value={tabValue} index={1}>
        <SearchableRooms rooms={occupiedRooms} />
      </TabPanel>
    </div>
  );
}
