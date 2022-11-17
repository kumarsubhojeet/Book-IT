import mongoose from "mongoose";

const dbConnect = () => {
    if(mongoose.connection.readyState >= 1) {
        return
    }

    mongoose.connect('mongodb+srv://subhojeet:subhojeet@cluster0.4caoo.mongodb.net/BookIT?retryWrites=true&w=majority' , {
        useNewUrlParser: true,
    }).then(con => console.log('DB Connected!'))
}

export default dbConnect