const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Enter Room Name"],
    trim: true, //use to remove blank space FROM start & end .
    maxLenght: [100, "cannot exide more than 100 characters"],
  },
  pricePerNight: {
    type: Number,
    required: [true, "Enter Room Price PerNight"],
    trim: true, //use to remove blank space FROM start & end .
    maxLenght: [5, "cannot exide more than 5 characters"],
    default: 0.0,
  },
  description: {
    type: String,
    required: [true, "Enter Room description"],
  },
  address: {
    type: String,
    required: [true, "Enter Room address"],
  },
  guestCapacity: {
    type: Number,
    required: [true, "Enter Room Guest Capacity"],
  },
  numOfBeds: {
    type: Number,
    required: [true, "Enter No. of Beds in Room"],
  },
  internet: {
    type: Boolean,
    default: false,
  },
  breakfast: {
    type: Boolean,
    default: false,
  },
  airConditioned: {
    type: Boolean,
    default: false,
  },
  roomCleaning: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    default: 0,
  },
  noOfReviews: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: [true, "Enter Category"],
    enum: {
      values: ["King", "Twins", "Single"],
      messages: "please select from the Category of rooms",
    },
  },
  // review: [
  //   {
  //     user: {
  //       type: mongoose.Schema.objectId,
  //       ref: "User",
  //     },
  //     name: {
  //       type: String,
  //       required: true,
  //     },
  //     rating: {
  //       type: Number,
  //       required: true,
  //     },
  //     comment: {
  //       type: String,
  //       required: true,
  //     },
  //   },
  // ],
  // user: {
  //   type: mongoose.Schema.objectId,
  //   ref: "User",
  //   required:false,
  // },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});


module.exports =  mongoose.models.Room || mongoose.model('Room' , roomSchema);