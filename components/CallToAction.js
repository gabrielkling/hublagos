import React from 'react';

const CallToAction = () => {
        return (
            <section id="cta" className="cta-one">
                <img src="/assets/images/background/cta-one-bg.png" className="cta-one__bg" alt="Awesome Image" />
                <div className="container">
                    <img src="/assets/images/mocs/cta-moc-1-1.png" className="cta-one__moc" alt="Awesome Image" />
                    <div className="row justify-content-lg-end">
                        <div className="col-lg-6">
                            <div className="cta-one__content">
                                <i className="cta-one__icon dimon-icon-data1"></i>
                                <div className="block-title text-left">
                                    <h2 className="block-title__title">Poderosas <span>Estratégias</span> para atingir seus Clientes.
                                    </h2>
                                </div>
                                <div className="cta-one__text">
                                    <p>Realizamos um estudo de caso detalhado sobre o seu negócio para definir a melhor maneira de impulsionar suas vendas.</p>
                                </div>
                                <ul className="list-unstyled">
                                    <li><i className="fa fa-check"></i>Gerenciamento de Mídias Sociais.</li>
                                    <li><i className="fa fa-check"></i>Criação de Marketing de Conteúdo.
                                    </li>
                                    <li><i className="fa fa-check"></i>Criação de Websites, Aplicativos e Sistemas.
                                    </li>
                                    <li><i className="fa fa-check"></i>Criação e manutenção de Campanhas Patrocinadas nas redes sociais.
                                    </li>
                                </ul>
                                <a href="#" className="thm-btn"><span>Fale Conosco</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
}
export default CallToAction;