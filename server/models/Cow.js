const db = require('../db');

module.exports = {

    addCow: (name, description) => {
        console.log(`Add this cow: ${name} ${description}`)
        return db.findOrCreate({
            where: { name: name },
            defaults: { description: description }
        })
    },

    showAllCows: () => {
        return db.findAll({
            attributes: ['name', 'description', 'id']
        })
    }

}