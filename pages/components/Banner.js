import React from 'react';

const Banner = () => {
        return (
            <section className="banner-one" id="banner">
                <span className="banner-one__shape-1"></span>
                <span className="banner-one__shape-2"></span>
                <span className="banner-one__shape-3"></span>
                <span className="banner-one__shape-4"></span>
                <div className="container">
                    <div className="banner-one__moc">
                        <img src="/assets/images/mocs/banner-moc-1-1.png" alt="Awesome Image" />
                    </div>
                    <div className="row">
                        <div className="col-xl-6 col-lg-8">
                            <div className="banner-one__content">
                                <h3 className="banner-one__title"><span>Aumente</span> as suas vendas <br />
                                conosco.</h3>
                                <p className="banner-one__text">Nos comprometemos em levar para nossos clientes
                                     <br /> os melhores serviços para o seu negócio <br /> crescer!
                                </p>
                                <a href="#" className="banner-one__btn thm-btn "><span>Saiba Mais</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
}
export default Banner;