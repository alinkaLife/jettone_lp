import React from 'react'
import styles from '../section-title/SectionTitle.module.css'

const SectionTitle = ({ title, topTitle }) => {
    return (
        <div className={styles.title__wrapper}>
            {/* {topTitle && <h3 className={styles.top}>{topTitle}</h3>} */}
            <h2 className={styles.title}>{title}</h2>
        </div>
    )
}

export default SectionTitle
