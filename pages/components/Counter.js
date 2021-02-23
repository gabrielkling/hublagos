import React, {Component} from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

export default class Counter extends Component {
    constructor(){
        super()
        this.state = {
            startCounter: false
        }
    }

    onVisibilityChange = isVisible => {
        if (isVisible) {
            this.setState({startCounter: true});
        }
    }

    render(){
        return (

            <section id="counter" className="fact-one">
                <div className="container">
                    <div className="block-title text-center">
                        <h2 className="block-title__title">Mais de  50 Clientes <br /> <span>Satisfeitos.</span>
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-duration="1500ms">
                            <div className="fact-one__single">
                                <div className="fact-one__inner">
                                    <h3 className="fact-one__count counter">
                                        <VisibilitySensor onChange={this.onVisibilityChange} offset={{top:10}} delayedCall><CountUp end={this.state.startCounter ? 325 : 0} /></VisibilitySensor>
                                    </h3>
                                    <p className="fact-one__text">campanhas</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-duration="1500ms">
                            <div className="fact-one__single">
                                <div className="fact-one__inner">
                                    <h3 className="fact-one__count counter">
                                        <VisibilitySensor onChange={this.onVisibilityChange} offset={{top:10}} delayedCall><CountUp end={this.state.startCounter ? 32 : 0} /></VisibilitySensor>
                                    </h3>
                                    <p className="fact-one__text">clientes</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-duration="1500ms">
                            <div className="fact-one__single">
                                <div className="fact-one__inner">
                                    <h3 className="fact-one__count counter">
                                        <VisibilitySensor onChange={this.onVisibilityChange} offset={{top:10}} delayedCall><CountUp end={this.state.startCounter ? 21 : 0} /></VisibilitySensor>
                                    </h3>
                                    <p className="fact-one__text">websites</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-duration="1500ms">
                            <div className="fact-one__single">
                                <div className="fact-one__inner">
                                    <h3 className="fact-one__count counter">
                                        <VisibilitySensor onChange={this.onVisibilityChange} offset={{top:10}} delayedCall><CountUp end={this.state.startCounter ? 28 : 0} /></VisibilitySensor>
                                    </h3>
                                    <p className="fact-one__text">Projetos</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}