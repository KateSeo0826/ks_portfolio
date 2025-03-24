import React, { useEffect, useState } from 'react'
import styles from './footer.module.css'
export const Footer = () => {
    const [isVisible, setIsVisible] = useState(false)

    const toggleVisibility = () => {
        if (window.scrollY > 100) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility)
        return () => {
            window.removeEventListener('scroll', toggleVisibility)
        }
    })

    return (
        <>
            <footer id="footer" className={`${styles.footer} position-relative light-background`}>
                <div className="container">
                    <div className={`${styles.copyright} text-center`}>
                        <p>
                            © <span>Copyright</span>
                            <strong className="px-1 sitename">Kate Portfolio</strong>
                            <span>All Rights Reserved</span>
                        </p>
                    </div>
                    <div className={styles.credits}>
                        Designed by <a href='https://www.devkate.com/'>Kate Seo</a>
                    </div>
                </div>
            </footer>
            {isVisible &&
                <span
                    onClick={scrollToTop}
                    id='scroll-top'
                    className={`${styles.scrollTop} d-flex align-items-center justify-content-center`}
                >
                    <i className="bi bi-arrow-up-short"></i></span>
            }
        </>
    )
}
