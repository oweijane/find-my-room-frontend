import { fetchAllRooms, fetchVacantRooms } from './RoomService';
import { useEffect, useState } from 'react';
import Room from './Room';


export default function Rooms() {
    async function loadVacantRooms() {
        setRooms(await fetchVacantRooms());
    }

    async function loadAllRooms() {
        setRooms(await fetchAllRooms());
    }

    /**
     * Returns html to list all rooms of a specific roomStatus
     *
     * @param {boolean} roomStatus The status of the rooms to list
     */
    function listRooms(roomStatus) {
        return (
            <ul>
                {rooms.filter(room => room.roomStatus == roomStatus).map(room => <Room room={room} />)}
            </ul>
        );
    }

    const [rooms, setRooms] = useState([]);

    useEffect(() => {loadAllRooms()}, []);

    return (
        <div>
            <div id='vacant'>
                {listRooms(true)}
            </div>
            
            <div id='occupied'>
                {listRooms(false)}
            </div>
        </div>
    );
}
