const React = require('react');
const Layout = require('./Layout');

module.exports = function Main({ user }) {
  return (
    <Layout user={user}>
      <div className="form__container">
        <div className="form__flat">
          <form data-formFlat="formFlat" className="row g-3 needs-validation" noValidate>
            <div className="col-md-6">
              <label htmlFor="validationCustom01" className="form-label">Адрес</label>
              <input name="adress" type="text" className="form-control" id="validationCustom01" value="Markss" required />
              <div className="valid-feedback">
                Looks good!
              </div>
            </div>
            <div className="col-md-4">
              <label htmlFor="validationCustom02" className="form-label">Фото(url)</label>
              <input name="photo" type="url" className="form-control" id="validationCustom02" value="Otto" required />
              <div className="valid-feedback">
                Looks good!
              </div>
            </div>
            <div className="col-md-3">
              <label htmlFor="validationCustomUsername" className="form-label">Цена: рубли/сутки</label>
              <div className="input-group has-validation">
                <input name="price" type="number" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
                <div className="invalid-feedback">
                  Please choose a price.
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <label htmlFor="validationCustom03" className="form-label">Размер в кв.м</label>
              <input name="size" type="number" className="form-control" id="validationCustom03" required />
              <div className="invalid-feedback">
                Please provide a valid number.
              </div>
            </div>
            <div className="col-md-3">
              <label htmlFor="validationCustom05" className="form-label">Этаж</label>
              <input name="floor" type="number" className="form-control" id="validationCustom05" required />
              <div className="invalid-feedback">
                Please provide a valid number.
              </div>
            </div>
            <div className="col-12">
              <button id="flatBtn" className="btn btn-primary" type="submit">Submit form</button>
            </div>
          </form>
        </div>
      </div>
      <script defer src="/js/formFlatAttentionScrypt.js" />
    </Layout>
  );
};
