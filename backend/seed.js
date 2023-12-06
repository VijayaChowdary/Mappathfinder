const fs = require('fs');
const { City } = require('./models');

const jsonData = JSON.parse(fs.readFileSync('path/to/cities.json', 'utf8'));

(async () => {
  try {
    await City.bulkCreate(jsonData);
    console.log('Data inserted successfully');
  } catch (error) {
    console.error('Error inserting data:', error);
  } finally {
    process.exit();
  }
})();
