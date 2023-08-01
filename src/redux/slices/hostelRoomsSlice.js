import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rooms: null,
  singleRoom: null,
  seletedRoomID: null,
};

const Rooms = createSlice({
  name: "Rooms",
  initialState,
  reducers: {
    setRooms: (state, actions) => {
      state.rooms = actions.payload;
    },
    setSingleRoom: (state, actions) => {
      state.singleRoom = actions.payload;
    },
    setSelectedRoomID: (state, actions) => {
      state.seletedRoomID = actions.payload;
    },
  },
});

export const { setRooms, setSelectedRoomID, setSingleRoom } = Rooms.actions;
export default Rooms.reducer;
