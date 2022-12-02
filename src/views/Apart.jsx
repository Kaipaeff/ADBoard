const React = require('react');

const Layout = require('./Layout');

function Apart({ apart, user }) {
  return (
    <Layout user={user}>
      <div className="container">
        {/* <a href="/" className="back">&laquo; На Главную</a> */}
        <div className="cards cards-apart">
          {apart?.map((el) => (
            <a href={`/home/apart/${el.id}`}>
              <div className="card" style={{ width: '16rem' }} key={el.id}>
                <div className="card-body">
                  <figure className="figure">
                    <img src={el.photo} className="card-img-top figure-img img-fluid rounded" alt="" />
                  </figure>
                  <a className="card-text-apart">
                    Квартира
                    {' '}
                    {el.size}
                    {' '}
                    м²
                  </a>
                  <a className="card-text-apart">
                    {el.price}
                    {' '}
                    ₽ в месяц
                  </a>
                  <a className="card-text-apart">
                    Москва
                    {' '}
                    {el.adress}
                    ,
                    {' '}
                    {el.floor}
                    -й этаж
                  </a>
                  {/* <a href={`/home/apart/${el.id}`} className="btn btn-primary moreBtn">Подробнее</a> */}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </Layout>
  );
}

module.exports = { Apart };
