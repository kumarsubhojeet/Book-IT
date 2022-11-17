import React from 'react'
import { useSelector } from "react-redux";


export default function roomItems() {
    const { rooms } = useSelector(state => state.allRooms);
    console.log(rooms);
  
  return (
    <div>
        {
           rooms && rooms.length === 0 ? <div>No Rooms Found</div> : <div>
            {
                rooms.map(room => (
                    <>
                    <h1>{room.room.name}</h1>
                    </>
                ))
            }
           </div> 
        }
    </div>
  )
}
