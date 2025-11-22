import mongoose from 'mongoose';

const connectDB = async () => {
  // try {
  //   const uri = process.env.MONGODB_URI;
  //   if (!uri || uri.includes('YOUR_PASSWORD')) {
  //     console.error('Missing or invalid MONGODB_URI in .env. Please set a valid connection string.');
  //     process.exit(1);
  //   }


   mongoose.connection.on('connected', () => {
      console.log('Connected to MongoDB');
    });

    await mongoose.connect(`${process.env.MONGODB_URI}/e-commerce` )
 
}

export default connectDB;