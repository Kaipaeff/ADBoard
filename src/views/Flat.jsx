const React = require('react');

const Layout = require('./Layout');

function Flat({ flat, user }) {
  return (
    <Layout user={user}>
      <div className="container">
        <div className="cards cards-flat">
          {user?.email === 'admin@gmail.com' ? (
            <>{flat?.map((el) => (
              <div className="card" style={{ width: '16rem' }} key={el.id}>
                <div className="card-body">
                  <figure className="figure">
                    <img src={el.photo} className="card-img-top figure-img img-fluid rounded" alt="" />
                  </figure>
                  <p className="card-text">
                    Комната
                    {' '}
                    {el.size}
                    {' '}
                    м²
                  </p>
                  <p className="card-text">
                    {el.price}
                    {' '}
                    ₽ в месяц
                  </p>
                  <p className="card-text">
                    Москва
                    {' '}
                    {el.adress}
                    ,
                    {' '}
                    {el.floor}
                    -й этаж
                  </p>
                  <a href={`/flat/update/${el.id}`} className="btn btn-primary editBtn">Редактировать</a>
                </div>
              </div>
            ))}
            </>
          ) :
            (
              <>
                {flat?.map((el) => (
                  <a href={`/home/flat/${el.id}`}>
                    <div className="card" style={{ width: '16rem' }} key={el.id}>
                      <div className="card-body">
                        <figure className="figure">
                          <img src={el.photo} className="card-img-top figure-img img-fluid rounded" alt="" />
                        </figure>
                        <a className="card-text-flat">
                          Комната
                          {' '}
                          {el.size}
                          {' '}
                          м²
                        </a>
                        <a className="card-text-flat">
                          {el.price}
                          {' '}
                          ₽ в месяц
                        </a>
                        <a className="card-text-flat">
                          Москва,
                          {' '}
                          {el.adress}
                          ,
                          {' '}
                          {el.floor}
                          -й этаж
                        </a>
                      </div>
                    </div>
                  </a>
                ))}
              </>
            )}
        </div>
      </div>
    </Layout>
  );
}

module.exports = Flat;
