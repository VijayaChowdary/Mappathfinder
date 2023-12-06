const axios = require('axios');
const { City } = require('./models');

const fetchData = async () => {
  try {
    const response = await axios.get('https://gist.githubusercontent.com/dastagirkhan/00a6f6e32425e0944241/raw/33ca4e2b19695b2b93f490848314268ed5519894/gistfile1.json');
    const citiesData = response.data;

    await City.bulkCreate(citiesData);
    console.log('Data inserted successfully');
  } catch (error) {
    console.error('Error inserting data:', error);
  } finally {
    process.exit();
  }
};

fetchData();
