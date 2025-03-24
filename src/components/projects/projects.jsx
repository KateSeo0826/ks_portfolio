import React, { useState } from 'react'
import styles from './projects.module.css'

const PROJECTS_LIST = [
    {
        "id": "1",
        "title": "Shopping App",
        "type": "E-commerce",
        "img": "images/pics/shopping_react.png",
        "demo": "https://kateshop.netlify.app/",
        "code": "https://github.com/KateSeo0826/shopping-cart-react",
    },
    {
        "id": "2",
        "title": "ExpenseTracker App",
        "type": "Web Application",
        "img": "images/pics/expenseTracker.jpg",
        "demo": "https://money-tracker-855ec.web.app/login",
        "code": "https://github.com/KateSeo0826/expense-tracker",
    },
    {
        "id": "3",
        "title": "KS Kitchen",
        "type": "E-commerce",
        "img": "images/pics/ks_kitchen.jpg",
        "demo": "https://kskitchen.netlify.app",
        "code": "https://github.com/KateSeo0826/Ks_Kitchen",
    },
    {
        "id": "4",
        "title": "Weather App",
        "type": "Web Application",
        "img": "images/pics/weather.jpg",
        "demo": "https://weather16days.netlify.app/",
        "code": "https://github.com/KateSeo0826/weatherapp_16days",
    },
    {
        "id": "5",
        "title": "Trello",
        "type": "Web Application",
        "img": "images/pics/trello.jpg",
        "demo": "https://kstrello.netlify.app",
        "code": "https://github.com/KateSeo0826/trello_react",

    },
    {
        "id": "6",
        "title": "Shopping App",
        "type": "E-commerce",
        "img": "images/pics/shopping-website.jpg",
        "demo": "https://shopping--ecommerce.herokuapp.com/",
        "code": "https://github.com/KateSeo0826/shopping-ecommerce",
    },
    {
        "id": "7",
        "title": "Personal Blog",
        "type": "Web Application",
        "img": "images/pics/personalBlog.png",
        "demo": "https://kateblog.netlify.app/home",
        "code": "https://github.com/KateSeo0826/kateblog",

    }
]
export const Projects = () => {
    const [filterMatches, setFilterMatches] = useState(PROJECTS_LIST)

    const showProject = (types) => {
        const list = PROJECTS_LIST.filter((match) => {
            return match.type === types;
        })

        if (types === 'All') {
            setFilterMatches(PROJECTS_LIST)
        }
        else {
            setFilterMatches(list)
        }
    }
    return (
        <section id='portfolio' className={`${styles.portfolio} section light-background`}>
            <div className='container section-title' data-aos='fade-up'>
                <h2>Portfolio</h2>
                <p>
                    I'm a front-end developer passionate about creating engaging and user-friendly web experiences. With expertise in HTML, CSS, and JavaScript,
                    <br /> I focus on responsive design and performance optimization.
                    I love collaborating with designers and back-end developers to bring ideas to life and ensure a seamless user experience.
                </p>
            </div>

            <div className='container'>
                <div
                    className='isotope-layout'
                    data-default-filter='*'
                    data-layout='masonry'
                    data-sort='original-order'
                >
                    <ul
                        className={`${styles.portfolioFilters} isotope-filters`}
                        data-aos='fade-up'
                        data-aos-delay='100'
                    >
                        <li onClick={() => showProject('All')}>All</li>
                        <li onClick={() => showProject('E-commerce')}>E-commerce</li>
                        <li onClick={() => showProject('Web Application')}>Web Application</li>
                    </ul>

                    <div
                        className='row gy-4 isotope-container'
                        data-aos='fade-up'
                        data-aos-delay='200'
                    >
                        {filterMatches.map((project, id) => (
                            <div
                                className='col-lg-4 col-md-6 portfolio-item'
                            >
                                <div className={`${styles.portfolioContent} h-100`}>
                                    <img
                                        src={project.img}
                                        className='img-fluid'
                                        alt=''
                                    />
                                    <div className={styles.portfolioInfo}>
                                        <h4>{project.title}</h4>
                                        <p>Check out my work and see how I bring ideas to life.</p>
                                        <a
                                            href={project.demo}
                                            title={`${project.title} Demo`}
                                            data-gallery='portfolio-gallery-app'
                                            className={`${styles.glightbox} ${styles.previewLink}`}
                                        ><i className='bi bi-zoom-in'></i
                                        ></a>
                                        <a
                                            href={project.code}
                                            title='Code'
                                            className={styles.detailsLink}
                                        ><i className='bi bi-link-45deg'></i
                                        ></a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section >
    )
}
