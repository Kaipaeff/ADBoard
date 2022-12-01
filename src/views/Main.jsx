const React = require('react');

const Layout = require('./Layout');

function Main({
    flat, house, apartment, user,
}) {

    return (
        <Layout user={user}>

            <div className="container">
                <a href="/" className="back">Главная</a>
                {/* <main className="main"> */}
                <div data-cards="123" className="cards">
                    {flat.map((entry) => (
                        <div className="card" style={{ width: '16rem' }} key={entry.id}>
                            <div className="card-body">
                                <figure className="figure">
                                    <img src={entry.photo} className="card-img-top figure-img img-fluid rounded" alt="" />
                                </figure>
                                <p className="card-text">
                                    Комната
                                    {' '}
                                    {entry.size}
                                    {' '}
                                    м²
                                </p>
                                <p className="card-text">
                                    {entry.price}
                                    {' '}
                                    ₽ в месяц
                                </p>
                                <p className="card-text">
                                    Москва
                                    {' '}
                                    {entry.adress}
                                    ,
                                    {' '}
                                    {entry.floor}
                                    -й этаж
                                </p>
                                {user?.email === 'admin@gmail.com' ? (<a href={`/flat/update/${entry.id}`} className="btn btn-primary">Редактировать</a>) :
                                    (<a href={`/tasks/${entry.id}`} className="btn btn-primary">Подробнее</a>
                                    )}
                                {/* <a href="#" data-delBtn={entry.id} className="m-2 btn btn-danger">DELETE</a> */}
                            </div>
                        </div>
                    ))}

                    {house.map((entry) => (
                        <div className="card" style={{ width: '16rem' }} key={entry.id}>
                            <div className="card-body">
                                <figure className="figure">
                                    <img src={entry.photo} className="card-img-top figure-img img-fluid rounded" alt="" />
                                </figure>
                                <p className="card-text">
                                    Дом
                                    {' '}
                                    {entry.size}
                                    {' '}
                                    м²
                                </p>
                                <p className="card-text">
                                    {entry.price}
                                    {' '}
                                    ₽ в месяц
                                </p>
                                <p className="card-text" />
                                <p className="card-text">
                                    Москва
                                    {' '}
                                    {entry.adress}

                                    {' '}

                                </p>
                                {user?.email === 'admin@gmail.com' ? (<a href={`/house/update/${entry.id}`} className="btn btn-primary">Редактировать</a>) :
                                    (<a href={`/tasks/${entry.id}`} className="btn btn-primary">Подробнее</a>
                                    )}
                                {/* <a href="#" data-delBtn={entry.id} className="m-2 btn btn-danger">DELETE</a> */}
                            </div>
                        </div>
                    ))}

                    {apartment.map((entry) => (

                        <div className="card" style={{ width: '16rem' }} key={entry.id}>
                            <div className="card-body">
                                <figure className="figure">
                                    <img src={entry.photo} className="card-img-top figure-img img-fluid rounded" alt="" />
                                </figure>
                                <p className="card-text">

                                    Квартира
                                    {' '}
                                    {entry.size}
                                    {' '}
                                    м²
                                </p>
                                <p className="card-text">
                                    {entry.price}
                                    {' '}
                                    ₽ в месяц
                                </p>
                                <p className="card-text" />
                                <p className="card-text">
                                    Москва
                                    {' '}
                                    {entry.adress}

                                    ,
                                    {' '}
                                    {entry.floor}
                                    -й этаж

                                    {' '}
                                </p>
                                {user?.email === 'admin@gmail.com' ? (<a href={`/apart/update/${entry.id}`} className="btn btn-primary">Редактировать</a>) :
                                    (<a href={`/tasks/${entry.id}`} className="btn btn-primary">Подробнее</a>
                                    )}
                                {/* <a href="#" data-delBtn={entry.id} className="m-2 btn btn-danger">DELETE</a> */}
                            </div>
                        </div>
                    ))}

                </div>
                {/* </main> */}
            </div>

        </Layout>
    );
}

module.exports = Main;
