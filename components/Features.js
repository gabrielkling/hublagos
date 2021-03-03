import React from 'react';

const Features = () => {
        return (
            <section className="service-one" id="features">
                <div className="container">
                    <div className="block-title text-center">
                        <h2 className="block-title__title">Conheça os nossos <span>Serviços</span> <br /> abaixo!
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-duration="1500ms">
                            <div className="service-one__single text-center">
                                <div className="service-one__inner">
                                    <i className="service-one__icon dimon-icon-laptop"></i>
                                    <h3><a href="#">Criação <br /> de Websites</a></h3>
                                    <p>Invista em um <br />site Profissional para a <br />sua empresa e Transforme <br />seu Digital.</p>
                                    <a href="#" className="service-one__link"><i className="dimon-icon-right-arrow"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInDown" data-wow-duration="1500ms">
                            <div className="service-one__single text-center">
                                <div className="service-one__inner">
                                    <i className="service-one__icon dimon-icon-presentation"></i>
                                    <h3><a href="#">Marketing <br /> Digital</a></h3>
                                    <p>Planejamento e criação <br /> de estratégias de Marketing e <br /> Vendas para a sua empresa.</p>
                                    <a href="#" className="service-one__link"><i className="dimon-icon-right-arrow"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-duration="1500ms">
                            <div className="service-one__single text-center">
                                <div className="service-one__inner">
                                    <i className="service-one__icon dimon-icon-target"></i>
                                    <h3><a href="#">Gerenciamento de <br /> Tráfego</a></h3>
                                    <p>Criação e gerenciamento de campanhas<br /> pagas em todas as <br /> plataformas de anúncio.</p>
                                    <a href="#" className="service-one__link"><i className="dimon-icon-right-arrow"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInDown" data-wow-duration="1500ms">
                            <div className="service-one__single text-center">
                                <div className="service-one__inner">
                                    <i className="service-one__icon dimon-icon-visualization"></i>
                                    <h3><a href="#">Marketing de <br /> Conteúdo</a></h3>
                                    <p>Produção e criação de<br /> materiais estratégicamente <br /> elaborados para o seu público alvo.</p>
                                    <a href="#" className="service-one__link"><i className="dimon-icon-right-arrow"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
}
export default Features;
