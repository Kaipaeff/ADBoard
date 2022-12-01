const React = require('react');

const Layout = require('./Layout');

module.exports = function Registration() {
  return (
    <Layout>
      <div className="container">

        <h2>Зарегистрируйтесь</h2>
        <form className="reg-form" action="/register" method="POST" id="loginForm">
          <label htmlFor="exampleInput1" className="form-label">Ваше имя</label>
          <input name="name" type="text" className="form-control" id="exampleInput1" />
          <label htmlFor="exampleInput2" className="form-label">Адрес электронной почты</label>
          <input name="email" type="email" className="form-control" id="exampleInput2" />
          <label htmlFor="exampleInput3" className="form-label">Пароль</label>
          <input name="password" type="password" className="form-control" id="exampleInput3" />
          <button type="submit" className="btn btn-primary reg-btn">Зарегистрироваться</button>
        </form>
      </div>
    </Layout>
  );
};
