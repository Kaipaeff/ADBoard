const React = require('react');

const Layout = require('./Layout');

module.exports = function Login() {
  return (
    <Layout>
      <h2>Войдите на сайт</h2>
      <hr />
      <form action="/login" method="POST" id="loginForm">
        <label htmlFor="exampleInput1" className="form-label">Email</label>
        <input name="email" type="email" className="form-control" id="exampleInput2" />
        <label htmlFor="exampleInput2" className="form-label">Password</label>
        <input name="password" type="password" className="form-control" id="exampleInput3" />
        <button type="submit" className="btn btn-primary">Войти</button>
      </form>
      <hr />
    </Layout>
  );
};
