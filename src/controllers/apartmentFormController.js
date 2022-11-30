const renderTemplate = require('../lib/renderReactModule');
const Apart = require('../views/AddApartment');
const { Apartment } = require('../../db/models');

const renderApart = (req, res) => {
    try {
        renderTemplate(Apart, null, res);
    } catch (error) {
        console.log(error);
    }
};

const postApart = async (req, res) => {
    try {
        const { adress, photo, price, size, floor, type } = req.body;
        await Apartment.create({ user_id: 1, adress, photo, price, size, floor, type});
        res.sendStatus(200);

    } catch (error) {
        console.log(error);
    }
};

module.exports = { renderApart, postApart };