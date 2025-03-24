import React, { useState } from 'react'
import styles from './navbar.module.css'
import { List, Instagram, Github, Linkedin, House, Person, FileEarmarkText, Images, Envelope, Lightbulb } from 'react-bootstrap-icons'
export const Navbar = () => {
    const [isShow, setIsShow] = useState(false)
    const toggleButton = () => {
        setIsShow(!isShow)
        console.log(isShow)
    }
    return (
        <header className={!isShow ? styles.header : styles.headerShow}>
            <div className={`d-xl-none ${styles.headerToggle} `}>
                <List onClick={toggleButton} />
            </div>
            <div className={styles.profileImg}>
                <img src='images/kate.JPG' alt='' className='img-fluid rounded-circle' />
            </div>
            <a href='index.html' className={styles.logo}>
                <h1>Kate Seo</h1>
            </a>
            <div className={styles.social_links}>
                <a href='https://github.com/KateSeo0826'><Github /></a>
                <a href='https://www.linkedin.com/in/devkateseo'><Linkedin /></a>
                <a href='https://www.instagram.com/violetds3/'><Instagram /></a>
            </div>
            <nav id='navMenu' className={styles.navMenu}>
                <ul>
                    <li><a href='#hero' className='active'><House className={styles.navIcon} />Home</a></li>
                    <li><a href='#about'><Person className={styles.navIcon} />About</a></li>
                    <li><a href='#skills'><Lightbulb className={styles.navIcon} />Skills</a></li>
                    <li><a href='docs/DongSeon(Kate)_Resume.pdf'><FileEarmarkText className={styles.navIcon} />Resume</a></li>
                    <li><a href='#portfolio'><Images className={styles.navIcon} />Portfolio</a></li>
                    <li><a href='#contact'> <Envelope className={styles.navIcon} />Contact</a></li>
                </ul>
            </nav>
        </header >
    )
}
