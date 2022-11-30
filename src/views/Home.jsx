const React = require('react');

const Layout = require('./Layout');

module.exports = function Home({ newUser }) {
  return (
    <Layout newUser={newUser}>
      <h1>
        test
        { newUser }
      </h1>
    </Layout>
  );
};
