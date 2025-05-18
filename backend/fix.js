import mongoose from 'mongoose';
import { MONGODB_URI } from "./config/config.js";
import { User } from './models/user.js';

const fixIndexes = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Yhdistetty MongoDB:hen');

    await mongoose.connection.collection('users').dropIndexes();
    console.log('Indeksit poistettu');

    await User.syncIndexes();
    console.log('Indeksit synkronoitu skeeman kanssa');

    await mongoose.disconnect();
    console.log('Yhteys suljettu');
  } catch (error) {
    console.error('Virhe indeksien korjauksessa:', error);
  }
};

fixIndexes();