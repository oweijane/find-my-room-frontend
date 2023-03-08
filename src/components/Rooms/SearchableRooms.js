import React, { useState } from 'react';
import Room from './Room';
import { List, TextField } from '@mui/material';


export default function SearchableRooms({rooms}) {
  const [filteredRooms, setFilteredRooms] = useState(rooms);
  const [prevRooms, setPrevRooms] = useState(null);

  if (rooms !== prevRooms) {
    if(prevRooms !== null)
      setFilteredRooms(rooms);
    setPrevRooms(rooms);
  }
  
  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    const filtered = rooms.filter((item) =>
      item.roomId.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredRooms(filtered);
  };

  return (
    <div>
      <TextField
        label="Search"
        variant="outlined"
        onChange={handleInputChange}
        size='small'
      />
      <List dense={true}>
        {filteredRooms.map((room) => (
          <Room room={room} key={room.roomId}/>
        ))}
      </List>
    </div>
  );
}
