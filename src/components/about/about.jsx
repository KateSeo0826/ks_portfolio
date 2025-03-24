import React from 'react'
import styles from './about.module.css'
export const About = () => {
    return (
        <section id='about' className={`${styles.about} section`} >
            <div className="container section-title" data-aos="fade-up">
                <h2>About</h2>
                <p>
                    I am a widely skilled and creative web developer. I am particularly passionate about web development and technology.
                    I have a growth mindset and love to learn. I persistently put in the time and effort to improve myself.
                    I want to become the best developer I can be.
                </p>
            </div>
            <div className="container" data-aos="fade-up" data-aos-delay="100">
                <div className="row gy-4 justify-content-center">
                    <div className="col-lg-4">
                        <img
                            src="images/main_bg2.jpg"
                            className="img-fluid"
                            alt=""
                        />
                    </div>
                    <div className={`${styles.content} col-lg-8`}>
                        <h2>Full Stack Developer &amp; Front End Developer.</h2>
                        <p className="fst-italic py-3">
                            I am a widely skilled and creative web developer. I am particularly passionate about web development and technology.
                            I have a growth mindset and love to learn. I persistently put in the time and effort to improve myself.
                            I want to become the best developer I can be.
                        </p>
                        <div className="row">
                            <div className="col-lg-6">
                                <ul>
                                    <li>
                                        <i className="bi bi-chevron-right"></i>
                                        <strong>Website:</strong> <span>www.devkate.com</span>
                                    </li>
                                    <li>
                                        <i className="bi bi-chevron-right"></i>
                                        <strong>Phone:</strong> <span>+1 437-608-5544</span>
                                    </li>
                                    <li>
                                        <i className="bi bi-chevron-right"></i>
                                        <strong>City:</strong> <span>Toronto, Canada</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <ul>
                                    <li>
                                        <i className="bi bi-chevron-right"></i>
                                        <strong>Major:</strong> <span>Computer Programming</span>
                                    </li>
                                    <li>
                                        <i className="bi bi-chevron-right"></i>
                                        <strong>Email:</strong> <span>dev.kateseo@gmail.com</span>
                                    </li>
                                    <li>
                                        <i className="bi bi-chevron-right"></i>
                                        <strong>Freelance:</strong> <span>Available</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}
