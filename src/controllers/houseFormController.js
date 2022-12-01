const renderTemplate = require('../lib/renderReactModel');
const Hhouse = require('../views/AddHouse');
const { House } = require('../../db/models');

const renderHouse = (req, res) => {
    const user = req.session.newUser;
    try {
        req.session.newUser?.email === 'admin@gmail.com' ? renderTemplate(Hhouse, { user }, res) : res.send('нету такой страницы');
    } catch (error) {
        console.log(error);
    }
};

const postHouse = async (req, res) => {
    try {
        if (req.session.newUser?.email) {
            const {
                adress, photo, price, size,
            } = req.body;
            await House.create({
                user_id: req.session.newUser.id, adress, photo, price, size,
            });
            res.sendStatus(200);
        } else {
            res.send('нету такой страницы');
        }
    } catch (error) {
        console.log(error);
    }
};

module.exports = { renderHouse, postHouse };
