const renderTemplate = require('../lib/renderReactModule');
const Hhouse = require('../views/AddHouse');
const { House } = require('../../db/models');

const renderHouse = (req, res) => {
    try {
        renderTemplate(Hhouse, null, res);
    } catch (error) {
        console.log(error);
    }
};

const postHouse = async (req, res) => {
    try {
        const { adress, photo, price, size } = req.body;
        await House.create({ user_id: 1, adress, photo, price, size });
        res.sendStatus(200);

    } catch (error) {
        console.log(error);
    }
};

module.exports = { renderHouse, postHouse };