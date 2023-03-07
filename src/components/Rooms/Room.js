import { ListItem, ListItemText } from "@mui/material"


export default function Room({room}) {
    return (
          <ListItem>
            <ListItemText primary={room.roomId} />
          </ListItem>
    );
}
