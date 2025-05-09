const express = require('express');
const mongoose = require('mongoose');
const reviewRoutes = require('./routes/reviewRoutes');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/reviewservice')
  .then(() => console.log('✅ MongoDB connected to Review Service'))
  .catch(err => console.error('❌ MongoDB error:', err));

app.use('/api/reviews', reviewRoutes);

const PORT = 5003;
app.listen(PORT, () => console.log(`📝 Review Service running on port ${PORT}`));
