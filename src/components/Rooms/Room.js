export default function Room(room) {
    room = room.room
    console.log(room.roomId);
    return (
        <li key={room.roomId}>
            {room.roomId}: {room.roomStatus ? 'vacant' : 'occupied'}
        </li>
    );
}

