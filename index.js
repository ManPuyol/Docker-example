const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Failed to connect to MongoDB', err));

// Define a simple schema and model
const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
});

const User = mongoose.model('User', UserSchema);

// Create a sample user
const user = new User({
    name: 'John Doe',
    email: 'john@example.com',
});

user.save()
    .then(() => console.log('Sample user created'))
    .catch(err => console.error('Failed to create sample user', err));

app.get('/', async (req, res) => {
    const example = await User.find({});
    res.send(example);
    //   res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});