const renderTemplate = require('../lib/renderReactModule');
const Fflat = require('../views/AddFlat');
const { Flat } = require('../../db/models');

const renderFlat = (req, res) => {
    try {
        renderTemplate(Fflat, null, res);
    } catch (error) {
        console.log(error);
    }
};

const postFlat = async (req, res) => {
    try {
     const { adress, photo, price, size, floor} = req.body;
        await Flat.create({ user_id: 1, adress, photo, price, size, floor });
        res.sendStatus(200);
        
    } catch (error) {
        console.log(error);
    }
};

module.exports = { renderFlat, postFlat };