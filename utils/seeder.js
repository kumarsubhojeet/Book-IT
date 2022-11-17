const Room  = require('../Models/room')
const mongoose = require('mongoose');

const rooms = require('../data/rooms.json');

// const dbConnect = require ('../Config/dbConnect');

mongoose.connect('mongodb+srv://subhojeet:subhojeet@cluster0.4caoo.mongodb.net/BookIT?retryWrites=true&w=majority' , {
        useNewUrlParser: true,
    }).then(con => console.log('DB Connected!'))

const seedRooms = async() =>{
    try {
        await Room.deleteMany();
        console.log('Rooms are deleted');

        await Room.insertMany(rooms);
        console.log('All Rooms are Added');

    } catch (error) {
        console.log(error);
        process.exit()
    }
}

seedRooms()