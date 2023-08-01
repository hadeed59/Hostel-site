import { dispatch } from "../redux/store";
import { hostelRooms } from "../fakeAPIS/hostelRooms";
import {
  setRooms,
  setSelectedRoomID,
  setSingleRoom,
} from "../redux/slices/hostelRoomsSlice";

export const getHostelRooms = async () => {
  try {
    const response = await hostelRooms;
    dispatch(setRooms(response));
  } catch (e) {
    console.log(e);
  }
};

export const getSingleRoom = async (id) => {
  try {
    const response = await hostelRooms.filter((room) => room.id === id);
    dispatch(setSelectedRoomID(id));
    dispatch(setSingleRoom(response[0]));
  } catch (e) {
    console.log(e);
  }
};
