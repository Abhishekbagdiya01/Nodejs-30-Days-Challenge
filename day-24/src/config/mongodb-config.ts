import mongoose from "mongoose";

async function connectToMongoDb () {
    try {
        const url: string = "mongodb://localhost:27017/30-days-node-challenge"
        await mongoose.connect(url).then(() => {
            console.log("MongoDB Connected");
        })
    } catch (error) {
        console.log(`Something went wrong Error : ${error}`);
    }
}

export default connectToMongoDb