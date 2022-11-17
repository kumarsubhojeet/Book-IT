import Room from "../Models/room";
import ErrorHandler from "../utils/errorHandler";
import catchAsyncError from "../middleware/catchAsyncError";
import APIFeatures from "../utils/apiFeatures";

//Create a new room => /api/rooms
const newRoom = catchAsyncError(async (req, res) => {
  const room = await Room.create(req.body);

  res.status(200).json({
    success: true,
    room,
  });
});

// Get all rooms
const allRooms = catchAsyncError(async (req, res) => {

  const resPerPage = 4;
  const roomCount = await Room.countDocuments();

  const apiFeatures = new APIFeatures(Room.find(), req.query)
  .search()
  .filter()

  const room = await apiFeatures.query;
  let filtereRoomsCount = room.length;

  apiFeatures.pagination(resPerPage)
  
  res.status(200).json({
    success: true,
    roomCount,
    resPerPage,
    filtereRoomsCount,
    room,
  });
});

// Get Single by id rooms
const getSingleRoom = catchAsyncError(async (req, res, next) => {
  const room = await Room.findById(req.query.id); // we use query in next instead of params
  if (!room) {
    // return  res.status(404).json({
    //   success: false,
    //   error: "Room not found with this ID",
    // });

    return next(new ErrorHandler("Room not found with this ID", 404));
  }
  res.status(200).json({
    success: true,
    room,
  });
});

// update a room
const updateRoom = catchAsyncError(async (req, res, next) => {
  let room = await Room.findById(req.query.id);
  if (!room) {
    return next(new ErrorHandler("Room not found with this ID", 404));
  }

  room = await Room.findByIdAndUpdate(req.query.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    room,
  });
});

// Delete a room

const deleteRoom = catchAsyncError(async (req, res, next) => {
  const room = await Room.findById(req.query.id);
  if (!room) {
    return next(new ErrorHandler("Room not found with this ID", 404));
  }

  await room.remove();

  res.status(200).json({
    success: true,
    message: "Room is deleted",
  });
});

export { allRooms, newRoom, getSingleRoom, updateRoom, deleteRoom };
