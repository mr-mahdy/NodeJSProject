const axios = require('axios');
const response = axios.post('https://prototipe.unpas.ac.id/situ/api/public/api-v1/klien/auth/login', {
    email: 'klien-api@gmail.com',
    password: 'klien1234'
});
console.log(response);

module.exports = response;