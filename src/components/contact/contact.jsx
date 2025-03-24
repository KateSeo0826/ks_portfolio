import React from 'react'
import styles from './contact.module.css'
export const Contact = () => {
    return (
        <section id='contact' className={`${styles.contact} section`}>
            <div className='container section-title' data-aos='fade-up'>
                <h2>Contact</h2>
                <p>
                    I’d love to hear from you! Whether you have a question, a collaboration idea, or just want to say hello, feel free to reach out.
                    You can contact me through the form below or connect with me on social media.
                </p>
            </div>

            <div className='container' data-aos='fade-up' data-aos-delay='100'>
                <div className='row gy-4'>
                    <div className='col-lg-5'>
                        <div className={styles.infoWrap}>
                            <div
                                className={`${styles.infoItem} d-flex`}
                                data-aos='fade-up'
                                data-aos-delay='200'
                            >
                                <i className='bi bi-geo-alt flex-shrink-0'></i>
                                <div>
                                    <h3>Address</h3>
                                    <p>117 Broadway Ave Unit312, Toronto, Canada</p>
                                </div>
                            </div>

                            <div
                                className={`${styles.infoItem} d-flex`}
                                data-aos='fade-up'
                                data-aos-delay='300'
                            >
                                <i className='bi bi-telephone flex-shrink-0'></i>
                                <div>
                                    <h3>Call Us</h3>
                                    <p>+1 437 608 5544</p>
                                </div>
                            </div>

                            <div
                                className={`${styles.infoItem} d-flex`}
                                data-aos='fade-up'
                                data-aos-delay='400'
                            >
                                <i className='bi bi-envelope flex-shrink-0'></i>
                                <div>
                                    <h3>Email </h3>
                                    <p>dev.kateseo@gmail.com</p>
                                </div>
                            </div>
                            <iframe
                                src='https://maps.google.com/maps?width=100%25&amp;height=270&amp;hl=en&amp;q=25%20Howard%20St+(home)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
                                frameborder='0'
                                style={{ border: '0', width: '100%', height: '270px' }}
                                allowfullscreen=''
                                loading='lazy'
                                referrerpolicy='no-referrer-when-downgrade'
                            />
                        </div>
                    </div>

                    <div className='col-lg-7'>
                        <form
                            action='forms/contact.php'
                            method='post'
                            className={styles.emailForm}
                            data-aos='fade-up'
                            data-aos-delay='200'
                        >
                            <div className='row gy-4'>
                                <div className='col-md-6'>
                                    <label for='name-field' className='pb-2'>Your Name</label>
                                    <input
                                        type='text'
                                        name='name'
                                        id='name-field'
                                        className='form-control'
                                        required=''
                                    />
                                </div>

                                <div className='col-md-6'>
                                    <label for='email-field' className='pb-2'>Your Email</label>
                                    <input
                                        type='email'
                                        className='form-control'
                                        name='email'
                                        id='email-field'
                                        required=''
                                    />
                                </div>

                                <div className='col-md-12'>
                                    <label for='subject-field' className='pb-2'>Subject</label>
                                    <input
                                        type='text'
                                        className='form-control'
                                        name='subject'
                                        id='subject-field'
                                        required=''
                                    />
                                </div>

                                <div className='col-md-12'>
                                    <label for='message-field' className='pb-2'>Message</label>
                                    <textarea
                                        className='form-control'
                                        name='message'
                                        rows='10'
                                        id='message-field'
                                        required=''
                                    ></textarea>
                                </div>

                                <div className='col-md-12 text-center'>
                                    {/* <div className='loading'>Loading</div> */}
                                    <div className='error-message'></div>
                                    {/* <div className='sent-message'>
                                        Your message has been sent. Thank you!
                                    </div> */}
                                    <button type='submit'>Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section >
    )
}
