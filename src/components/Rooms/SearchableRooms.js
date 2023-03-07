import React, { useState } from 'react';
import Room from './Room';
import { List } from '@mui/material';
import SearchBar from 'material-ui-search-bar';


export default function SearchableRooms({rooms}) {
  const [filteredRooms, setFilteredRooms] = useState(rooms);
  const [prevRooms, setPrevRooms] = useState(null);
  const [value, setValue] = useState('');

  if (rooms !== prevRooms) {
    if(prevRooms !== null)
      setFilteredRooms(rooms);
    setPrevRooms(rooms);
  }
  
  const handleInputChange = (inputValue) => {
    const filtered = rooms.filter((item) =>
      item.roomId.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredRooms(filtered);
    setValue(inputValue);
  };

  return (
    <div>
      <SearchBar
        value={value}
        onChange={handleInputChange}
        onCancelSearch={() => handleInputChange('')}
      />
      <List dense={true}>
        {filteredRooms.map((room) => (
          <Room room={room} key={room.roomId}/>
        ))}
      </List>
    </div>
  );
}
