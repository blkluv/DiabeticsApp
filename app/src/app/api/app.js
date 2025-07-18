import axios from 'axios';

export const HOST = process.env.NEXT_PUBLIC_API_HOST;
export const API_KEY = process.env.API_KEY;
export const API_ID = process.env.API_ID;

export const API_URL = `${HOST}/api`; 

const fetchData = async (url) => {
  try {
    var options = {
            'method': 'GET',
            'url': url,
            'headers': {
                'Content-Type': 'application/json',
                'x-app-id': API_ID,
                'x-app-key': API_KEY
            }
        };

    const response = await axios.get(options.url, 
        {
            headers: options.headers,
            method: options.method
        }
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const searchItems = async (search) =>{
    
    fetchData(`https://trackapi.nutritionix.com/v2/search/instant/?query=${search}}`)
}


var request = require('request');

request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
