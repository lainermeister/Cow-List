const axios = require('axios');

module.exports = {
    getCowList: () => {
        return axios.get('/api/cows')
    },

    addCow: (cow) => {
        return axios.post('/api/cows', cow)
    }

}

