import React from 'react'
import styles from './skills.module.css'
export const Skills = () => {
    return (
        <section id='skills' className={`${styles.skills} section`}>
            <div className='container section-title' data-aos='fade-up'>
                <h2>Skills</h2>
                <p>
                    As a frontend developer, I focus on creating visually appealing and user-friendly interfaces that enhance the user experience
                </p>
            </div>

            <div className='container' data-aos='fade-up' data-aos-delay='100'>
                <div className='row skills-content skills-animation'>
                    <div className='col-lg-6'>
                        <div className={styles.progress}>
                            <span className={styles.skill}
                            ><span>HTML</span> <i className={styles.val}>100%</i></span
                            >
                            <div className={styles.progressBarWrap}>
                                <div
                                    className={`${styles.progressBar} ${styles.htmlValue}`}
                                ></div>
                            </div>
                        </div>

                        <div className={styles.progress}>
                            <span className={styles.skill}><span>CSS</span> <i className={styles.val}>90%</i></span>
                            <div className={styles.progressBarWrap}>
                                <div className={`${styles.progressBar} ${styles.cssValue}`}></div>
                            </div>
                        </div>

                        <div className={styles.progress}>
                            <span className={styles.skill}
                            ><span>JavaScript</span> <i className={styles.val}>75%</i></span>
                            <div className={styles.progressBarWrap}>
                                <div className={`${styles.progressBar} ${styles.jsValue}`}></div>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-6'>
                        <div className={styles.progress}>
                            <span className={styles.skill}
                            ><span>React</span> <i className={styles.val}>80%</i></span>
                            <div className={styles.progressBarWrap}>
                                <div className={`${styles.progressBar} ${styles.reactValue}`}></div>
                            </div>
                        </div>

                        <div className={styles.progress}>
                            <span className={styles.skill}
                            ><span>WordPress/CMS</span> <i className={styles.val}>80%</i></span
                            >
                            <div className={styles.progressBarWrap}>
                                <div className={`${styles.progressBar} ${styles.wordValue}`}></div>
                            </div>
                        </div>

                        <div className={styles.progress}>
                            <span className={styles.skill}
                            ><span>Node/js</span> <i className={styles.val}>70%</i></span
                            >
                            <div className={styles.progressBarWrap}>
                                <div className={`${styles.progressBar} ${styles.nodeValue}`}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
