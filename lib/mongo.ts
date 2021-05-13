import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/jaguar', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('connected!'));
