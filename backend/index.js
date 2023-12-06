const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./models');
const cors = require('cors');


const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(cors()); 


app.use('/cities', require('./routes/cities'));

sequelize.sync()
  .then(() => {
    console.log('Database synced');
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch(error => console.error('Error syncing database:', error));
