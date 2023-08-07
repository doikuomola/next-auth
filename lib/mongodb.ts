import mongoose from 'mongoose';

const connectToDb = async () => {
  const uri = process.env.MONGODB_URI as string;
  try {
    await mongoose.connect(uri);
    console.log('Connect to mongodb');
  } catch (error) {
    console.log('Error connecting to the database: ', error);
  }
};

export default connectToDb;
