const React = require('react');

const Layout = require('./Layout');

module.exports = function Contact() {
  return (
    <Layout>
      <div className="container">
        <h2>Наши контакты:</h2>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">400005, India | Mumbai (Bombay)</li>
          <li className="list-group-item">Colaba Causeway | Shaheed Bhagat Singh Road</li>
          <li className="list-group-item">Leopold Cafe</li>
          <li className="list-group-item">07:00 - 00:00</li>
          <li className="list-group-item">phone: 00 91 22 2202 0131</li>
          <li className="list-group-item">https://leopoldcafe.com</li>

        </ul>
      </div>
    </Layout>
  );
};
