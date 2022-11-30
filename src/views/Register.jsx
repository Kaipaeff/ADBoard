const React = require('react');

const Layout = require('./Layout');

module.exports = function Registration() {
  return (
    <Layout>
      <h2>Зарегистрируйтесь</h2>
      <hr />
      <form action="/register" method="POST" id="loginForm">
        <label htmlFor="exampleInput1" className="form-label">Name</label>
        <input name="name" type="text" className="form-control" id="exampleInput1" />
        <label htmlFor="exampleInput2" className="form-label">Email</label>
        <input name="email" type="email" className="form-control" id="exampleInput2" />
        <label htmlFor="exampleInput3" className="form-label">Password</label>
        <input name="password" type="password" className="form-control" id="exampleInput3" />
        <button type="submit" className="btn btn-primary">Зарегистрироваться</button>
      </form>
      <hr />
    </Layout>
  );
};
