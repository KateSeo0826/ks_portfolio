import React from 'react'
import Typewriter from 'typewriter-effect';
import styles from './home.module.css'
export const Home = () => {
    return (
        <section id='hero' className={styles.section}>
            <img src='images/main_bg5.jpg' alt='main_bg' data-aos='fade-in' />
            <div className={`${styles.container} container`}>
                <h2>Kate Seo</h2>
                <p>
                    I'm
                    <span>
                        <Typewriter
                            options={{
                                strings: ['Web Developer.', 'Front End Developer.', 'Full Stack Developer.'],
                                autoStart: true,
                                pauseFor: 1000,
                                loop: true,
                            }}
                        />
                    </span>
                </p>
            </div>
        </section>
    )

}
