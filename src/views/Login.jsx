const React = require('react');

const Layout = require('./Layout');

module.exports = function Login() {
  return (
    <Layout>
      <div className="container">
        <h2>Войдите на сайт</h2>
        <form className="login-form" action="/login" method="POST" id="loginForm">
          <label htmlFor="exampleInput1" className="form-label">Адрес электронной почты</label>
          <input name="email" type="email" className="form-control" id="exampleInput2" />
          <label htmlFor="exampleInput2" className="form-label">Пароль</label>
          <input name="password" type="password" className="form-control" id="exampleInput3" />
          <button type="submit" className="btn btn-primary login-btn">Войти</button>
        </form>
      </div>
    </Layout>
  );
};
