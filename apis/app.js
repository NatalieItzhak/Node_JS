  
const request = require('request');
const axios = require('axios');
const superagent = require('superagent');

const url = 'https://geek-jokes.sameerkumar.website/api?format=json';


request({ url: url }, (err, respone) => {
    console.log(respone.body);
});

const GetAxios = async (url) => {
    const respone = await axios.get(url);
    console.log(respone.data);
}; GetAxios(url);


superagent.get(url).end((err, res) => {
    console.log(res.body);
})