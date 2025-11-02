import mongoose from 'mongoose';


// export const connectDB = async () => {
//     try {
//         await mongoose.connect(process.env.URL);
//         console.log(`MongoDB connected: ${connection.host}`);
//     } catch (err) {
//         console.log("error connecting to mongodb", err);
//     }

// }
export const connectDB = async () => {
    const uri = process.env.MONGO_URI?.trim();

    // Debug: Show what's actually in the env
    console.log("MONGO_URI from env:", uri);
    console.log("Type of MONGO_URI:", typeof uri);

    if (!uri) {
        throw new Error(
            "MONGO_URI is missing or empty! Check your .env file and make sure it's loaded."
        );
    }

    try {
        await mongoose.connect(uri);
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection error:", error.message);
        process.exit(1);
    }
};
// export const connectDB = () => {
//     mongoose.connect(process.env.URL)
//         .then(() => {
//             console.log("connected");
//         })
//         .catch((error) => {
//             console.log(error)
//         })
// }