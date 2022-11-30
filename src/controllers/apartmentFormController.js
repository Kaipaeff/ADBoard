const renderTemplate = require('../lib/renderReactModel');
const Apart = require('../views/AddApartment');
const { Apartment } = require('../../db/models');

const renderApart = (req, res) => {
    try {
        req.session.newUser?.email === 'admin@gmail.com' ? renderTemplate(Apart, null, res) : res.send('нету такой страницы');
    } catch (error) {
        console.log(error);
    }
};

const postApart = async (req, res) => {
    try {
        if (req.session.newUser?.email) {
            const { adress, photo, price, size, floor, type } = req.body;
            await Apartment.create({ user_id: req.session.newUser.id, adress, photo, price, size, floor, type });
            res.sendStatus(200);
        } else {
            res.send('нету такой страницы')
        }
    } catch (error) {
        console.log(error);
    }
};

module.exports = { renderApart, postApart };