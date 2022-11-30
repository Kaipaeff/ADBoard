const renderTemplate = require('../lib/renderReactModule');
const Main = require('../views/Main');

const renderMain = (req, res) => {
    try {
        renderTemplate(Main, null, res)
    } catch (error) {
        console.log(error);
    }
}

module.exports = {renderMain};