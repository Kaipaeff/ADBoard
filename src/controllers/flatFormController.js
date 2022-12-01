const renderTemplate = require('../lib/renderReactModel');
const Fflat = require('../views/AddFlat');
const { Flat } = require('../../db/models');

const renderFlat = (req, res) => {
    const user = req.session.newUser;
    try {
        req.session.newUser?.email === 'admin@gmail.com' ? renderTemplate(Fflat, { user }, res) : res.send('нету такой страницы');
    } catch (error) {
        console.log(error);
    }
};

const postFlat = async (req, res) => {
    try {
        if (req.session.newUser?.email) {
            const {
                adress, photo, price, size, floor,
            } = req.body;
            await Flat.create({
                user_id: req.session.newUser.id, adress, photo, price, size, floor,
            });
            res.sendStatus(200);
        } else {
            res.send('нету такой страницы');
        }
    } catch (error) {
        console.log(error);
    }
};

module.exports = { renderFlat, postFlat };
