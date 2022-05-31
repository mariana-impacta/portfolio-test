import React, { Component } from 'react';
import './../css/style.css';

export default class aboutMe extends Component {
    render() {
        return (
            <section id="home-section"
                className="hero">
                <div className="home-slider  owl-carousel">
                    <div className="slider-item ">
                        <div className="overlay"></div>
                        <div className="container">
                            <div className="row d-md-flex no-gutters slider-text align-items-end justify-content-end"
                                data-scrollax-parent="true">
                                <div className="one-third js-fullheight order-md-last img"
                                    style={{ backgroundImage: 'url(./../images/bg_1.png)' }}>
                                    <div className="overlay"></div>
                                </div>
                                <div className="one-forth d-flex  align-items-center ftco-animate"
                                    data-scrollax=" properties: { translateY: '70%' }">
                                    <div className="text">
                                        <span className="subheading">Hello!</span>
                                        <h1 className="mb-4 mt-3">I'm <span>Clark Thompson</span></h1>
                                        <h2 className="mb-4">A Freelance Web Designer</h2>
                                        <p><a href="http://google.com"
                                            className="btn btn-primary py-3 px-4">Hire me</a> <a href="http://google.com"
                                                className="btn btn-white btn-outline-white py-3 px-4">My works</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="slider-item">
                        <div className="overlay"></div>
                        <div className="container">
                            <div className="row d-flex no-gutters slider-text align-items-end justify-content-end"
                                data-scrollax-parent="true">
                                <div className="one-third js-fullheight order-md-last img"
                                    style={{ backgroundImage: 'url(./../images/bg_2.png)' }}>
                                    <div className="overlay"></div>
                                </div>
                                <div className="one-forth d-flex align-items-center ftco-animate"
                                    data-scrollax=" properties: { translateY: '70%' }">
                                    <div className="text">
                                        <span className="subheading">Hello!</span>
                                        <h1 className="mb-4 mt-3">I'm a <span>web designer</span> based in London</h1>
                                        <p><a href="http://google.com"
                                            className="btn btn-primary py-3 px-4">Hire me</a> <a href="http://google.com"
                                                className="btn btn-white btn-outline-white py-3 px-4">My works</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}